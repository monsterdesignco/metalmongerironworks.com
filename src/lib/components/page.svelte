<script>
    import SvelteMarkdown from 'svelte-markdown'
    export let content
</script>
<section class="prose prose-headings:font-heading p-6 -mt-16 mb-12 mx-auto bg-white max-w-5xl leading-6">
    <SvelteMarkdown source={content} />
</section>