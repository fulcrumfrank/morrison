import { SectionHero } from '@/components/layout/SectionHero';
import { ContentSection } from '@/components/marketing/ContentSection';
import { designContent } from '@/content/design';

export default function DesignPage() {
  return (
    <div className="container-page space-y-6">
      <SectionHero title={designContent.title} body={designContent.intro} />
      {designContent.sections.map((section) => (
        <ContentSection key={section.heading} heading={section.heading} body={section.body} />
      ))}
    </div>
  );
}
