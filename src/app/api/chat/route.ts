import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { candidatos } from "../../../data/candidatos";
import { governadores } from "../../../data/governadores";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, candidatoId, isGovernor } = await req.json();

  const list = isGovernor ? governadores : candidatos;
  const candidato = list.find((c) => c.id === candidatoId);

  if (!candidato) {
    return new Response("Candidato não encontrado", { status: 404 });
  }

  const propostasFormatadas = candidato.propostas.map(p => `- ${p.tema}: ${p.descricao}`).join("\n");

  const systemPrompt = `Você é um assistente virtual neutro e imparcial focado exclusivamente nas eleições de 2026.
O usuário está na página do candidato: ${candidato.nome} (${candidato.siglaPartido}).
Seu objetivo é responder dúvidas sobre as propostas DESTE candidato com base estritamente no seu plano oficial de governo.

Plano de Governo de ${candidato.nome}:
${propostasFormatadas}

Regras:
1. Seja educado, direto e conciso. Não enrole.
2. Não invente propostas que não estão no texto acima.
3. Se perguntarem algo que não está no texto, diga honestamente que "O plano de governo cadastrado não traz propostas específicas sobre esse tema".
4. Nunca critique ou elogie o candidato. Mantenha tom jornalístico/informativo.`;

  try {
    const result = await streamText({
      model: google("gemini-1.5-flash"),
      system: systemPrompt,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || error.toString() }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
