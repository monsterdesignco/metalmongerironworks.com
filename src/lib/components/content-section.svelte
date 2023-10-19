<script>
    export let contentTitle = 'Change Me!';
    export let contentImage = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png';
    export let contentCards

</script>

<section class="bg-gray-900 bg-cover" style="background-image: url({contentImage})">
    <div class="py-20 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="text-center text-gray-900">
            <h2 class="mb-4 text-4xl font-heading font-bold text-white lg:text-5xl dark:text-white">{contentTitle}</h2>         
        </div>
        <div class="grid gap-6 mt-12 lg:mt-14 lg:gap-12 md:grid-cols-3">
            {#each contentCards as card}
            <div class="flex mb-2 md:flex-col md:mb-0">
                <img class="w-16 mx-auto pb-2" src={card.cardIcon} alt={card.cardTitle}/>
                <div>
                    <h3 class="text-xl font-heading font-bold md:mt-4 mb-2.5 text-white text-center">{card.cardTitle}</h3>
                    <p class="text-white text-center">{card.cardContent}</p>
                </div>
            </div>
            {/each}
        </div>
    </div>
</section>
