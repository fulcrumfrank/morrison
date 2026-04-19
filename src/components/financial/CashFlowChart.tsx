'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { CashFlowRow } from '@/lib/financial/types';

export function CashFlowChart({ rows }: { rows: CashFlowRow[] }) {
  return (
    <div className="section-card">
      <h2 className="text-xl font-semibold">Cash Flow Trends</h2>
      <p className="mt-2 text-sm text-muted">Net cash flow and cumulative cash flow across the selected timeline.</p>
      <div className="mt-6 h-[360px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rows}>
            <XAxis dataKey="label" hide />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="netCashFlow" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="cumulativeCashFlow" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
