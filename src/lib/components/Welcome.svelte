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
  import ApiWelcome from './ApiWelcome.svelte';

  const workspaceFeatures = [
    {
      icon: CodeBracket,
      title: "Left Pane: Editor",
      description: "Full-featured code editor where AI-generated frontend UI and backend API routes appear ready for refinement.",
    },
    {
      icon: ChatBubbleLeftRight,
      title: "Center Pane: AI",
      description: "Command center. Ask questions, build databases, generate server code, and drive development.",
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
      title: 'Live Web Search',
      description: 'Agents fetch current API docs, facts, and references in real time while coding.',
    },
    {
      icon: RectangleGroup,
      title: 'Model Swapping',
      description: 'Flip between Gemini 3.1, Grok, GPT-5.4, and Claude 3.7 to match the task.',
    },
    {
      icon: RocketLaunch,
      title: 'One-Click Deploy',
      description: 'Publish frontend and backend to Cloudflare’s edge in seconds with zero DevOps.',
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
      name: 'GPT-5.4',
      icon: CircleStack,
      badge: 'Recommended',
      desc: 'Deep reasoning for complex backend logic and integrations.',
      tagline: "OpenAI's best",
    },
    {
      name: 'Claude 3.7',
      icon: Sparkles,
      badge: 'Strategic',
      desc: 'Thoughtful architecture guidance and beautiful UI generation.',
      tagline: "Anthropic's ally",
    },
  ];
</script>

<!-- HERO HEADER -->
<header class="w-full bg-gradient-to-br from-[hsl(var(--a))] to-[hsl(var(--s))] text-[hsl(var(--pc))]">
  <div class="container mx-auto flex flex-col items-center justify-center text-center px-6 py-20">
    <div class="mb-4 inline-block rounded-full bg-[hsl(var(--pc))/0.2] px-4 py-1 text-sm font-semibold">
      ✨ Build Full-Stack Apps with AI - No Code Required
    </div>
    <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight flex items-center justify-center gap-4 flex-wrap">
      <RocketLaunch class="h-12 w-12 text-[hsl(var(--pc))]" />
      Ship a full web app from one prompt
    </h1>
    <p class="mt-6 max-w-2xl text-xl text-[hsl(var(--pc)/0.9)]">
      Describe it once—BYOB plans the UX, writes production-ready SvelteKit code, and keeps everything editable while you iterate in the three-pane workspace.
    </p>
    <div class="mt-8 flex flex-wrap justify-center gap-4">
      <a href="https://byob.studio" target="_blank" class="btn btn-neutral btn-lg border-none">Start Building</a>
      <a href="https://byob.studio" target="_blank" class="btn btn-ghost btn-lg text-[hsl(var(--pc))] hover:bg-[hsl(var(--pc))/0.2]">View Showcase</a>
    </div>
  </div>
</header>

