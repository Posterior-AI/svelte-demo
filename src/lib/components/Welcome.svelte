<script>
  // Import the main Icon component and all the specific icons needed for the new design
  import {
    Icon,
    RocketLaunch,
    CodeBracket,
    ChatBubbleLeftRight,
    Eye,
    CpuChip,
    Bolt,
    CircleStack,
    WrenchScrewdriver,
    Beaker,
    Cube,
    Cog6Tooth,
    Server,
    Sparkles,
    CheckCircle,
    LightBulb,
    CursorArrowRays,
    Clock,
    PlayCircle,
    ArrowUturnLeft,
    PaintBrush,
    RectangleGroup,
    DocumentChartBar,
  } from "svelte-hero-icons";

  // Data for features to make the code cleaner and easier to manage
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

<header class="w-full bg-gradient-to-br from-pink-400 via-red-400 to-orange-500 text-white">
  <div class="container mx-auto flex flex-col items-center justify-center text-center px-6 py-20">
    <div class="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
      ✨ Supercharged by AI
    </div>
    <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight flex items-center gap-4">
      <Icon src={RocketLaunch} class="h-12 w-12" />
      Welcome to Your BYOB Workspace
    </h1>
    <p class="mt-4 max-w-2xl text-lg text-white/90">
      Accelerate your development lifecycle with an integrated AI assistant, streamlined versioning, and powerful project controls.
    </p>
    <div class="mt-8 flex flex-wrap justify-center gap-4">
      <button class="btn btn-neutral btn-lg">Get Started</button>
      <button class="btn btn-ghost btn-lg text-white hover:bg-white/20">View Documentation</button>
    </div>
  </div>
</header>

