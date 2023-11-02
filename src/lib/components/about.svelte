<script>
    export let image = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png';
    export let title = 'A little about';
    export let titleFancy= 'Dan Walter';
    export let content = "Content. Replace me!"
</script>

<section id="about" class="bg-gray-900 bg-cover" style="background-image: url({image})">
    <div class="py-20 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

        <div class="flex">
            <div class="w-1/2"></div>
            <div class="w-1/2 flex-row flex-start gap-3">
                <img src="https://res.cloudinary.com/df9zmnqsz/image/upload/v1698711062/Metal%20Monger%20Iron%20Works/g2oosplh4m9wtkm1iufq.png" alt="" class="ml-auto w-16 pb-8">
                <h2 class="text-4xl text-right font-heading text-white">{title}&nbsp;<span class="text-primary-500">{titleFancy}</span></h2>
                <p class="text-white text-right py-5">{content}</p>
                <div class="flex justify-end">
                    <a href="/">
                        <img class="max-w-[32px]" src="https://res.cloudinary.com/df9zmnqsz/image/upload/v1698711062/Metal%20Monger%20Iron%20Works/l3qmzifszcssh3hclsoj.png" alt="facebook">
                    </a>
                    <a href="/" class="pl-3">
                        <img class="max-w-[32px]" src="https://res.cloudinary.com/df9zmnqsz/image/upload/v1698711062/Metal%20Monger%20Iron%20Works/z5rjpkxvvj3z9nmd59t4.png" alt="instagram">
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
