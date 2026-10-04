<script>
  import Footer from "#lib/components/Footer.svelte";
  import Header from "#lib/components/Header.svelte";
  import "./layout.css";

  let { children } = $props();
</script>

<Header />
<main class="p-8">
  {@render children()}
</main>
<Footer />