<main class="bg-white text-gray-800">
  <section class="py-16 sm:py-24">
    <div class="container mx-auto px-6 space-y-12">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
          <Icon src={CodeBracket} class="h-8 w-8 text-blue-500" />
          Workspace Layout & Features
        </h2>
        <p class="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Your workspace is expertly crafted for productivity—explore its three dynamic panes:
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        {#each workspaceFeatures as feature}
          <div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold">{feature.title}</h3>
              <span class="badge badge-info badge-outline">{feature.subtitle}</span>
            </div>
            <p class="mt-4 text-gray-600">{feature.description}</p>
            <ul class="mt-6 space-y-3 text-gray-700">
              {#each feature.points as point}
                <li class="flex items-center gap-2">
                  <Icon src={CheckCircle} class="h-5 w-5 text-blue-500" />
                  <span>{point}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
      <div class="text-center text-gray-600 flex items-center justify-center gap-2 bg-gray-50 rounded-lg p-4">
          <Icon src={LightBulb} class="w-5 h-5 text-blue-500" />
          <span class="font-semibold">Tip:</span> Swap panes, drag to resize, or minimize to focus—your workflow, your way!
      </div>
    </div>
  </section>

  <section class="py-16 sm:py-24 bg-gray-50/70">
    <div class="container mx-auto px-6">
       <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold">Multi-Model AI Selection</h2>
        <p class="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the optimal AI architecture for your specific task.
        </p>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {#each aiModels as model}
           <div class="relative rounded-2xl p-8 transition-all duration-300"
                class:border-2={model.recommended}
                class:border-blue-500={model.recommended}
                class:shadow-2xl={model.recommended}
                class:bg-white={model.recommended}
                class:border={!model.recommended}
                class:border-gray-200={!model.recommended}
                
           >
             {#if model.recommended}
                <span class="badge badge-primary absolute -top-3 right-6">Recommended</span>
             {/if}
             {#if model.creative}
                <span class="badge badge-accent absolute -top-3 right-6">Creative</span>
             {/if}
             {#if model.advanced}
                <span class="badge badge-secondary absolute -top-3 right-6">Advanced</span>
             {/if}
             
             <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Icon src={model.icon} class="h-7 w-7" />
                </div>
                <h3 class="text-2xl font-bold">{model.name}</h3>
             </div>
             <div class="mt-6 space-y-3">
                <p><span class="font-semibold text-gray-500">Best For:</span> {model.bestFor}</p>
                <p><span class="font-semibold text-gray-500">Strengths:</span> {model.strengths}</p>
             </div>
           </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="py-16 sm:py-24">
      <div class="container mx-auto px-6">
          <div class="text-center">
              <h2 class="text-3xl md:text-4xl font-bold">Dual Operating Modes</h2>
              <p class="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                  The assistant adapts to your workflow with two distinct modes.
              </p>
          </div>
          <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div class="rounded-2xl border border-gray-200 bg-white p-8">
                  <div class="flex items-center gap-4">
                      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                          <Icon src={ChatBubbleLeftRight} class="h-7 w-7" />
                      </div>
                      <div>
                          <h3 class="text-2xl font-bold">Chat Mode</h3>
                          <p class="text-blue-600 font-semibold">Strategic Planning & Analysis</p>
                      </div>
                  </div>
                  <p class="mt-6 font-semibold">Key Use Cases:</p>
                  <ul class="mt-2 list-disc list-inside space-y-1 text-gray-600">
                      <li>Architectural planning and validation</li>
                      <li>In-depth code/concept explanation</li>
                      <li>Brainstorming features and flows</li>
                  </ul>
              </div>
              <div class="rounded-2xl border border-gray-200 bg-white p-8">
                  <div class="flex items-center gap-4">
                      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                          <Icon src={WrenchScrewdriver} class="h-7 w-7" />
                      </div>
                      <div>
                          <h3 class="text-2xl font-bold">Tool Mode</h3>
                          <p class="text-blue-600 font-semibold">Code Generation & Execution</p>
                      </div>
                  </div>
                  <p class="mt-6 font-semibold">Key Use Cases:</p>
                  <ul class="mt-2 list-disc list-inside space-y-1 text-gray-600">
                      <li>Creating new files and components</li>
                      <li>Modifying existing codebases</li>
                      <li>Installing project dependencies</li>
                  </ul>
              </div>
          </div>
      </div>
  </section>
  
  <section class="py-16 sm:py-24 bg-gray-50/70">
    <div class="container mx-auto px-6">
        <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold">Professional Workflow</h2>
            <p class="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                Maximize efficiency with this proven development cycle.
            </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl mb-4">1</div>
                <h3 class="font-bold text-lg">Strategize</h3>
                <p class="text-sm text-gray-600 mt-2">Outline objectives and define architecture with the AI assistant in <strong>Chat Mode</strong>.</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl mb-4">2</div>
                <h3 class="font-bold text-lg">Execute</h3>
                <p class="text-sm text-gray-600 mt-2">Generate files, components, and install dependencies using <strong>Tool Mode & Quick Actions</strong>.</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl mb-4">3</div>
                <h3 class="font-bold text-lg">Review & Refine</h3>
                <p class="text-sm text-gray-600 mt-2">Monitor output, make adjustments in the <strong>Code Editor</strong>, and test in the <strong>Live Preview</strong>.</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl mb-4">4</div>
                <h3 class="font-bold text-lg">Save Progress</h3>
                <p class="text-sm text-gray-600 mt-2">Create version snapshots at stable milestones to ensure you always have a checkpoint.</p>
            </div>
        </div>
    </div>
  </section>

  <section class="py-16 sm:py-24">
    <div class="container mx-auto px-6">
        <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold">Powerful Features</h2>
            <p class="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need for modern web development, integrated seamlessly.
            </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-2xl border border-gray-200 bg-white p-6">
                <Icon src={CursorArrowRays} class="h-8 w-8 text-blue-500 mb-3" />
                <h3 class="font-bold text-lg">Visual Editing Mode</h3>
                <p class="text-gray-600 mt-1">Click any element in Live Preview to modify it instantly. Changes are automatically written back to source code.</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6">
                <Icon src={ArrowUturnLeft} class="h-8 w-8 text-blue-500 mb-3" />
                <h3 class="font-bold text-lg">Version Control</h3>
                <p class="text-gray-600 mt-1">Built-in snapshots with instant rollback capability. Save versions with descriptive messages.</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6">
                <Icon src={PlayCircle} class="h-8 w-8 text-blue-500 mb-3" />
                <h3 class="font-bold text-lg">Project Controls</h3>
                <p class="text-gray-600 mt-1">Restart, stop, or delete your project with essential controls in the top-right corner.</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6">
                <Icon src={Eye} class="h-8 w-8 text-blue-500 mb-3" />
                <h3 class="font-bold text-lg">Live Preview</h3>
                <p class="text-gray-600 mt-1">Real-time, interactive preview with instant updates. No manual compilation needed.</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6">
                <Icon src={RectangleGroup} class="h-8 w-8 text-blue-500 mb-3" />
                <h3 class="font-bold text-lg">Customizable Layout</h3>
                <p class="text-gray-600 mt-1">Swap panes, drag to resize, or minimize sections. Adapt the workspace to your preferences.</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6">
                <Icon src={DocumentChartBar} class="h-8 w-8 text-blue-500 mb-3" />
                <h3 class="font-bold text-lg">Change History</h3>
                <p class="text-gray-600 mt-1">Comprehensive log of all changes with version snapshots. Track your project evolution effortlessly.</p>
            </div>
        </div>
    </div>
  </section>

  <section class="py-16 sm:py-24">
      <div class="container mx-auto px-6">
          <div class="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 p-12 text-center text-white">
              <h2 class="text-3xl md:text-4xl font-bold">Ready to Supercharge Your Development?</h2>
              <p class="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
                Experience the future of web development with AI-powered assistance, real-time previews, and seamless version control—all in one workspace.
              </p>
              <div class="mt-8 flex justify-center gap-4">
                  <button class="btn btn-neutral btn-lg">Start Building Now →</button>
                  <button class="btn btn-ghost btn-lg text-white hover:bg-white/20">Explore Features</button>
              </div>
          </div>
      </div>
  </section>

</main>