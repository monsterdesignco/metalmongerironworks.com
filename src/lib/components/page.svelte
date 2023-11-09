<script>
    import SvelteMarkdown from 'svelte-markdown'
    export let content
</script>
<section class="prose prose-headings:font-heading mx-12 p-4 -mt-16 mb-12 bg-white max-w-7xl">
    <SvelteMarkdown source={content} />
</section>