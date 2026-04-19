import { SectionHero } from '@/components/layout/SectionHero';
import { ProFormaApp } from '@/components/financial/ProFormaApp';

export default function FinancialModelPage() {
  return (
    <div className="container-page space-y-6">
      <SectionHero
        title="Financial Model"
        body="An interactive pro forma for evaluating construction, financing, operations, and sale assumptions over 5, 10, and 15 year hold periods."
      />
      <ProFormaApp />
    </div>
  );
}
