<script>
    export let image
    export let title = "We invest in the world’s potential"
    export let subtitle = "Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
    export let images = []
</script>
<section class="bg-cover min-h-[400px] text-center flex flex-col justify-center items-center text-white" style="background-image: url({image})">
    <h1 class="font-heading font-bold text-3xl pb-6">{title}</h1>
    <p class="max-w-[800px]">{subtitle}</p>
</section>
