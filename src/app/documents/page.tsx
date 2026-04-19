import { SectionHero } from '@/components/layout/SectionHero';
import { documentsContent } from '@/content/documents';

export default function DocumentsPage() {
  return (
    <div className="container-page space-y-6">
      <SectionHero title={documentsContent.title} body={documentsContent.intro} />
      <section className="grid gap-5 md:grid-cols-2">
        {documentsContent.items.map((item) => (
          <div key={item.title} className="section-card">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
