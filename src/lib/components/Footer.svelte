<script lang="ts">
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
<div class="bg-gradient-to-r from-indigo-800 to-purple-800 text-white p-8 text-center mt-20 rounded-t-3xl shadow-inner border-t border-indigo-900 animate-fade-in-up">
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
</div>