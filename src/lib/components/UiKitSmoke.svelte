<script>
  import CheckCircle from '~icons/heroicons/check-circle';
  import Sparkles from '~icons/heroicons/sparkles';
</script>

<section class="py-16 sm:py-20 bg-background">
  <div class="container mx-auto px-6">
    <div class="mx-auto max-w-5xl">
      <div class="mb-8 text-center">
        <span class="badge preset-filled-primary-500">Skeleton card / badge / button</span>
        <h2 class="mt-4 text-3xl font-bold tracking-tight">Skeleton component smoke test</h2>
        <p class="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          This section uses Skeleton's Tailwind component primitives and presets from <code>@skeletonlabs/skeleton</code>.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article class="card preset-tonal-surface p-6 shadow-xl">
          <div class="space-y-5">
            <div class="flex flex-wrap items-center gap-2">
              <span class="badge preset-filled-primary-500">Primitive</span>
              <span class="badge preset-tonal-success">Theme ready</span>
              <span class="badge preset-outlined-primary-500">Preview safe</span>
            </div>
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold">
                <Sparkles class="h-6 w-6 text-primary" />
                Generated workspace shell
              </h3>
              <p class="mt-2 text-sm leading-6 text-muted-foreground">
                Skeleton's card, badge, preset, and button utilities should show the rounded, token-driven surface language used in the official examples.
              </p>
            </div>
            <div class="flex flex-wrap justify-end gap-3">
              <button class="btn preset-filled-primary-500">Primary action</button>
              <button class="btn preset-outlined-primary-500">Secondary</button>
            </div>
          </div>
        </article>

        <aside class="card preset-outlined-surface-200-800 p-6">
          <h3 class="text-lg font-semibold">Validation checklist</h3>
          <ul class="mt-4 space-y-3 text-sm text-muted-foreground">
            <li class="flex items-center gap-3">
              <CheckCircle class="h-5 w-5 text-primary" />
              <span><code>card</code> plus Skeleton preset surface</span>
            </li>
            <li class="flex items-center gap-3">
              <CheckCircle class="h-5 w-5 text-primary" />
              <span><code>badge</code> with filled, tonal, and outlined presets</span>
            </li>
            <li class="flex items-center gap-3">
              <CheckCircle class="h-5 w-5 text-primary" />
              <span><code>btn</code> with filled and outlined presets</span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </div>
</section>
