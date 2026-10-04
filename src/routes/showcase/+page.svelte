<script>
  import showcase from "#lib/data/showcase";
  import { SiGithub } from "@icons-pack/svelte-simple-icons";
  import { Globe } from "@lucide/svelte";
</script>

<svelte:head>
  <title>Showcase | Chemical</title>
</svelte:head>

<div class="flex flex-col gap-8 items-center my-8">
  <div class="flex items-center flex-col gap-2">
    <h2 class="font-bold text-2xl">Showcase</h2>
    <p>Check out these amazing projects that use Chemical</p>
  </div>
  <div class="grid grid-cols-2 gap-4 mx-4">
    {#each showcase as project}
      <div
        class="flex flex-col rounded-xl border border-slate-800 text-sm p-4 gap-4"
      >
        <img
          class="rounded-lg"
          alt={project.title + "Preview"}
          draggable="False"
          src={project.preview}
        />
        <div class="flex gap-1.5 items-center">
          <p>{project.title}</p>
        </div>
        <p class="text-sm text-slate-400">
          {project.description}
        </p>
        <div class="flex gap-2 mt-auto">
          {#if project.website}
            <a
              href={project.website}
              class="rounded-lg flex gap-1.5 items-center justify-center cursor-pointer text-sm transition-colors bg-slate-800 h-9 px-2.5"
            >
              <Globe size="16" />
              <span>Website</span>
            </a>
          {/if}
          {#if project.github}
            <a
              href={project.github}
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
