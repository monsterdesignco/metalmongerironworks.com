<script>
    import Hero from '$lib/components/home-hero.svelte'
    export let title = "Change Me!"
    export let subtitle = "Change Me!"
    export let image = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg'
    export let buttonText = "Change Me!"
    export let buttonLink = "Change Me!"
</script>
<Hero {title} {subtitle} {image} {buttonLink} {buttonText}/>
```