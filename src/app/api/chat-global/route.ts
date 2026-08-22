import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { candidatos } from "../../../data/candidatos";

export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Create a massive knowledge base string from all candidates
  let dadosContexto = "DADOS OFICIAIS DOS CANDIDATOS:\n\n";
  candidatos.forEach(c => {
    dadosContexto += `CANDIDATO: ${c.nome} (${c.siglaPartido})\n`;
    dadosContexto += `Destaque: ${c.destaque}\n`;
    dadosContexto += "Propostas:\n";
    c.propostas.forEach(p => {
      dadosContexto += `- [${p.tema}] ${p.descricao}\n`;
    });
    dadosContexto += "\n-------------------\n\n";
  });

  const systemPrompt = `Você é um Analista Político Neutro e Especialista em Políticas Públicas da plataforma "Eleições 2026".
Sua função é tirar dúvidas dos eleitores fazendo comparações inteligentes, buscando semelhanças e diferenças entre os candidatos.

REGRA DE OURO E INQUEBRÁVEL: Baseie-se ÚNICA e EXCLUSIVAMENTE nos "DADOS OFICIAIS DOS CANDIDATOS" fornecidos abaixo.
Se o usuário perguntar sobre algo que não está no texto abaixo, responda: "Os planos de governo registrados não trazem informações específicas sobre esse tema."
NUNCA alucine, nunca assuma posições, nunca invente propostas, nunca tire conclusões de fora.

Seja direto, didático e use formatação (negrito, listas) para facilitar a leitura.

${dadosContexto}`;

  try {
    const result = await streamText({
      model: google("gemini-3.6-flash"),
      system: systemPrompt,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error: any) {
    console.error("AI Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

