<script>
    import socialLinks from '$lib/content/home.json'
    import SvelteMarkdown from 'svelte-markdown'
    export let image = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png';
    export let title
    export let content = "Content. Replace me!"
    export let author
</script>

<section id="about" class="bg-gray-900 bg-cover" style="background-image: url({image})">
    <div class="py-20 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="flex">
            <div class="w-1/2 hidden md:block"></div>
            <div class="md:w-1/2 flex-row flex-start gap-3">
                <img src="https://res.cloudinary.com/df9zmnqsz/image/upload/v1698711062/Metal%20Monger%20Iron%20Works/g2oosplh4m9wtkm1iufq.png" alt="" class="ml-auto w-16 pb-8">
                <h2 class="text-4xl text-right font-heading text-white">
                    {title.title_start}
                    {#if title.title_fancy}
                        &emsp;<span class="text-primary-400">{title.title_fancy}</span>
                    {/if}
                    {#if title.title_end}
                        &emsp;{title.title_end}
                    {/if}
                </h2>
                <p class="text-white text-right py-5">
                    <SvelteMarkdown source={content} />
                </p>
                <h3 class="text-xl text-right font-heading text-white">
                    {author.author}
                    {#if author.position}
                        &emsp;<span class="text-primary-400">{author.position}</span>
                    {/if}
                </h3>
                <div class="flex justify-end mt-4">
                    <a href={socialLinks.facebook}>
                        <img class="max-w-[32px]" src="https://res.cloudinary.com/df9zmnqsz/image/upload/v1698711062/Metal%20Monger%20Iron%20Works/l3qmzifszcssh3hclsoj.png" alt="facebook">
                    </a>
                    <a href={socialLinks.instagram} class="pl-3">
                        <img class="max-w-[32px]" src="https://res.cloudinary.com/df9zmnqsz/image/upload/v1698711062/Metal%20Monger%20Iron%20Works/z5rjpkxvvj3z9nmd59t4.png" alt="instagram">
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
