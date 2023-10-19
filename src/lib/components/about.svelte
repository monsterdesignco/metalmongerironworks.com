<script>
    import aboutLogo from '$lib/assets/images/about-logo.png';
    export let aboutImage = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png';
    export let aboutTitle = 'A little about';
    export let aboutTitleFancy = 'Dan Walter';
    export let aboutContent = "Content. Replace me!"
</script>

<section class="bg-gray-900 bg-cover" style="background-image: url({aboutImage})">
    <div class="py-20 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

        <div class="flex">
            <div class="w-1/2"></div>
            <div class="w-1/2 flex-row flex-start ">
                <img src={aboutLogo} alt="" class="ml-auto w-16">
                <h2 class="text-4xl text-right font-heading text-white">{aboutTitle}&nbsp;<span class="text-primary-500">{aboutTitleFancy}</span></h2>
                <p class="text-white text-right">{aboutContent}</p>
                <div class="flex justify-end">
                    <a href="">
                        <img src="" alt="facebook">
                    </a>
                    <a href="">
                        <img src="" alt="instagram">
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
