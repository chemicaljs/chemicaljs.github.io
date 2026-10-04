<script>
  import ChevronLeft from "@lucide/svelte/icons/chevron-left";
  import House from "@lucide/svelte/icons/house";
</script>

<svelte:head>
  <title>Page Not Found | Chemical</title>
</svelte:head>

<div class="flex flex-col gap-8 items-center my-8">
  <div class="flex items-center flex-col gap-2">
    <h2 class="font-bold text-2xl">Page Not Found</h2>
    <p>The page you're looking for doesn't exist</p>
  </div>
  <div class="flex gap-2">
    <button
      onclick={() => window.history.back()}
      class="rounded-lg flex gap-1.5 items-center cursor-pointer text-sm transition-colors bg-slate-800 h-9 px-2.5"
    >
      <ChevronLeft size="16" />
      <span>Go Back</span>
    </button>
    <a
      href="/"
      class="rounded-lg flex gap-1.5 items-center cursor-pointer text-sm transition-colors bg-slate-800 h-9 px-2.5"
    >
      <House size="16" />
      <span>Home</span>
    </a>
  </div>
</div>
