<script>
    export let title = "Change Me!"
    export const subtitle = "Change Me!"
    export const image = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg'
    export const buttonText = "Change Me!"
    export const buttonLink = "#"
</script>
<section
class="bg-[url('{image}')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply min-h-[700px] grid place-items-center">
<div class="relative py-8 !px-16 mx-auto max-w-screen-xl text-white lg:py-16 xl:px-0 z-1 w-full ">
    <div class="mb-6 max-w-screen-md lg:mb-0">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl">
            {title}
        </h1>
        <p class="mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
        {subtitle}
        </p>
        <a href="{buttonLink}" class="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            {buttonText}
        </a>
    </div>
    
</div>
</section>