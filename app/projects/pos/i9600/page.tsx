import { PageShell } from "@/components/layout/PageContainer";
import { ProductSpinHero } from "./ProductSpinHero";

const page = () => {
  return (
    <main className="p-8">
      <PageShell className="min-h-screen">
        <ProductSpinHero
          productPreview="Smart POS Product Preview"
          title="i9600"
          subtitle="Dual-screen smart POS with flagship power, seamless interaction, and ultra-sleek design."
          images={{
            front: "/products/pos/i9600/front.png",
            left: "/products/pos/i9600/left.png",
            right: "/products/pos/i9600/right.png",
            back: "/products/pos/i9600/back.png",
            top: "/products/pos/i9600/top.png",
            bottom: "/products/pos/i9600/bottom.png",
          }}
        />
      </PageShell>
    </main>
  );
};

export default page;
