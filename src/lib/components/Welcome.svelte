<script>
  import RocketLaunch from '~icons/heroicons/rocket-launch';
  import CodeBracket from '~icons/heroicons/code-bracket';
  import ChatBubbleLeftRight from '~icons/heroicons/chat-bubble-left-right';
  import Eye from '~icons/heroicons/eye';
  import CpuChip from '~icons/heroicons/cpu-chip';
  import Bolt from '~icons/heroicons/bolt';
  import CircleStack from '~icons/heroicons/circle-stack';
  import WrenchScrewdriver from '~icons/heroicons/wrench-screwdriver';
  import CheckCircle from '~icons/heroicons/check-circle';
  import LightBulb from '~icons/heroicons/light-bulb';
  import CursorArrowRays from '~icons/heroicons/cursor-arrow-rays';
  import PlayCircle from '~icons/heroicons/play-circle';
  import ArrowUturnLeft from '~icons/heroicons/arrow-uturn-left';
  import RectangleGroup from '~icons/heroicons/rectangle-group';
  import DocumentChartBar from '~icons/heroicons/document-chart-bar';
  import DeviceTablet from '~icons/heroicons/device-tablet-solid';
  import Window from '~icons/heroicons/window-solid';
  import Sparkles from '~icons/heroicons/sparkles';
  import Microphone from '~icons/heroicons/microphone';
  import Photo from '~icons/heroicons/photo';
  import ServerStack from '~icons/heroicons/server-stack';
  import DocumentMagnifyingGlass from '~icons/heroicons/document-magnifying-glass';
  import Database from '~icons/heroicons/circle-stack';
  import GlobeAlt from '~icons/heroicons/globe-alt';
  import Clock from '~icons/heroicons/clock';
  import CommandLine from '~icons/heroicons/command-line';
  import DocumentDuplicate from '~icons/heroicons/document-duplicate';
  import Users from '~icons/heroicons/users';
  import { BYOB_UI_KIT } from '$lib/byob-ui-kit';
  import ApiWelcome from './ApiWelcome.svelte';

  const uiKitClass = `byob-kit byob-kit-${BYOB_UI_KIT}`;
  const uiKitLabel = BYOB_UI_KIT;

  const workspaceFeatures = [
    {
      icon: CodeBracket,
      title: "Left Pane: Editor",
      description: "Full-featured code editor where AI-generated frontend UI and backend API routes appear ready for refinement.",
    },
    {
      icon: ChatBubbleLeftRight,
      title: "Center Pane: AI",
      description:
        "Command center. Plan, ask, implement, test, recover, and drive follow-up edits.",
    },
    {
      icon: Eye,
      title: "Right Pane: Preview",
        description: "Real-time updates. See your UI changes and test your API endpoints instantly without manual compilation.",
      },
    ];

  const featureCards = [
    {
      icon: ServerStack,
      title: 'Serverless Backend',
      description: 'AI writes secure endpoints, auth, and data pipelines that run on the edge.',
    },
    {
      icon: ServerStack,
      title: 'Supabase Integration',
      description:
        'Connect your Supabase project and keep tables, policies, and realtime data synced as the AI edits.',
      badge: 'Supabase Ready',
    },
    {
      icon: Database,
      title: 'BYOB DB',
      description:
        'Fully managed SQLite storage that scales across the cloud. Seamlessly explore data, schema, and ER diagrams while the system handles provisioning.',
    },
    {
      icon: CursorArrowRays,
      title: 'Visual Editing Mode',
      description: 'Click inside the live preview, and the AI updates the exact files for you.',
    },
    {
      icon: DocumentMagnifyingGlass,
      title: 'Preflight Planning',
      description:
        'Refine the prompt, choose guided or fast setup, review UX direction, and approve the plan before code generation.',
    },
    {
      icon: RectangleGroup,
      title: 'Model Swapping',
      description:
        'Start sessions on Gemini, Grok, GPT, or Claude. BYOB locks model per chat session for consistency.',
    },
    {
      icon: RocketLaunch,
      title: 'One-Click Deploy',
      description: "Publish frontend and backend to Cloudflare's edge in seconds with zero DevOps.",
    },
    {
      icon: DocumentChartBar,
      title: 'Deployment Analytics',
      description:
        'Inspect Worker traffic, errors, CPU timing, subrequests, and custom-domain status after publish.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Share projects with teammates and coordinate access so active sessions do not overwrite each other.',
    },
    {
      icon: GlobeAlt,
      title: 'Custom Domains',
      description:
        'Add root or subdomains with guided DNS records, verification hints, and automatic SSL activation.',
    },
    {
      icon: Photo,
      title: 'Image Understanding',
      description: 'Drop wireframes or screenshots; the AI generates pixel-perfect UI.',
    },
    {
      icon: Microphone,
      title: 'Voice Coding',
      description: 'Dictate logic or database requirements and the assistant implements them.',
    },
    {
      icon: ArrowUturnLeft,
      title: 'Time Travel',
      description: 'Save snapshots with notes and roll back when the AI drifts.',
    },
    {
      icon: PlayCircle,
      title: 'Project Controls',
      description: 'Restart, stop, or delete your project and monitor builds from the dashboard.',
    },
    {
      icon: Eye,
      title: 'Live Preview & Testing',
      description: 'Hot Module Replacement keeps the browser view and backend responses in perfect sync.',
    },
    {
      icon: PlayCircle,
      title: 'AI Testing Agent',
      description:
        'Run full-site or feature-based testing sessions with browser extension support and structured reports.',
    },
    {
      icon: CommandLine,
      title: 'Native Codex Access',
      description:
        'Use container Codex from chat, connect a remote Codex TUI through AIR, or attach local-billed Codex over SSH.',
    },
    {
      icon: DocumentDuplicate,
      title: 'Project Templates',
      description:
        'Start from blank, private, shared, or public templates, then save successful projects as reusable templates.',
    },
    {
      icon: DocumentMagnifyingGlass,
      title: 'SEO & LLM Output',
      description:
        'Generate metadata, sitemap and indexing assets, and LLM-friendly page access patterns.',
    },
    {
      icon: Clock,
      title: 'Context Tracking',
      description:
        'Monitor context fill and reset at the right time so long sessions stay stable and consistent.',
    },
    {
      icon: CircleStack,
      title: 'Flexible Pricing',
      description:
        'Use pay-as-you-go credits or upgrade to Pro, Max, or Enterprise plans with included monthly credits.',
    },
    {
      icon: DocumentChartBar,
      title: 'Change History',
      description: 'Track every frontend and server-side change with descriptive snapshots.',
    },
  ];

  const aiModels = [
    {
      name: 'Gemini 3.1',
      icon: CpuChip,
      badge: 'Advanced',
      desc: 'Exceptional context window and coding speed for large UI systems.',
      tagline: "Google's finest",
    },
    {
      name: 'Grok',
      icon: Bolt,
      badge: 'Creative',
      desc: 'Innovative brainstorming, design intent, and experimental flows.',
      tagline: "xAI's rebel",
    },
    {
      name: 'GPT-5.3 Codex',
      icon: CircleStack,
      badge: 'Recommended',
      desc: 'Deep reasoning for complex backend logic and integrations.',
      tagline: "OpenAI's best",
    },
    {
      name: 'Claude Sonnet 4.6',
      icon: Sparkles,
      badge: 'Strategic',
      desc: 'Thoughtful architecture guidance and beautiful UI generation.',
      tagline: "Anthropic's ally",
    },
  ];

  const pricingPlans = [
    {
      name: 'Pay as you go',
      price: '$0',
      detail: '$1 = 100 credits. Top up when you need more and keep unused credits.',
      icon: Bolt,
    },
    {
      name: 'Pro',
      price: '$25/mo',
      detail: 'Starts with 2,000 credits/month plus BYOB DB, testing, custom domains, and collaborators.',
      icon: Sparkles,
    },
    {
      name: 'Max',
      price: '$79/mo',
      detail: 'Starts with 8,000 credits/month, rollover, priority model access, and priority support.',
      icon: CursorArrowRays,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      detail: 'White-label, private cloud, SSO/SAML, governance, custom agents, and dedicated support.',
      icon: GlobeAlt,
    },
  ];

  const agentHighlights = [
    'UI and remote Codex are billed through BYOB credits',
    'SSH mode uses your local Codex or OpenAI billing',
    'Chat can inspect; Act can edit, install, test, and deploy',
  ];
