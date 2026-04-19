import { SectionHero } from '@/components/layout/SectionHero';
import { ContentSection } from '@/components/marketing/ContentSection';
import { siteContent } from '@/content/site';

export default function SitePage() {
  return (
    <div className="container-page space-y-6">
      <SectionHero title={siteContent.title} body={siteContent.intro} />
      {siteContent.sections.map((section) => (
        <ContentSection key={section.heading} heading={section.heading} body={section.body} />
      ))}
    </div>
  );
}
