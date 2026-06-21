<script>
  import CheckCircle from '~icons/heroicons/check-circle';
  import Sparkles from '~icons/heroicons/sparkles';
</script>

<section class="py-16 sm:py-20 bg-[hsl(var(--b1))]">
  <div class="container mx-auto px-6">
    <div class="mx-auto max-w-5xl">
      <div class="mb-8 text-center">
        <div class="badge badge-primary badge-lg">daisyUI card / badge / button</div>
        <h2 class="mt-4 text-3xl font-bold tracking-tight">daisyUI component smoke test</h2>
        <p class="mx-auto mt-3 max-w-2xl text-sm text-[hsl(var(--bc)/0.68)]">
          This section intentionally uses documented daisyUI component classes so template validation can prove the selected kit is rendering.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article class="card bg-base-100 shadow-xl border border-base-300">
          <div class="card-body gap-5">
            <div class="flex flex-wrap items-center gap-2">
              <span class="badge badge-secondary">Live preview</span>
              <span class="badge badge-outline">Theme tokenized</span>
              <span class="badge badge-accent">Ready</span>
            </div>
            <div>
              <h3 class="card-title text-2xl">
                <Sparkles class="h-6 w-6" />
                Generated workspace shell
              </h3>
              <p class="mt-2 text-sm leading-6 text-[hsl(var(--bc)/0.72)]">
                DaisyUI's card structure, badge variants, and button modifiers should look like the official component examples while inheriting the BYOB theme.
              </p>
            </div>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Primary action</button>
              <button class="btn btn-outline">Secondary</button>
            </div>
          </div>
        </article>

        <div class="card bg-base-200 border border-base-300">
          <div class="card-body">
            <h3 class="card-title text-lg">Validation checklist</h3>
            <ul class="space-y-3 text-sm">
              <li class="flex items-center gap-3">
                <CheckCircle class="h-5 w-5 text-success" />
                <span><code>card</code>, <code>card-body</code>, <code>card-title</code></span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="h-5 w-5 text-success" />
                <span><code>badge</code> color and outline variants</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="h-5 w-5 text-success" />
                <span><code>btn</code>, <code>btn-primary</code>, <code>btn-outline</code></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