</script>

<!-- HERO HEADER -->
<header class={`w-full bg-gradient-to-br from-[hsl(var(--a))] to-[hsl(var(--s))] text-[hsl(var(--pc))] ${uiKitClass}`}>
  <div class="container mx-auto flex flex-col items-center justify-center text-center px-6 py-20">
    <div class="mb-4 inline-block rounded-full bg-[hsl(var(--pc))/0.2] px-4 py-1 text-sm font-semibold">
      Selected UI kit: {uiKitLabel}
    </div>
    <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight flex items-center justify-center gap-4 flex-wrap">
      <RocketLaunch class="h-12 w-12 text-[hsl(var(--pc))]" />
      Ship a full web app from one prompt
    </h1>
    <p class="mt-6 max-w-2xl text-xl text-[hsl(var(--pc)/0.9)]">
      Describe it once. BYOB plans the UX, writes production-ready SvelteKit code, connects data and deploys, then keeps everything editable while you iterate in the three-pane workspace.
    </p>
    <div class="mt-8 flex flex-wrap justify-center gap-4">
      <a href="https://byob.studio" target="_blank" class="byob-btn byob-btn-primary byob-btn-lg border-none">Start Building</a>
      <a href="https://byob.studio" target="_blank" class="byob-btn byob-btn-ghost byob-btn-lg text-[hsl(var(--pc))] hover:bg-[hsl(var(--pc))/0.2]">View Showcase</a>
    </div>
  </div>
