import { SectionHero } from '@/components/layout/SectionHero';
import { ContentSection } from '@/components/marketing/ContentSection';
import { visionContent } from '@/content/vision';

export default function VisionPage() {
  return (
    <div className="container-page space-y-6">
      <SectionHero title={visionContent.title} body={visionContent.intro} />
      {visionContent.sections.map((section) => (
        <ContentSection key={section.heading} heading={section.heading} body={section.body} />
      ))}
    </div>
  );
}
