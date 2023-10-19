<script>
    import dots from '$lib/assets/images/pattern-orange.png'
    export let title = "Change Me!"
    export let subtitle = "Change Me!"
    export let image = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg'
    export let buttonText = "Change Me!"
    export let buttonLink = "#"
</script>
<section class="bg-no-repeat bg-cover bg-center relative bg-blend-multiply min-h-[700px] grid place-items-center" style="background-image: url({image})">
    <div class="relative py-8 !px-16 mx-auto max-w-screen-xl text-white lg:py-16 xl:px-0 z-1 w-full ">
        <div class="mb-6 max-w-screen-md lg:mb-0">
            <h1 class="mb-4 text-4xl text-primary-700 font-heading font-extrabold tracking-tight leading-tight  md:text-5xl lg:text-6xl">
                {title}
            </h1>
            <p class="mb-6 font-normal text-black lg:mb-8 md:text-lg lg:text-xl">
                {subtitle}
            </p>
            <a href="{buttonLink}" class="inline-flex items-center py-3 px-5 font-semibold text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                {buttonText}
            </a>
        </div>
    </div>
    <div class=" style h-64 w-2/3 absolute z-50 -bottom-14 right-0" style="background-image: url('{dots}')"></div>
</section>