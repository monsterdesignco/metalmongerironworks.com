<script>
    import Hero from '$lib/components/home-hero.svelte'
    import Content from '$lib/components/content-section.svelte'
    import About from '$lib/components/about.svelte'
    export let title = "Change Me!"
    export let subtitle = "Change Me!"
    export let image
    export let buttonText = "Change Me!"
    export let buttonLink = "Change Me!"

    export let contentTitle = "Change Me!"
    export let contentImage
    export let contentCards




</script>
<Hero {title} {subtitle} {image} {buttonLink} {buttonText}/>
<Content {contentTitle} {contentImage} {contentCards} />
<About />