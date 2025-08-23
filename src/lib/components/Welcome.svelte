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
</script>

<header class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6 shadow-2xl rounded-b-3xl border-b border-indigo-700">
  <div class="container mx-auto flex flex-col items-center gap-6">
    <h1 class="text-5xl font-extrabold tracking-tight text-center flex items-center gap-3 drop-shadow-md animate-jump-in">
      <Icon src={RocketLaunch} class="w-14 h-14 text-amber-300 drop-shadow" solid />
      Welcome to Your BYOB Project Workspace
    </h1>
    <span class="badge badge-lg badge-amber-500 text-lg px-5 py-4 shadow-lg flex items-center gap-2">
      <Icon src={CheckBadge} class="inline-block w-6 h-6" solid />
      Supercharged by AI
    </span>
  </div>
</header>

<section class="container mx-auto p-8 space-y-12 bg-gradient-to-b from-slate-50 to-white min-h-screen">
  <div class="card bg-white border-2 border-indigo-200 shadow-xl rounded-3xl p-8">
    <h2 class="card-title text-3xl font-extrabold mb-6 text-indigo-800 gap-2 flex items-center">
      <Icon src={DeviceTablet} class="w-8 h-8 text-amber-500" solid />
      Workspace Layout & Features
    </h2>
    <p class="text-lg mb-6 text-slate-700">
      Your workspace is expertly crafted for productivity—explore its three dynamic panes:
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <!-- Left Pane -->
      <div class="flex flex-col items-center bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-indigo-200">
        <div class="w-16 h-16 rounded-full flex items-center justify-center bg-indigo-500 mb-4 aspect-square shadow-md">
          <Icon src={Window} class="w-8 h-8 text-white" solid />
        </div>
        <h3 class="font-bold text-xl mb-2 text-indigo-800">Left Pane</h3>
        <p class="text-base text-center text-slate-700 mb-1">
          The <span class="badge badge-info bg-indigo-500 text-white border-0 shadow-sm">Code Editor</span>: Write and edit your files.
          <br />
          <span class="badge badge-ghost badge-sm mt-2 flex items-center gap-1 bg-indigo-100 text-indigo-800 border-indigo-200">
            <Icon src={ArrowPath} class="w-4 h-4" solid /> Reload to refresh
          </span>
        </p>
      </div>
      
      <!-- Center Pane -->
      <div class="flex flex-col items-center bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-200">
        <div class="w-16 h-16 rounded-full flex items-center justify-center bg-amber-500 mb-4 aspect-square shadow-md">
          <Icon src={ChatBubbleLeftRight} class="w-8 h-8 text-white" solid />
        </div>
        <h3 class="font-bold text-xl mb-2 text-amber-800">Center Pane</h3>
        <p class="text-base text-center text-slate-700 mb-1">
          <span class="badge badge-accent bg-amber-500 text-white border-0 shadow-sm flex items-center gap-1">
            <Icon src={UserGroup} class="w-4 h-4" solid /> AI Assistant
          </span>: Ask questions, generate code, and get live help.
          <br />
          <span class="badge badge-ghost badge-sm mt-2 bg-amber-100 text-amber-800 border-amber-200">Collapsible & Swappable</span>
        </p>
      </div>
      
      <!-- Right Pane -->
      <div class="flex flex-col items-center bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-cyan-200">
        <div class="w-16 h-16 rounded-full flex items-center justify-center bg-cyan-500 mb-4 aspect-square shadow-md">
          <Icon src={Eye} class="w-8 h-8 text-white" solid />
        </div>
        <h3 class="font-bold text-xl mb-2 text-cyan-800">Right Pane</h3>
        <p class="text-base text-center text-slate-700 mb-1">
          The <span class="badge bg-cyan-500 text-white border-0 shadow-sm flex items-center gap-1">
            <Icon src={Eye} class="w-4 h-4" solid /> Live Preview
          </span>: See updates instantly.
          <br />
          <span class="badge badge-ghost badge-sm mt-2 flex items-center gap-1 bg-cyan-100 text-cyan-800 border-cyan-200">
            <Icon src={ArrowPath} class="w-4 h-4" solid /> Reload to refresh
          </span>
        </p>
      </div>
    </div>
    
    <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200 shadow-sm">
      <p class="text-lg text-slate-700 mb-3 flex items-center gap-3">
        <Icon src={DeviceTablet} class="w-6 h-6 text-indigo-600" solid />
        Swap panes, drag to resize, or minimize to focus—your workflow, your way!
      </p>
      <p class="text-lg text-slate-700 flex items-center gap-2">
        <Icon src={LightBulb} class="w-5 h-5 text-amber-500" solid />
        <span>
          <span class="font-semibold text-amber-700">Tip:</span> Try the AI assistant for instant code help, or craft directly in the editor—your live preview will always stay up to date.
        </span>
      </p>
    </div>
  </div>
</section>

<footer class="bg-gradient-to-r from-indigo-800 to-purple-800 text-white p-8 text-center mt-20 rounded-t-3xl shadow-inner border-t border-indigo-900 animate-fade-in-up">
  <div class="flex flex-col items-center gap-2">
    <div class="divider w-48 mx-auto border-white/20"></div>
    <p class="font-semibold text-lg flex items-center gap-2 justify-center">
      <Icon src={RocketLaunch} class="w-5 h-5 text-amber-300" solid />
      © 2025 <span class="text-amber-300 font-bold">Build Your Own Buzz</span>. All rights reserved.
    </p>
    <div class="flex gap-6 justify-center mt-4">
      <a href="#" class="link link-hover text-white/80 transition hover:scale-110 flex items-center gap-1 hover:text-amber-300">
        <Icon src={ChatBubbleLeftRight} class="w-4 h-4" solid /> Contact
      </a>
      <a href="#" class="link link-hover text-white/80 transition hover:scale-110 flex items-center gap-1 hover:text-amber-300">
        <Icon src={DeviceTablet} class="w-4 h-4" solid /> Docs
      </a>
      <a href="#" class="link link-hover text-white/80 transition hover:scale-110 flex items-center gap-1 hover:text-amber-300">
        <Icon src={Window} class="w-4 h-4" solid /> GitHub
      </a>
    </div>
  </div>
</footer>

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