<script>
  import "../app.css";
  import GithubButton from "$lib/components/GithubButton.svelte";
  import Analytics from "../lib/analytics.svelte";
</script>

<GithubButton />
<Analytics />
<slot />
