<script lang="ts">
  import RocketLaunch from '~icons/heroicons/rocket-launch-solid';
  import ChatBubbleLeftRight from '~icons/heroicons/chat-bubble-left-right-solid';
  import DeviceTablet from '~icons/heroicons/device-tablet-solid';
  import Window from '~icons/heroicons/window-solid';
</script>

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