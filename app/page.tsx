import { AppNavbar } from "@/components/layout/Navbar";
import {
  PageAside,
  PageContainer,
  PageDescription,
  PageEyebrow,
  PageGrid,
  PageHeader,
  PageHeaderActions,
  PageHeaderContent,
  PageMain,
  PageSection,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
  PageShell,
  PageStack,
  PageTitle,
} from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <PageShell>
      <AppNavbar />

      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <div className="space-y-3">
              <PageEyebrow>Workspace</PageEyebrow>
              <PageTitle>Minimal developer-oriented dashboard</PageTitle>
              <PageDescription>
                A clean, breathable layout system with restrained surfaces,
                subtle hierarchy, and quiet interactions.
              </PageDescription>
            </div>

            <PageHeaderActions>
              <Button variant="outline">Secondary</Button>
              <Button>Primary action</Button>
            </PageHeaderActions>
          </PageHeaderContent>
        </PageHeader>

        <PageSection>
          <PageSectionHeader>
            <div className="space-y-1">
              <PageSectionTitle>Overview</PageSectionTitle>
              <PageSectionDescription>
                Structured content with a main area and a supporting aside.
              </PageSectionDescription>
            </div>
          </PageSectionHeader>

          <PageGrid>
            {/* <PageMain>
              <PageStack>
                <Card>
                  <CardHeader>
                    <CardTitle>Main content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Your primary page content goes here.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Another section</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Keep sections separated by spacing, not heavy decoration.
                  </CardContent>
                </Card>
              </PageStack>
            </PageMain> */}

            {/* <PageAside>
              <PageStack>
                <Card size="sm">
                  <CardHeader>
                    <CardTitle>Sidebar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Useful secondary information, filters, or shortcuts.
                  </CardContent>
                </Card>
              </PageStack>
            </PageAside> */}
          </PageGrid>
        </PageSection>
      </PageContainer>
    </PageShell>
  );
}
