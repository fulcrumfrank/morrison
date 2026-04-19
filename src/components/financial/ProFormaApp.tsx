'use client';

import { useMemo, useState } from 'react';
import { InputsPanel } from './InputsPanel';
import { ViewControls } from './ViewControls';
import { ScenarioSelector } from './ScenarioSelector';
import { SummaryMetrics } from './SummaryMetrics';
import { CashFlowChart } from './CashFlowChart';
import { ResultsTable } from './ResultsTable';
import { ExportButtons } from './ExportButtons';
import { AssumptionsPanel } from './AssumptionsPanel';
import { defaultInputs } from '@/lib/financial/assumptions';
import { generateMonthlyModel } from '@/lib/financial/model';
import { aggregateRows } from '@/lib/financial/aggregation';
import { summarizeMonthlyRows } from '@/lib/financial/metrics';
import { basePreset } from '@/data/presets/base';
import { conservativePreset } from '@/data/presets/conservative';
import { aggressivePreset } from '@/data/presets/aggressive';
import type { Granularity, ModelInputs } from '@/lib/financial/types';

export function ProFormaApp() {
  const [inputs, setInputs] = useState<ModelInputs>(defaultInputs);
  const [granularity, setGranularity] = useState<Granularity>('year');

  const monthlyRows = useMemo(() => generateMonthlyModel(inputs), [inputs]);
  const displayRows = useMemo(() => aggregateRows(monthlyRows, granularity), [monthlyRows, granularity]);
  const metrics = useMemo(() => summarizeMonthlyRows(monthlyRows), [monthlyRows]);

  const applyPreset = (preset: 'conservative' | 'base' | 'aggressive') => {
    if (preset === 'conservative') setInputs(conservativePreset);
    if (preset === 'base') setInputs(basePreset);
    if (preset === 'aggressive') setInputs(aggressivePreset);
  };

  return (
    <div className="space-y-6">
      <ScenarioSelector onSelect={applyPreset} />
      <ViewControls
        holdYears={inputs.holdYears}
        granularity={granularity}
        onHoldYearsChange={(value) => setInputs({ ...inputs, holdYears: value })}
        onGranularityChange={setGranularity}
      />
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <InputsPanel inputs={inputs} onChange={setInputs} />
        <AssumptionsPanel inputs={inputs} />
      </div>
      <SummaryMetrics metrics={metrics} />
      <CashFlowChart rows={displayRows} />
      <ExportButtons rows={displayRows} />
      <ResultsTable rows={displayRows} />
    </div>
  );
}
