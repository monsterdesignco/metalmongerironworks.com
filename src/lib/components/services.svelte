<script>
    export let title = [];
    export let image = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png';
    export let cards
</script>

<section id="services" class="bg-gray-900 bg-cover" style="background-image: url({image})">
    <div class="py-20 px-8 mx-auto max-w-screen-xl lg:py-16 lg:px-12 !pt-28">
        <div class="text-center text-gray-900">
            <h2 class="mb-4 text-4xl font-heading font-bold text-white lg:text-5xl dark:text-white">
                {title.title_start}
                {#if title.title_fancy}
                    &emsp;<span class="text-primary-400">{title.title_fancy}</span>
                {/if}
                {#if title.title_end}
                    &emsp;{title.title_end}
                {/if}
            </h2>  
        </div>
        <div class="grid gap-6 mt-12 md:grid-cols-3 lg:mt-14 lg:gap-12" >
            {#each cards as card}
                <div class="flex-col mb-2 md:mb-0">
                    <img class="w-16 mx-auto pb-2" src={card.icon} alt={card.title}/>
                    <div>
                        <h3 class="text-xl font-heading font-bold md:mt-4 mb-2.5 text-white text-center">{card.title}</h3>
                        <p class="text-white text-center">{card.content}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
