'use client';

import { rowsToCsv } from '@/lib/financial/exportCsv';
import type { CashFlowRow } from '@/lib/financial/types';

export function ExportButtons({ rows }: { rows: CashFlowRow[] }) {
  const downloadCsv = () => {
    const csv = rowsToCsv(rows);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'adu-pro-forma.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="section-card flex items-center justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold">Exports</h2>
        <p className="mt-2 text-sm text-muted">Download the currently displayed pro forma data as CSV.</p>
      </div>
      <button onClick={downloadCsv} className="rounded-2xl bg-ink px-4 py-2 text-sm font-medium text-white hover:opacity-90">
        Download CSV
      </button>
    </div>
  );
}
