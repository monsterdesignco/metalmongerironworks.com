<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
      }
  
      // Load external scripts after the component is mounted
      let cmsScript = document.createElement('script');
      cmsScript.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
      cmsScript.type = 'module';
      document.body.appendChild(cmsScript);
  
      let identityScript = document.createElement('script');
      identityScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
      document.body.appendChild(identityScript);
    });
  </script>
  
  <svelte:head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <title>Content Manager</title>
  </svelte:head>
  