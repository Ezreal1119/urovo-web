"use client";

import {
  PageShell,
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageEyebrow,
  PageTitle,
  PageDescription,
  PageSection,
} from "@/components/layout/PageContainer";
import { PosBattleCards } from "./PosBattleCard";

export default function PosPage() {
  return (
    <PageShell>
      <PageContainer>
        <PageSection>
          <PosBattleCards />
        </PageSection>
      </PageContainer>
    </PageShell>
  );
}
