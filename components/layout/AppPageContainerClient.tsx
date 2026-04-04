"use client";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  PageContainer,
  PageDescription,
  PageEyebrow,
  PageGrid,
  PageHeader,
  PageHeaderActions,
  PageHeaderContent,
  PageMain,
  PageSection,
  PageSectionAction,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
  PageAside,
  PageStack,
  PageTitle,
  PageDivider,
} from "./PageContainer";

export default function AppPageContainerClient() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <div className="space-y-3">
            <PageEyebrow>Workspace</PageEyebrow>
            <PageTitle>Minimal premium dashboard</PageTitle>
            <PageDescription>
              This demo shows how the page layout primitives work together to
              create a clean, breathable, developer-oriented interface.
            </PageDescription>
          </div>

          <PageHeaderActions>
            <Button variant="outline">Secondary</Button>
            <Button>Primary Action</Button>
          </PageHeaderActions>
        </PageHeaderContent>
      </PageHeader>

      <PageSection>
        <PageSectionHeader>
          <div className="space-y-1">
            <PageSectionTitle>Overview</PageSectionTitle>
            <PageSectionDescription>
              A simple two-column layout with primary content on the left and
              supporting content on the right.
            </PageSectionDescription>
          </div>

          <PageSectionAction>
            <Button variant="ghost">View all</Button>
          </PageSectionAction>
        </PageSectionHeader>

        <PageGrid>
          <PageMain>
            <PageStack>
              <Card>
                <CardHeader>
                  <CardTitle>Main content</CardTitle>
                  <CardDescription>
                    This is the main content area of the page.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/70">
                      Use this section for dashboards, articles, notes, or
                      product summaries. It is designed to feel calm, premium,
                      and highly readable.
                    </p>

                    <PageDivider />

                    <p className="text-sm text-foreground/60">
                      The spacing, width, and visual hierarchy are controlled by
                      the page layout components rather than being repeated
                      manually in every page.
                    </p>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button variant="outline">Details</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Another section</CardTitle>
                  <CardDescription>
                    Example of a second stacked block inside PageMain.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-foreground/70">
                      The PageStack component keeps consistent vertical rhythm
                      between content blocks.
                    </p>
                    <p className="text-sm text-foreground/60">
                      This makes the page easier to maintain and keeps the UI
                      system visually consistent.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </PageStack>
          </PageMain>

          <PageAside>
            <PageStack>
              <Card size="sm">
                <CardHeader>
                  <CardTitle>Quick links</CardTitle>
                  <CardDescription>
                    Supporting information or shortcuts.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>Latest posts</li>
                    <li>Popular notes</li>
                    <li>Recent experiments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card size="sm">
                <CardHeader>
                  <CardTitle>Status</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-foreground/70">
                    All systems aligned with the premium dark design system.
                  </p>
                </CardContent>
              </Card>
            </PageStack>
          </PageAside>
        </PageGrid>
      </PageSection>
    </PageContainer>
  );
}
