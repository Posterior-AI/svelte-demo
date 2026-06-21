<script>
  import Badge from '$lib/components/ui/badge';
  import Button from '$lib/components/ui/button';
  import * as Card from '$lib/components/ui/card';
  import CheckCircle from '~icons/heroicons/check-circle';
  import Sparkles from '~icons/heroicons/sparkles';
</script>

<section class="py-16 sm:py-20 bg-background">
  <div class="container mx-auto px-6">
    <div class="mx-auto max-w-5xl">
      <div class="mb-8 text-center">
        <Badge>shadcn-svelte local primitives</Badge>
        <h2 class="mt-4 text-3xl font-bold tracking-tight">shadcn component smoke test</h2>
        <p class="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          This section uses local shadcn-style primitives under <code>$lib/components/ui</code>, matching the official copied-component model.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card.Root>
          <Card.Header>
            <div class="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Composable</Badge>
              <Badge variant="outline">Token based</Badge>
              <Badge>Ready</Badge>
            </div>
            <Card.Title class="mt-4 flex items-center gap-2 text-2xl">
              <Sparkles class="h-6 w-6 text-primary" />
              Generated workspace shell
            </Card.Title>
            <Card.Description>
              Card.Root, Card.Header, Card.Content, Card.Footer, Button, and Badge are local primitives styled through shadcn-compatible CSS variables.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div class="rounded-lg border bg-muted/45 p-4 text-sm text-muted-foreground">
              The quiet borders, compact radius, muted panel, and focused action row should resemble shadcn-svelte's documentation examples.
            </div>
          </Card.Content>
          <Card.Footer class="justify-end gap-3">
            <Button>Primary action</Button>
            <Button variant="outline">Secondary</Button>
          </Card.Footer>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Card.Title>Validation checklist</Card.Title>
            <Card.Description>Source-visible shadcn primitive usage.</Card.Description>
          </Card.Header>
          <Card.Content>
            <ul class="space-y-3 text-sm text-muted-foreground">
              <li class="flex items-center gap-3">
                <CheckCircle class="h-5 w-5 text-primary" />
                <span><code>Card.*</code> namespace components</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="h-5 w-5 text-primary" />
                <span><code>Button</code> default and outline variants</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="h-5 w-5 text-primary" />
                <span><code>Badge</code> default, secondary, and outline variants</span>
              </li>
            </ul>
          </Card.Content>
        </Card.Root>
      </div>
    </div>
  </div>
</section>
