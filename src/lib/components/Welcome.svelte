<script>
  // Import Icon Components directly
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
  const workspaceFeatures = [
    {
      icon: CodeBracket,
      title: "Left Pane",
      subtitle: "Code Editor",
      description: "Write and edit your files with a full-featured code editor. All AI-generated code appears here, ready for manual refinement.",
      points: ["Syntax highlighting", "Auto-completion", "Direct file access"],
    },
    {
      icon: ChatBubbleLeftRight,
      title: "Center Pane",
      subtitle: "AI Assistant",
      description: "Ask questions, generate code, and get live help. Command center for driving development with AI assistance.",
      points: ["Multi-model selection", "Quick Actions", "Collapsible & Swappable"],
    },
    {
      icon: Eye,
      title: "Right Pane",
      subtitle: "Live Preview",
      description: "See updates instantly in real-time. Changes render automatically without manual compilation.",
      points: ["Real-time updates", "Interactive preview", "Visual editing mode"],
    },
  ];

  const aiModels = [
    {
      name: "Gemini",
      icon: CpuChip,
      bestFor: "General Development",
      strengths: "Balanced performance & accuracy",
      recommended: true,
    },
    {
      name: "Grok",
      icon: Bolt,
      bestFor: "Creative Solutions",
      strengths: "Innovative problem-solving",
      creative: true,
    },
    {
      name: "GPT",
      icon: CircleStack,
      bestFor: "Complex Reasoning",
      strengths: "Deep analysis & explanation",
      advanced: true,
    },
  ];
</script>

<!-- HERO HEADER -->
<header class="w-full bg-gradient-to-br from-[hsl(var(--a))] to-[hsl(var(--s))] text-[hsl(var(--pc))]">
  <div class="container mx-auto flex flex-col items-center justify-center text-center px-6 py-20">
    <div class="mb-4 inline-block rounded-full bg-[hsl(var(--pc))/0.2] px-4 py-1 text-sm font-semibold">
      ✨ Supercharged by AI
    </div>
    <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight flex items-center gap-4">
      <RocketLaunch class="h-12 w-12 text-[hsl(var(--pc))]" />
      Welcome to Your BYOB Workspace
    </h1>
    <p class="mt-4 max-w-2xl text-lg text-[hsl(var(--pc)/0.9)]">
      Accelerate your development lifecycle with an integrated AI assistant, streamlined versioning, and powerful project controls.
    </p>
    <div class="mt-8 flex flex-wrap justify-center gap-4">
      <button class="btn btn-neutral btn-lg">Get Started</button>
      <button class="btn btn-ghost btn-lg text-[hsl(var(--pc))] hover:bg-[hsl(var(--pc))/0.2]">View Documentation</button>
    </div>
  </div>
</header>

<!-- MAIN CONTENT -->
<main class="bg-[hsl(var(--b1))] text-[hsl(var(--bc))]">

  <!-- WORKSPACE FEATURES -->
  <section class="py-16 sm:py-24">
    <div class="container mx-auto px-6 space-y-12">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
          <CodeBracket class="h-8 w-8 text-[hsl(var(--p))]" />
          Workspace Layout & Features
        </h2>
        <p class="mt-3 text-lg text-[hsl(var(--bc)/0.7)] max-w-2xl mx-auto">
          Your workspace is expertly crafted for productivity—explore its three dynamic panes:
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        {#each workspaceFeatures as feature}
          <div class="rounded-2xl border border-[hsl(var(--b3))] bg-[hsl(var(--b1))] p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold">{feature.title}</h3>
              <span class="badge badge-info badge-outline">{feature.subtitle}</span>
            </div>
            <p class="mt-4 text-[hsl(var(--bc)/0.7)]">{feature.description}</p>
            <ul class="mt-6 space-y-3 text-[hsl(var(--bc)/0.9)]">
              {#each feature.points as point}
                <li class="flex items-center gap-2">
                  <CheckCircle class="h-5 w-5 text-[hsl(var(--p))]" />
                  <span>{point}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
      <div class="text-center text-[hsl(var(--bc)/0.8)] flex items-center justify-center gap-2 bg-[hsl(var(--b2))] rounded-lg p-4">
          <LightBulb class="w-5 h-5 text-[hsl(var(--in))]" />
          <span class="font-semibold">Tip:</span> Swap panes, drag to resize, or minimize to focus—your workflow, your way!
      </div>
    </div>
  </section>

  <!-- AI MODELS -->
  <section class="py-16 sm:py-24 bg-[hsl(var(--b2))]">
    <div class="container mx-auto px-6">
       <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold">Multi-Model AI Selection</h2>
        <p class="mt-3 text-lg text-[hsl(var(--bc)/0.7)] max-w-2xl mx-auto">
          Choose the optimal AI architecture for your specific task.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {#each aiModels as model}
           <div class="relative rounded-2xl p-8 transition-all duration-300"
                class:border-2={model.recommended}
                class:border-[hsl(var(--in))]={model.recommended}
                class:shadow-2xl={model.recommended}
                class:bg-[hsl(var(--b1))]={model.recommended}
                class:border={!model.recommended}
                class:border-[hsl(var(--b3))]={!model.recommended}
           >
             {#if model.recommended}
                <span class="badge badge-info absolute -top-3 right-6">Recommended</span>
             {/if}
             {#if model.creative}
                <span class="badge badge-accent absolute -top-3 right-6">Creative</span>
             {/if}
             {#if model.advanced}
                <span class="badge badge-secondary absolute -top-3 right-6">Advanced</span>
             {/if}
             
             <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--in))/0.15] text-[hsl(var(--in))]">
                    <svelte:component this={model.icon} class="h-7 w-7" />
                </div>
                <h3 class="text-2xl font-bold">{model.name}</h3>
             </div>
             <div class="mt-6 space-y-3">
                <p><span class="font-semibold text-[hsl(var(--bc)/0.6)]">Best For:</span> {model.bestFor}</p>
                <p><span class="font-semibold text-[hsl(var(--bc)/0.6)]">Strengths:</span> {model.strengths}</p>
             </div>
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
        <RocketLaunch class="w-5 h-5 text-amber-300" />
        © 2026 <span class="text-amber-300 font-bold">Build Your Own Buzz</span>. All rights reserved.
      </p>
      <div class="flex gap-6 justify-center mt-4">
        <a href="#" class="link link-hover text-white/80 transition hover:scale-110 flex items-center gap-1 hover:text-amber-300">
          <ChatBubbleLeftRight class="w-4 h-4" /> Contact
        </a>
        <a href="#" class="link link-hover text-white/80 transition hover:scale-110 flex items-center gap-1 hover:text-amber-300">
          <DeviceTablet class="w-4 h-4" /> Docs
        </a>
        <a href="#" class="link link-hover text-white/80 transition hover:scale-110 flex items-center gap-1 hover:text-amber-300">
          <Window class="w-4 h-4" /> GitHub
        </a>
      </div>
    </div>
  </div>

</main>