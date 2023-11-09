<script>
    export let images = []
</script>
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