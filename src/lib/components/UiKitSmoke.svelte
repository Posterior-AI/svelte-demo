<script>
  import { Alert, Badge, Button, Card } from 'flowbite-svelte';
  import CheckCircle from '~icons/heroicons/check-circle';
  import Sparkles from '~icons/heroicons/sparkles';
</script>

<section class="py-16 sm:py-20 bg-background">
  <div class="container mx-auto px-6">
    <div class="mx-auto max-w-5xl">
      <div class="mb-8 text-center">
        <Badge color="blue" large>Flowbite Svelte components</Badge>
        <h2 class="mt-4 text-3xl font-bold tracking-tight">Flowbite component smoke test</h2>
        <p class="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          This section imports documented Flowbite Svelte components directly from <code>flowbite-svelte</code>.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card size="lg" class="border border-gray-200 bg-white shadow-md">
          <div class="space-y-5">
            <Alert color="blue" class="text-sm">
              Flowbite Alert, Badge, Card, and Button are rendered by the library in this template.
            </Alert>
            <div class="flex flex-wrap items-center gap-2">
              <Badge color="purple">Svelte component</Badge>
              <Badge color="green">Theme ready</Badge>
              <Badge color="yellow">Preview safe</Badge>
            </div>
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <Sparkles class="h-6 w-6 text-blue-700" />
                Generated workspace shell
              </h3>
              <p class="mt-2 text-sm leading-6 text-gray-600">
                The rounded border, shadow, colored alert, pill badges, and buttons should visually match Flowbite Svelte's official component style.
              </p>
            </div>
            <div class="flex flex-wrap justify-end gap-3">
              <Button color="blue">Primary action</Button>
              <Button color="alternative">Secondary</Button>
            </div>
          </div>
        </Card>

        <Card class="border border-gray-200 bg-white">
          <h3 class="mb-4 text-lg font-semibold text-gray-900">Validation checklist</h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li class="flex items-center gap-3">
              <CheckCircle class="h-5 w-5 text-green-600" />
              <span><code>Card</code> imported from Flowbite Svelte</span>
            </li>
            <li class="flex items-center gap-3">
              <CheckCircle class="h-5 w-5 text-green-600" />
              <span><code>Alert</code> and <code>Badge</code> color props</span>
            </li>
            <li class="flex items-center gap-3">
              <CheckCircle class="h-5 w-5 text-green-600" />
              <span><code>Button</code> primary and alternative variants</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </div>
</section>
