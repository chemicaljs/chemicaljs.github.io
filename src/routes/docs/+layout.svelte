<script>
  import { page } from "$app/state";
  import docsNav from "#lib/data/docsNav.js";
  import { ChevronRight } from "@lucide/svelte";

  let { children } = $props();

  let segments = $derived(page.url.pathname.split("/").filter(Boolean));
  let folderData = $derived(
    docsNav.find((folder) => folder.dir === segments[1]),
  );
  let pageData = $derived(
    folderData?.pages.find((item) => item.path === segments[2]),
  );
</script>

<svelte:head>
  <title>{pageData ? `${pageData.title} | Chemical` : "Docs | Chemical"}</title>
</svelte:head>

<div class="flex items-start gap-8">
  <aside
    class="flex flex-col w-52 overflow-y-auto h-[calc(100vh-12rem)] sticky top-24 self-start shrink-0 gap-2"
  >
    {#each docsNav as category}
      <p class="font-bold">{category.title}</p>
      <div class="flex flex-col pl-2 gap-1 text-slate-400">
        {#each category.pages as item}
          <a
            data-active={item === pageData}
            class="rounded-lg flex gap-1.5 items-center cursor-pointer text-sm transition-colors data-[active=true]:bg-slate-800 hover:bg-slate-800 h-8 px-2.5"
            href={`/docs/${category.dir}/${item.path}/`}
          >
            {item.title}
          </a>
        {/each}
      </div>
    {/each}
  </aside>
  <div class="w-full min-w-0">
    {#if folderData && pageData}
      <div class="mb-4 flex items-center gap-1.5 text-sm">
        <a
          class="text-slate-400 hover:underline"
          href="/docs/introduction/get-started/"
        >
          Docs
        </a>
        <ChevronRight class="text-slate-400" size="14" />
        <a
          class="text-slate-400 hover:underline"
          href={`/docs/${folderData.dir}/${folderData.pages[0].path}/`}
        >
          {folderData.title}
        </a>
        <ChevronRight class="text-slate-400" size="14" />
        <div>{pageData.title}</div>
      </div>
    {/if}
    <div class="prose prose-invert">
      {@render children?.()}
    </div>
  </div>
</div>
