<script>
    import Hero from '$lib/components/home-hero.svelte'
    import Content from '$lib/components/content-section.svelte'
    export let title = "Change Me!"
    export let subtitle = "Change Me!"
    export let image
    export let buttonText = "Change Me!"
    export let buttonLink = "Change Me!"
</script>
<Hero {title} {subtitle} {image} {buttonLink} {buttonText}/>
<Content/>
