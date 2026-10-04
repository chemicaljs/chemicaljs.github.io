<script>
  import credits from "#lib/data/credits";
  import { SiGithub } from "@icons-pack/svelte-simple-icons";
  import { Globe } from "@lucide/svelte";
</script>

<svelte:head>
  <title>Credits | Chemical</title>
</svelte:head>

<div class="flex flex-col gap-8 items-center my-8">
  <div class="flex items-center flex-col gap-2">
    <h2 class="font-bold text-2xl">Credits</h2>
    <p>These project power Chemical to create the ultimate proxy experience</p>
  </div>
  <div class="grid grid-cols-4 gap-4 mx-4">
    {#each credits as credit}
      <div
        class="flex flex-col rounded-xl border border-slate-800 text-sm p-4 gap-4"
      >
        <div class="flex gap-1.5 items-center">
          <p>{credit.title}</p>
        </div>
        <p class="text-sm text-slate-400">
          {credit.description}
        </p>
        <div class="flex gap-2 mt-auto">
          {#if credit.website}
            <a
              href={credit.website}
              class="rounded-lg flex gap-1.5 items-center justify-center cursor-pointer text-sm transition-colors bg-slate-800 h-9 px-2.5"
            >
              <Globe size="16" />
              <span>Website</span>
            </a>
          {/if}
          {#if credit.github}
            <a
              href={credit.github}
              class="rounded-lg flex gap-1.5 items-center justify-center cursor-pointer text-sm transition-colors bg-slate-800 h-9 px-2.5"
            >
              <SiGithub size="16" />
              <span>GitHub</span>
            </a>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
