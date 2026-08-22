"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { historicoPesquisas } from "../data/pesquisas_historico";

export function HistoricoPesquisas() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Evolução nas Pesquisas (2026)</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Intenção de voto acumulada ao longo dos meses (Cenário 1)</p>
      </div>
      
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={historicoPesquisas}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis dataKey="mes" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
              formatter={(value: any) => [`${value}%`, ""]}
            />
            <Legend wrapperStyle={{ paddingTop: "20px" }} />
            
            <Line type="monotone" dataKey="lula" name="Lula (PT)" stroke="#dc2626" strokeWidth={4} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="flavio" name="Flávio Bolsonaro (PL)" stroke="#1d4ed8" strokeWidth={4} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="caiado" name="Ronaldo Caiado (UNIÃO)" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="zema" name="Romeu Zema (NOVO)" stroke="#ea580c" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="branco" name="Branco/Nulo/Indecisos" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 text-center text-xs text-slate-400">
        * Dados agregados baseados na média móvel das principais pesquisas registradas no TSE.
      </div>
    </div>
  );
}
