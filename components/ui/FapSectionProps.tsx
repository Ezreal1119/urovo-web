import React from "react";
import {
  PageSectionDescription,
  PageSectionTitle,
} from "@/components/layout/PageContainer";
import { CodeBlock } from "./CodeBlock";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

type FaqGroup = {
  title: string;
  items: FaqItem[];
};

type FaqSectionProps = {
  id?: string;
  title?: string;
  description?: React.ReactNode;
  codeBlockTitle: string;
  codeBlockDescription: string;
  groups: FaqGroup[];
  titleClassName?: string;
};

export function FaqSection({
  id,
  title,
  description,
  codeBlockTitle,
  codeBlockDescription,
  groups,
  titleClassName,
}: FaqSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="space-y-2">
        <PageSectionTitle id={id} className={titleClassName}>
          {title}
        </PageSectionTitle>

        <PageSectionDescription>{description}</PageSectionDescription>

        <CodeBlock title={codeBlockTitle} description={codeBlockDescription}>
          <div className="space-y-6">
            {groups.map((group) => (
              <div key={group.title} className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
                  {group.title}
                </h4>

                <div className="space-y-3">
                  {group.items.map((item) => (
                    <details
                      key={item.question}
                      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors open:bg-white/[0.045]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-white/88 marker:hidden transition-colors hover:text-white">
                        <span>{item.question}</span>

                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground/55 transition-transform duration-200 group-open:rotate-45">
                          +
                        </span>
                      </summary>

                      <div className="border-t border-white/8 px-5 py-4 text-sm leading-7 text-foreground/72">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CodeBlock>
      </div>
    </section>
  );
}
