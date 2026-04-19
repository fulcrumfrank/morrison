'use client';

interface ScenarioSelectorProps {
  onSelect: (value: 'conservative' | 'base' | 'aggressive') => void;
}

export function ScenarioSelector({ onSelect }: ScenarioSelectorProps) {
  return (
    <div className="section-card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-xl font-semibold">Scenario Presets</h2>
        <p className="mt-2 text-sm text-muted">Use presets to jump between conservative, base, and aggressive assumptions.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="rounded-2xl border border-border px-4 py-2 text-sm hover:border-accent/50" onClick={() => onSelect('conservative')}>Conservative</button>
        <button className="rounded-2xl border border-border px-4 py-2 text-sm hover:border-accent/50" onClick={() => onSelect('base')}>Base</button>
        <button className="rounded-2xl border border-border px-4 py-2 text-sm hover:border-accent/50" onClick={() => onSelect('aggressive')}>Aggressive</button>
      </div>
    </div>
  );
}
