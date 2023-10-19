<script>
  import { onMount } from "svelte";

  onMount(async () => {
    await import('https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js')
    await import('https://identity.netlify.com/v1/netlify-identity-widget.js')
  })

</script>

