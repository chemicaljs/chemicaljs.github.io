<script>
  import { SiGithub } from "@icons-pack/svelte-simple-icons";
</script>

<header
  class="sticky top-0 flex items-center justify-between gap-2 p-4 backdrop-blur-md border-b border-slate-800 z-10"
>
  <div class="flex gap-2 w-34">
    <p class="font-bold">Chemical</p>
    <div
      class="h-6 px-2 py-0.5 text-xs rounded-full bg-slate-800 flex items-center"
    >
      v3.0.1
    </div>
  </div>
  <div class="flex gap-2">
    <a
      href="/"
      class="rounded-lg flex gap-1.5 items-center cursor-pointer text-sm transition-colors hover:bg-slate-800 h-9 px-2.5"
      >Home</a
    >
    <a
      href="/docs/introduction/get-started/"
      class="rounded-lg flex gap-1.5 items-center cursor-pointer text-sm transition-colors hover:bg-slate-800 h-9 px-2.5"
    >
      Documentation
    </a>
    <a
      href="/showcase"
      class="rounded-lg flex gap-1.5 items-center cursor-pointer text-sm transition-colors hover:bg-slate-800 h-9 px-2.5"
    >
      Showcase
    </a>
    <a
      href="/credits"
      class="rounded-lg flex gap-1.5 items-center cursor-pointer text-sm transition-colors hover:bg-slate-800 h-9 px-2.5"
    >
      Credits
    </a>
  </div>
  <div class="flex justify-end w-34">
    <a
      href="/"
      class="rounded-lg flex gap-1.5 items-center justify-center cursor-pointer text-sm transition-colors bg-slate-800 size-9"
    >
      <SiGithub size="16" />
    </a>
  </div>
</header>
