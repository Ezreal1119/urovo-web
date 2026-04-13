"use client";

import {
  PageShell,
  PageContainer,
  PageSection,
} from "@/components/layout/PageContainer";
import { PdaBattleCards } from "./PdaBatterCard";

export default function PosPage() {
  return (
    <PageShell>
      <PageContainer>
        <PageSection>
          <PdaBattleCards />
        </PageSection>
      </PageContainer>
    </PageShell>
  );
}
