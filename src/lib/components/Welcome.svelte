<script>
  import {
    Icon,
    RocketLaunch,
    CheckBadge,
    Window,
    UserGroup,
    ChatBubbleLeftRight,
    Eye,
    LightBulb,
    ArrowPath,
    DeviceTablet
  } from "svelte-hero-icons";

  import Footer from "./Footer.svelte";
</script>

<header class="bg-gradient-to-r from-warning to-secondary text-base-content py-12 px-6 shadow-2xl rounded-b-3xl border-b border-base-300">
  <div class="container mx-auto flex flex-col items-center gap-6">
    <h1 class="text-5xl font-extrabold tracking-tight text-center flex items-center gap-3 drop-shadow-md animate-jump-in">
      <Icon src={RocketLaunch} class="w-14 h-14 text-warning-300 drop-shadow" solid />
      Welcome to Your BYOB Project Workspace
    </h1>
    <span class="badge badge-lg badge-primary text-lg px-5 py-4 shadow-lg flex items-center gap-2">
      <Icon src={CheckBadge} class="inline-block w-6 h-6" solid />
      Supercharged by AI
    </span>
  </div>
</header>

<section class="container mx-auto p-8 space-y-12 bg-base-100 text-base-content min-h-screen">
  <div class="card bg-base-100 border border-base-300 shadow-xl rounded-3xl p-8">
    <h2 class="card-title text-3xl font-extrabold mb-6 flex items-center gap-2">
      <Icon src={DeviceTablet} class="w-8 h-8 text-warning-500" solid />
      Workspace Layout & Features
    </h2>
    <p class="text-lg mb-6 text-base-content">
      Your workspace is expertly crafted for productivity—explore its three dynamic panes:
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <!-- Left Pane -->
      <div class="flex flex-col items-center bg-base-100 border border-base-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div class="w-16 h-16 rounded-full flex items-center justify-center bg-primary mb-4 aspect-square shadow-md">
          <Icon src={Window} class="w-8 h-8 text-base-100" solid />
        </div>
        <h3 class="font-bold text-xl mb-2 text-base-content">Left Pane</h3>
        <p class="text-base text-center text-base-content mb-1">
          The <span class="badge badge-info">Code Editor</span>: Write and edit your files.
          <br />
          <span class="badge badge-ghost badge-sm mt-2"> 
            <Icon src={ArrowPath} class="w-4 h-4" solid /> Reload to refresh
          </span>
        </p>
      </div>
      
      <!-- Center Pane -->
      <div class="flex flex-col items-center bg-base-100 border border-base-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div class="w-16 h-16 rounded-full flex items-center justify-center bg-primary mb-4 aspect-square shadow-md">
          <Icon src={ChatBubbleLeftRight} class="w-8 h-8 text-base-100" solid />
        </div>
        <h3 class="font-bold text-xl mb-2 text-base-content">Center Pane</h3>
        <p class="text-base text-center text-base-content mb-1">
          <span class="badge badge-accent bg-warning-500 text-white border-0 shadow-sm flex items-center gap-1">
            <Icon src={UserGroup} class="w-4 h-4" solid /> AI Assistant
          </span>: Ask questions, generate code, and get live help.
          <br />
          <span class="badge badge-ghost badge-sm mt-2 bg-warning-100 text-warning-800 border-warning-200">Collapsible & Swappable</span>
        </p>
      </div>
      
      <!-- Right Pane -->
      <div class="flex flex-col items-center bg-base-100 border border-base-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div class="w-16 h-16 rounded-full flex items-center justify-center bg-primary mb-4 aspect-square shadow-md">
          <Icon src={Eye} class="w-8 h-8 text-base-100" solid />
        </div>
        <h3 class="font-bold text-xl mb-2 text-base-content">Right Pane</h3>
        <p class="text-base text-center text-base-content mb-1">
          The <span class="badge bg-secondary text-base-content border-0 shadow-sm flex items-center gap-1">
            <Icon src={Eye} class="w-4 h-4" solid /> Live Preview
          </span>: See updates instantly.
          <br />
          <span class="badge badge-ghost badge-sm mt-2 flex items-center gap-1 bg-cyan-100 text-cyan-800 border-cyan-200">
            <Icon src={ArrowPath} class="w-4 h-4" solid /> Reload to refresh
          </span>
        </p>
      </div>
    </div>
    
    <div class="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm">
      <p class="text-lg text-base-content mb-3 flex items-center gap-3">
        <Icon src={DeviceTablet} class="w-6 h-6 text-primary" solid />
        Swap panes, drag to resize, or minimize to focus—your workflow, your way!
      </p>
      <p class="text-lg text-base-content flex items-center gap-2">
        <Icon src={LightBulb} class="w-5 h-5 text-warning-500" solid />
        <span>
          <span class="font-semibold text-warning-700">Tip:</span> Try the AI assistant for instant code help, or craft directly in the editor—your live preview will always stay up to date.
        </span>
      </p>
    </div>
  </div>
</section>

<div>
  <Footer/>
</div>

<style>
@keyframes jump-in {
  0% { transform: scale(0.95);}
  60% { transform: scale(1.05);}
  100% { transform: scale(1);}
}
.animate-jump-in { animation: jump-in 0.8s cubic-bezier(.16,1,.3,1) both;}
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(32px);}
  100% { opacity: 1; transform: translateY(0);}
}
.animate-fade-in-up { animation: fade-in-up 0.8s 0.2s cubic-bezier(.4,0,.2,1) both;}
</style>