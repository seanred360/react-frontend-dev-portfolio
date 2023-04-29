<script>
  import { PUBLIC_UMAMI_ID } from "$env/static/public";
</script>

<svelte:head>
  <script
    async
    src="https://seanred-umami.netlify.app/script.js"
    data-website-id={PUBLIC_UMAMI_ID}
  ></script>
</svelte:head>