<main class="bg-[hsl(var(--b1))] text-[hsl(var(--bc))]">


  <!-- WORKSPACE FEATURES -->
  <section class="py-16 sm:py-24 bg-[hsl(var(--b2))]">
    <div class="container mx-auto px-6 space-y-12">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
          <CodeBracket class="h-8 w-8 text-[hsl(var(--p))]" />
          Workspace Layout
        </h2>
        <p class="mt-3 text-lg text-[hsl(var(--bc)/0.7)] max-w-2xl mx-auto">
          Expertly crafted panes for maximum productivity. Everything you need for frontend and backend dev in one fluid interface.
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
          <span class="font-semibold">Tip:</span> Swap panes, drag to resize, or minimize to focus—your workflow, your way!
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="py-16 sm:py-24">
    <div class="container mx-auto px-6">
        <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold">Everything you need to ship</h2>
            <p class="mt-3 text-lg text-[hsl(var(--bc)/0.7)] max-w-2xl mx-auto">
                We've packed every tool a modern full-stack developer needs into one workspace.
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
                    <span class="badge badge-sm badge-info">{feature.badge}</span>
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

      <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {#each aiModels as model}
           <div class="relative rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-8 shadow-sm transition hover:border-[hsl(var(--p))] hover:shadow-xl">
             {#if model.badge}
                <span class="badge badge-sm badge-info uppercase tracking-wider absolute -top-3 right-6 text-xs">{model.badge}</span>
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
                          <h3 class="text-2xl font-bold">Tool Mode</h3>
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
                Maximize efficiency with this proven development cycle.
            </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {#each [1,2,3,4] as step (step)}
              <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-6 text-center">
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--p))] text-[hsl(var(--pc))] font-bold text-xl mb-4">{step}</div>
                <h3 class="font-bold text-lg">
                  {step === 1 ? 'Strategize' :
                   step === 2 ? 'Execute' :
                   step === 3 ? 'Review & Refine' : 'Save Progress'}
                </h3>
                <p class="text-sm text-[hsl(var(--bc)/0.7)] mt-2">
                  {step === 1
                    ? 'Outline objectives and define architecture with the AI assistant in Chat Mode.'
                    : step === 2
                    ? 'Generate files and install dependencies using Tool Mode & Quick Actions.'
                    : step === 3
                    ? 'Monitor output, refine in the Code Editor, and test in the Live Preview.'
                    : 'Create version snapshots at stable milestones to ensure you always have a checkpoint.'}
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
              {icon: PlayCircle, title: 'Project Controls', desc: 'Restart, stop, or delete your project with essential controls in the top-right corner.'},
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
                      <span class="badge badge-primary text-xs uppercase tracking-wide">Supabase Ready</span>
                      <p class="text-[hsl(var(--bc)/0.7)]">
                          Bring your Supabase project into the workspace. Define tables, policies, and realtime
                          APIs using concise prompts and keep the schema synced with generated code.
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
                          BYOB DB is a fully managed SQLite data service that scales across the cloud. It delivers a seamless, super-scalable database store for your apps  without needing manual provisioning.
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
                Experience the future of web development with AI-powered assistance, real-time previews, and seamless version control—all in one workspace.
              </p>
              <div class="mt-8 flex justify-center gap-4">
                  <button class="btn btn-neutral btn-lg">Start Building Now →</button>
                  <button class="btn btn-ghost btn-lg text-[hsl(var(--pc))] hover:bg-[hsl(var(--pc))/0.2]">Explore Features</button>
              </div>
          </div>
      </div>
  </section>

  <div class="bg-gradient-to-r from-indigo-800 to-purple-800 text-white p-8 text-center mt-20 rounded-t-3xl shadow-inner border-t border-indigo-900 animate-fade-in-up">
    <div class="flex flex-col items-center gap-2">
      <div class="divider w-48 mx-auto border-white/20"></div>
      <p class="font-semibold text-lg flex items-center gap-2 justify-center">
        <RocketLaunch class="w-5 h-5 text-[#667eea]" />
        © 2026 <span class="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-bold">Build Your Own Buzz</span>. All rights reserved.
      </p>
      <div class="flex gap-6 justify-center mt-4">
        <a href="https://byob.studio/contact" target="_blank" class="link link-hover text-white/70 transition hover:scale-110 flex items-center gap-1 hover:text-white">
          <ChatBubbleLeftRight class="w-4 h-4" /> Contact
        </a>
        <a href="https://byob.studio/faq" target="_blank" class="link link-hover text-white/70 transition hover:scale-110 flex items-center gap-1 hover:text-white">
          <DeviceTablet class="w-4 h-4" /> FAQ
        </a>
        <a href="https://byob.studio" target="_blank" class="link link-hover text-white/70 transition hover:scale-110 flex items-center gap-1 hover:text-white">
          <Window class="w-4 h-4" /> BYOB Studio
        </a>
      </div>
    </div>
  </div>

</main>
