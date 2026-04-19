import { SectionHero } from '@/components/layout/SectionHero';
import { ContentSection } from '@/components/marketing/ContentSection';
import { processContent } from '@/content/process';

export default function ProcessPage() {
  return (
    <div className="container-page space-y-6">
      <SectionHero title={processContent.title} body={processContent.intro} />
      {processContent.sections.map((section) => (
        <ContentSection key={section.heading} heading={section.heading} body={section.body} />
      ))}
    </div>
  );
}
