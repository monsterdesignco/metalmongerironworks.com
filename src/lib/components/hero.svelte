<script>
    export let image
    export let title = "We invest in the world’s potential"
    export let subtitle = "Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
    export let images
</script>
<section class="bg-cover min-h-[400px] text-center flex flex-col justify-center items-center text-white" style="background-image: url({image})">
    <h1 class="font-heading font-bold text-3xl pb-6">{title}</h1>
    <p class="max-w-[800px]">{subtitle}</p>
</section>
<section>
    <div class="flex m-auto justify-center my-12  mx-2 ">
        <div class="flex-col space-y-4 mx-2 max-w-[50%]">
            {#each images as image, i }
                {#if i % 2 == 0}
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={image.image} alt="">
                    </div>
                {/if}
            {/each}
        </div>
        <div class="flex-col space-y-4 mx-2 max-w-[50%]">
            {#each images as image, i }
                    {#if i % 2 != 0}
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src={image.image} alt="">
                        </div>
                    {/if}
            {/each}
        </div>
    </div>
</section>