import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { candidatos } from "../../../data/candidatos";

export const maxDuration = 60; // Max allowed by Vercel Hobby on Node.js

export async function POST(req: Request) {
  try {
    const { messages, selectedIds } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    // Build context with selected candidates
    const selectedCandidates = candidatos.filter(c => selectedIds.includes(c.id));
    
    let dadosContexto = "DADOS OFICIAIS DOS CANDIDATOS PARTICIPANTES:\n\n";
    selectedCandidates.forEach(c => {
      dadosContexto += `CANDIDATO: ${c.nome} (${c.siglaPartido})\n`;
      dadosContexto += `Destaque: ${c.destaque}\n`;
      dadosContexto += "Propostas Oficiais:\n";
      c.propostas.forEach(p => {
        dadosContexto += `- ${p.tema}: ${p.descricao}\n`;
      });
      dadosContexto += "\n";
    });

    const systemPrompt = `
Você é o mediador de um debate presidencial virtual de 2026.
O usuário vai enviar o TEMA do debate.
Sua missão é escrever um roteiro de debate extremamente realista, dinâmico e respeitoso entre os candidatos fornecidos.
Baseie-se ESTRITAMENTE nos dados oficiais fornecidos abaixo. Não invente propostas que eles não têm, mas crie a dinâmica do debate (um respondendo ou rebatendo o outro de forma coesa, com o tom de voz político de cada um).

Formato exigido:
Escreva no formato de roteiro teatral:
**[Nome do Candidato]:** [fala do candidato]

Garanta que TODOS os candidatos participem respondendo ao tema central. Seja criativo na interação, mas factual nas propostas.

${dadosContexto}
`;

    const result = await streamText({
      model: google("models/gemini-3.6-flash"),
      system: systemPrompt,
      messages,
      temperature: 0.7,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Erro na API de debate:", error);
    return new Response(JSON.stringify({ error: "Ocorreu um erro no servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