</header>

<main class={`bg-[hsl(var(--b1))] text-[hsl(var(--bc))] ${uiKitClass}`}>


  <!-- WORKSPACE FEATURES -->
  <section class="py-16 sm:py-24 bg-[hsl(var(--b2))]">
    <div class="container mx-auto px-6 space-y-12">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
          <CodeBracket class="h-8 w-8 text-[hsl(var(--p))]" />
          Workspace Layout
        </h2>
        <p class="mt-3 text-lg text-[hsl(var(--bc)/0.7)] max-w-2xl mx-auto">
          Code, intent, and rendered output stay visible together so the project remains inspectable, editable, and shippable.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        {#each workspaceFeatures as feature}
          <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div class="flex items-center gap-4 mb-4">
               <div class="p-3 bg-[hsl(var(--p))/0.1] rounded-xl text-[hsl(var(--p))]">
                  <svelte:component this={feature.icon} class="w-6 h-6" />
               </div>
              <h3 class="text-xl font-bold">{feature.title}</h3>
            </div>
            <p class="text-[hsl(var(--bc)/0.8)] leading-relaxed">{feature.description}</p>
          </div>
        {/each}
      </div>
      <div class="text-center text-[hsl(var(--bc)/0.8)] flex items-center justify-center gap-2 bg-[hsl(var(--b1))] rounded-lg p-4 border border-[hsl(var(--b3))] max-w-2xl mx-auto shadow-sm">
          <LightBulb class="w-5 h-5 text-[hsl(var(--in))]" />
          <span class="font-semibold">Tip:</span> Start with a prompt, review the preflight plan, then let Act Mode implement.
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="py-16 sm:py-24">
    <div class="container mx-auto px-6">
        <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold">Everything you need to ship</h2>
            <p class="mt-3 text-lg text-[hsl(var(--bc)/0.7)] max-w-2xl mx-auto">
                BYOB combines planning, implementation, preview, testing, backend work, deployment, analytics, and Codex agent access in one workspace.
            </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {#each featureCards as feature}
              <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-6 hover:shadow-md transition-shadow">
                <div class="mb-4 flex items-start justify-between gap-3">
                  <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-[hsl(var(--p))/0.1] text-[hsl(var(--p))]">
                    <svelte:component this={feature.icon} class="w-6 h-6" />
                  </div>
                  {#if feature.badge}
                    <span class="byob-badge byob-badge-sm byob-badge-info">{feature.badge}</span>
                  {/if}
                </div>
                <h3 class="font-bold text-lg">{feature.title}</h3>
                <p class="text-[hsl(var(--bc)/0.7)] mt-2 text-sm leading-relaxed">{feature.description}</p>
              </div>
            {/each}
        </div>
    </div>
  </section>

  <!-- AI MODELS -->
  <section class="py-16 sm:py-24 bg-[hsl(var(--b2))]">
    <div class="container mx-auto px-6">
       <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold">Multi-Model Intelligence</h2>
        <p class="mt-3 text-lg text-[hsl(var(--bc)/0.7)] max-w-2xl mx-auto">
          Choose the optimal brain for your specific task.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {#each aiModels as model}
           <div class="relative rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-8 shadow-sm transition hover:border-[hsl(var(--p))] hover:shadow-xl">
             {#if model.badge}
                <span class="byob-badge byob-badge-sm byob-badge-info uppercase tracking-wider absolute -top-3 right-6 text-xs">{model.badge}</span>
             {/if}
             <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--in))/0.15] text-[hsl(var(--in))]">
                    <svelte:component this={model.icon} class="h-7 w-7" />
                </div>
                <h3 class="text-2xl font-bold">{model.name}</h3>
             </div>
             <p class="mt-6 text-[hsl(var(--bc)/0.8)] text-sm leading-relaxed">{model.desc}</p>
             <p class="mt-2 text-[hsl(var(--bc)/0.6)] text-xs italic">{model.tagline}</p>
           </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- MODES -->
  <section class="py-16 sm:py-24">
      <div class="container mx-auto px-6">
          <div class="text-center">
              <h2 class="text-3xl md:text-4xl font-bold">Dual Operating Modes</h2>
              <p class="mt-3 text-lg text-[hsl(var(--bc)/0.7)] max-w-2xl mx-auto">
                  The assistant adapts to your workflow with two distinct modes.
              </p>
          </div>
          <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-8">
                  <div class="flex items-center gap-4">
                      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--in))/0.15] text-[hsl(var(--in))]">
                          <ChatBubbleLeftRight class="h-7 w-7" />
                      </div>
                      <div>
                          <h3 class="text-2xl font-bold">Chat Mode</h3>
                          <p class="text-[hsl(var(--in))] font-semibold">Strategic Planning & Analysis</p>
                      </div>
                  </div>
                  <p class="mt-6 font-semibold">Key Use Cases:</p>
                  <ul class="mt-2 list-disc list-inside space-y-1 text-[hsl(var(--bc)/0.7)]">
                      <li>Architectural planning and validation</li>
                      <li>In-depth code/concept explanation</li>
                      <li>Brainstorming features and flows</li>
                  </ul>
              </div>

              <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-8">
                  <div class="flex items-center gap-4">
                      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--in))/0.15] text-[hsl(var(--in))]">
                          <WrenchScrewdriver class="h-7 w-7" />
                      </div>
                      <div>
                          <h3 class="text-2xl font-bold">Act Mode</h3>
                          <p class="text-[hsl(var(--in))] font-semibold">Code Generation & Execution</p>
                      </div>
                  </div>
                  <p class="mt-6 font-semibold">Key Use Cases:</p>
                  <ul class="mt-2 list-disc list-inside space-y-1 text-[hsl(var(--bc)/0.7)]">
                      <li>Creating new files and components</li>
                      <li>Modifying existing codebases</li>
                      <li>Installing project dependencies</li>
                  </ul>
              </div>
          </div>
      </div>
  </section>

  <!-- WORKFLOW -->
  <section class="py-16 sm:py-24 bg-[hsl(var(--b2))]">
    <div class="container mx-auto px-6">
        <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold">Professional Workflow</h2>
            <p class="mt-3 text-lg text-[hsl(var(--bc)/0.7)] max-w-2xl mx-auto">
                Start conversationally, approve the shape, implement with Act Mode, then test and deploy.
            </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {#each [1,2,3,4,5] as step (step)}
              <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-6 text-center">
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--p))] text-[hsl(var(--pc))] font-bold text-xl mb-4">{step}</div>
                <h3 class="font-bold text-lg">
                  {step === 1 ? 'Describe' :
                   step === 2 ? 'Preflight' :
                   step === 3 ? 'Implement' :
                   step === 4 ? 'Test & Refine' : 'Deploy'}
                </h3>
                <p class="text-sm text-[hsl(var(--bc)/0.7)] mt-2">
                  {step === 1
                    ? 'State the product outcome, audience, constraints, and required integrations.'
                    : step === 2
                    ? 'Review UX direction, data choices, and the complete implementation plan.'
                    : step === 3
                    ? 'Generate files, install dependencies, and wire services using Act Mode.'
                    : step === 4
                    ? 'Run feature-based or full-site tests, save checkpoints, and refine safely.'
                    : 'Publish to a BYOB URL, connect domains, and inspect production analytics.'}
                </p>
              </div>
            {/each}
        </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="py-16 sm:py-24">
    <div class="container mx-auto px-6">
        <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold">Powerful Features</h2>
            <p class="mt-3 text-lg text-[hsl(var(--bc)/0.7)] max-w-2xl mx-auto">
                Everything you need for modern web development, integrated seamlessly.
            </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {#each [
              {icon: CursorArrowRays, title: 'Visual Editing Mode', desc: 'Click any element in Live Preview to modify it instantly. Changes are automatically written back to source code.'},
              {icon: ArrowUturnLeft, title: 'Version Control', desc: 'Built-in snapshots with instant rollback capability. Save versions with descriptive messages.'},
              {icon: Users, title: 'Team Collaboration', desc: 'Share projects with teammates and coordinate access across active work sessions.'},
              {icon: DocumentDuplicate, title: 'Templates', desc: 'Start from blank, private, shared, or public templates and save reusable project foundations.'},
              {icon: GlobeAlt, title: 'Custom Domain Wizard', desc: 'Connect root or subdomains with guided DNS records, verification, and automatic SSL activation.'},
              {icon: DocumentChartBar, title: 'Deployment Analytics', desc: 'Inspect live Worker traffic, errors, CPU timing, subrequests, and deployment status.'},
              {icon: PlayCircle, title: 'Testing Agent', desc: 'Run full-site or feature-based tests with extension support and detailed reports.'},
              {icon: CommandLine, title: 'Native Codex Access', desc: 'Use BYOB-billed container Codex from chat or remote TUI, or use local-billed SSH for native shell access.'},
              {icon: Clock, title: 'Context + Model Guardrails', desc: 'Track context fill and keep one model per session to reduce long-thread drift.'},
              {icon: CircleStack, title: 'Pay-As-You-Go + Subscriptions', desc: 'Choose flexible top-ups or Pro/Max monthly plans with included credits.'},
              {icon: Eye, title: 'Live Preview', desc: 'Real-time, interactive preview with instant updates. No manual compilation needed.'},
              {icon: RectangleGroup, title: 'Customizable Layout', desc: 'Swap panes, drag to resize, or minimize sections. Adapt the workspace to your preferences.'},
              {icon: DocumentChartBar, title: 'Change History', desc: 'Comprehensive log of all changes with version snapshots. Track your project evolution effortlessly.'},
            ] as feature}
              <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-6">
                <div class="h-8 w-8 text-[hsl(var(--p))] mb-3">
                  <svelte:component this={feature.icon} class="w-full h-full" />
                </div>
                <h3 class="font-bold text-lg">{feature.title}</h3>
                <p class="text-[hsl(var(--bc)/0.7)] mt-1">{feature.desc}</p>
              </div>
            {/each}
        </div>
    </div>
  </section>

  <section class="py-16 sm:py-24">
      <div class="container mx-auto px-6">
          <div class="rounded-3xl border border-[hsl(var(--b3))] bg-gradient-to-br from-[hsl(var(--p)/0.12)] via-[hsl(var(--b1))] to-[hsl(var(--b2))] p-10 shadow-2xl">
              <div class="flex flex-wrap items-center gap-6">
                  <div class="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--p)/0.2)] text-[hsl(var(--p))]">
                      <ServerStack class="w-7 h-7" />
                  </div>
                  <div>
                      <h2 class="text-3xl font-bold">Supabase Integration</h2>
                      <span class="byob-badge byob-badge-primary text-xs uppercase tracking-wide">Supabase Ready</span>
                      <p class="text-[hsl(var(--bc)/0.7)]">
                          Bring your Supabase project into the workspace. Define tables, policies, and realtime
                          APIs using concise prompts, run migrations, generate TypeScript types, and keep the schema synced with generated code.
                      </p>
                  </div>
              </div>
              <div class="mt-8 grid gap-6 md:grid-cols-3">
                  <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-4 shadow-sm">
                      <p class="text-sm font-semibold text-[hsl(var(--p))]">Define Tables</p>
                      <p class="text-xs text-[hsl(var(--bc)/0.7)]">
                          Prompt the AI. BYOB scaffolds Supabase tables, columns, and policies instantly.
                      </p>
                  </div>
                  <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-4 shadow-sm">
                      <p class="text-sm font-semibold text-[hsl(var(--p))]">Handle Auth</p>
                      <p class="text-xs text-[hsl(var(--bc)/0.7)]">
                          Generate secure sign-ups, row-level security, and token flows without writing boilerplate.
                      </p>
                  </div>
                  <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-4 shadow-sm">
                      <p class="text-sm font-semibold text-[hsl(var(--p))]">Test & Deploy</p>
                      <p class="text-xs text-[hsl(var(--bc)/0.7)]">
                          Preview Supabase endpoints while editing UI components, then ship everything with one click.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section class="py-16 sm:py-24 bg-[hsl(var(--b2))]">
      <div class="container mx-auto px-6">
          <div class="rounded-3xl border border-[hsl(var(--b3))] bg-gradient-to-br from-[hsl(var(--p)/0.12)] via-[hsl(var(--b1))] to-[hsl(var(--b2))] p-10 shadow-2xl">
              <div class="flex flex-wrap items-center gap-6">
                  <div class="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--p)/0.2)] text-[hsl(var(--p))]">
                      <Database class="w-7 h-7" />
                  </div>
                  <div>
                      <h2 class="text-3xl font-bold">BYOB DB</h2>
                      <p class="text-[hsl(var(--bc)/0.7)]">
                          BYOB DB is a managed SQLite data service for apps that need durable storage without separate database operations or manual provisioning.
                      </p>
                  </div>
              </div>
              <div class="mt-8 grid gap-6 md:grid-cols-3">
                  <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-4 shadow-sm">
                      <p class="text-sm font-semibold text-[hsl(var(--p))]">Schema Explorer</p>
                      <p class="text-xs text-[hsl(var(--bc)/0.7)]">
                          View tables, columns, and ER diagrams instantly via our browser-based database viewer.
                      </p>
                  </div>
                  <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-4 shadow-sm">
                      <p class="text-sm font-semibold text-[hsl(var(--p))]">SQL Scratchpad</p>
                      <p class="text-xs text-[hsl(var(--bc)/0.7)]">
                          Run read-only queries against BYOB DB for debugging, analytics, or demos without leaving the workspace.
                      </p>
                  </div>
                  <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-4 shadow-sm">
                      <p class="text-sm font-semibold text-[hsl(var(--p))]">Managed & Super Scalable</p>
                      <p class="text-xs text-[hsl(var(--bc)/0.7)]">
                          The platform keeps SQLite fast and reliable across distributed edge nodes—no ops required.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section class="py-16 sm:py-24">
      <div class="container mx-auto px-6">
          <div class="rounded-3xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-10 shadow-xl">
              <div class="flex flex-wrap items-center gap-6">
                  <div class="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--p)/0.2)] text-[hsl(var(--p))]">
                      <CommandLine class="w-7 h-7" />
                  </div>
                  <div>
                      <h2 class="text-3xl font-bold">Native Codex for BYOB projects</h2>
                      <p class="text-[hsl(var(--bc)/0.7)]">
                          Use Codex from the BYOB chat UI, connect a remote Codex TUI through AIR, or attach local Codex over SSH when you want native shell access to the project container.
                      </p>
                  </div>
              </div>
              <div class="mt-8 rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b2))] p-5 font-mono text-sm text-[hsl(var(--bc)/0.8)]">
                  npx -y byob-agent-mcp codex install
              </div>
              <div class="mt-6 grid gap-4 md:grid-cols-3">
                  {#each agentHighlights as item}
                      <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-4 shadow-sm">
                          <CheckCircle class="mb-2 h-5 w-5 text-[hsl(var(--p))]" />
                          <p class="text-sm font-semibold">{item}</p>
                      </div>
                  {/each}
              </div>
          </div>
      </div>
  </section>

  <section class="py-16 sm:py-24 bg-[hsl(var(--b2))]">
      <div class="container mx-auto px-6">
          <div class="text-center">
              <h2 class="text-3xl md:text-4xl font-bold">Credits and Plans</h2>
              <p class="mt-3 text-lg text-[hsl(var(--bc)/0.7)] max-w-2xl mx-auto">
                  Start with credits, then upgrade when BYOB becomes part of your regular build workflow.
              </p>
          </div>
          <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {#each pricingPlans as plan}
                  <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-6 shadow-sm">
                      <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--p)/0.12)] text-[hsl(var(--p))]">
                          <svelte:component this={plan.icon} class="h-6 w-6" />
                      </div>
                      <h3 class="text-xl font-bold">{plan.name}</h3>
                      <p class="mt-2 text-2xl font-extrabold text-[hsl(var(--p))]">{plan.price}</p>
                      <p class="mt-3 text-sm leading-relaxed text-[hsl(var(--bc)/0.7)]">{plan.detail}</p>
                  </div>
              {/each}
          </div>
      </div>
  </section>

  <section class="py-12 px-6">
      <div class="container mx-auto">
          <ApiWelcome />
      </div>
  </section>

  <!-- CTA -->
  <section class="py-16 sm:py-24">
      <div class="container mx-auto px-6">
          <div class="rounded-2xl bg-gradient-to-r from-[hsl(var(--p))] to-[hsl(var(--in))] p-12 text-center text-[hsl(var(--pc))]">
              <h2 class="text-3xl md:text-4xl font-bold">Ready to Supercharge Your Development?</h2>
              <p class="mt-4 max-w-2xl mx-auto text-lg text-[hsl(var(--pc)/0.9)]">
                Ship with AI coding, custom domains, integrated testing, and flexible pricing in one workspace.
              </p>
              <div class="mt-8 flex justify-center gap-4">
                  <button class="byob-btn byob-btn-primary byob-btn-lg">Start Building Now →</button>
                  <button class="byob-btn byob-btn-ghost byob-btn-lg text-[hsl(var(--pc))] hover:bg-[hsl(var(--pc))/0.2]">Explore Features</button>
              </div>
          </div>
      </div>
  </section>

  <div class="bg-gradient-to-r from-indigo-800 to-purple-800 text-white p-8 text-center mt-20 rounded-t-3xl shadow-inner border-t border-indigo-900 animate-fade-in-up">
    <div class="flex flex-col items-center gap-2">
      <div class="byob-divider w-48 mx-auto border-white/20"></div>
      <p class="font-semibold text-lg flex items-center gap-2 justify-center">
        <RocketLaunch class="w-5 h-5 text-[#667eea]" />
        © 2026 <span class="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-bold">Build Your Own Buzz</span>. All rights reserved.
      </p>
      <div class="flex gap-6 justify-center mt-4">
        <a href="https://byob.studio/contact" target="_blank" class="byob-link text-white/70 transition hover:scale-110 flex items-center gap-1 hover:text-white">
          <ChatBubbleLeftRight class="w-4 h-4" /> Contact
        </a>
        <a href="https://byob.studio/faq" target="_blank" class="byob-link text-white/70 transition hover:scale-110 flex items-center gap-1 hover:text-white">
          <DeviceTablet class="w-4 h-4" /> FAQ
        </a>
        <a href="https://byob.studio" target="_blank" class="byob-link text-white/70 transition hover:scale-110 flex items-center gap-1 hover:text-white">
          <Window class="w-4 h-4" /> BYOB Studio
        </a>
      </div>
    </div>
  </div>

</main>
