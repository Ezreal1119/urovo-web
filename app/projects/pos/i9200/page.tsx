import { ProductHero } from "@/app/projects/pos/i9200/ProductSpinHero";
import { PageShell } from "@/components/layout/PageContainer";

const page = () => {
  return (
    <main className="p-8">
      <PageShell className="min-h-screen">
        <ProductHero
          productPreview="Smart POS Product Preview"
          title="i9200"
          subtitle="Smart Mobile Terminal Ultra-Light, Flagship Power in your palm."
          image="/products/pos/i9200/i9200_All_in_One.png"
        />
      </PageShell>
    </main>
  );
};

export default page;
