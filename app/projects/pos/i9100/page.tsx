import { ProductSpinHero } from "@/app/projects/pos/i9100/ProductSpinHero";
import { PageShell } from "@/components/layout/PageContainer";
import React from "react";

const page = () => {
  return (
    <main className="p-8">
      <PageShell className="min-h-screen">
        <ProductSpinHero
          productPreview="Smart POS Product Preview"
          title="i9100"
          subtitle="High-security, all-in-one payment solution with powerful Android performance."
          images={{
            front: "/products/pos/i9100/front.png",
            left: "/products/pos/i9100/left.png",
            right: "/products/pos/i9100/right.png",
            back: "/products/pos/i9100/back.png",
            top: "/products/pos/i9100/top.png",
            bottom: "/products/pos/i9100/bottom.png",
            angleA: "/products/pos/i9100/angle-b.png",
            angleB: "/products/pos/i9100/angle-a.png",
          }}
        />
      </PageShell>
    </main>
  );
};

export default page;
