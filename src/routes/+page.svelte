<script>
  import Archive from "@lucide/svelte/icons/archive";
  import Code from "@lucide/svelte/icons/code";
  import Wrench from "@lucide/svelte/icons/wrench";
  import Zap from "@lucide/svelte/icons/zap";
</script>

<svelte:head>
  <title>Chemical</title>
</svelte:head>

<div class="flex flex-col gap-16">
  <div class="flex flex-col gap-8 items-center my-16">
    <h1 class="text-4xl font-bold">Chemical</h1>
    <p>Easily create your own web proxy with no experience required</p>
    <a
      class="rounded-lg flex gap-1.5 items-center cursor-pointer text-sm transition-colors bg-slate-800 h-9 px-2.5"
      href="/docs/introduction/get-started/">Get Started</a
    >
  </div>
  <div class="grid grid-cols-4 gap-4 mx-4">
    <div
      class="flex flex-col rounded-xl border border-slate-800 text-sm p-4 gap-4"
    >
      <div class="flex gap-1.5 items-center">
        <Zap size="16" />
        <p>Easy Setup</p>
      </div>
      <p class="text-sm text-slate-400">
        Takes care of setting up everything normally involved with a proxy
      </p>
    </div>
    <div
      class="flex flex-col rounded-xl border border-slate-800 text-sm p-4 gap-4"
    >
      <div class="flex gap-1.5 items-center">
        <Wrench size="16" />
        <p>Advanced Customization</p>
      </div>
      <p class="text-sm text-slate-400">
        Configurable components, options, transports, and plugins
      </p>
    </div>
    <div
      class="flex flex-col rounded-xl border border-slate-800 text-sm p-4 gap-4"
    >
      <div class="flex gap-1.5 items-center">
        <Code size="16" />
        <p>Vite Plugin</p>
      </div>
      <p class="text-sm text-slate-400">
        Test proxies in development with the Chemical Vite plugin
      </p>
    </div>
    <div
      class="flex flex-col rounded-xl border border-slate-800 text-sm p-4 gap-4"
    >
      <div class="flex gap-1.5 items-center">
        <Archive size="16" />
        <p>Reduce Clutter</p>
      </div>
      <p class="text-sm text-slate-400">
        No more clutter normally included with setting up a proxy
      </p>
    </div>
  </div>
  <div
    class="mx-auto flex justify-center rounded-xl border border-slate-800 text-sm p-4 gap-4 flex-row items-center"
  >
    <div class="flex flex-col gap-1">
      <p>Made With Chemical</p>
      <p class="text-slate-400">
        Check out these amazing projects that use Chemical
      </p>
    </div>
    <a
      class="rounded-lg flex gap-1.5 items-center cursor-pointer text-sm transition-colors bg-slate-800 h-9 px-2.5"
      href="/showcase"
    >
      See Showcase
    </a>
  </div>
</div>
