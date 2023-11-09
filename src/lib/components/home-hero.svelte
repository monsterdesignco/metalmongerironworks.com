<script>
    export let title = "Change Me!"
    export let content = "Change Me!"
    export let image = '/'
    export let button= {text: "Change Me!", link: "#"}
</script>
<section class="bg-no-repeat bg-cover bg-center relative bg-blend-multiply min-h-[700px] grid place-items-center" style="background-image: url({image})">
    <div class="relative py-8 !px-16 mx-auto max-w-screen-xl text-white lg:py-16 xl:px-0 z-1 w-full ">
        <div class="mb-6 max-w-screen-md lg:mb-0">
            <h1 class="mb-4 text-4xl text-primary-500 font-heading font-extrabold tracking-tight leading-tight  md:text-5xl lg:text-6xl">
                {title}
            </h1>
            <p class="mb-6 font-normal text-black lg:mb-8 md:text-lg lg:text-xl">
                {content}
            </p>
            <a href="{button.link}" class="inline-flex uppercase items-center py-3 px-5 font-semibold text-center text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                {button.text}
            </a>
        </div>
    </div>
    <!-- <div class=" style h-64 w-2/3 absolute z-50 -bottom-14 right-0" style="background-image: url('{dots}')"></div> -->
</section>