<script>
    export let contentTitle = 'Change Me!';
    export let contentBackground = '';
</script>

<section class="bg-gray-900" style="background-image: url('{contentBackground}')">
    <div class="py-20 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="text-center text-gray-900">
            <h2 class="mb-4 text-4xl font-heading font-bold text-white lg:text-5xl dark:text-white">{contentTitle}</h2>         
        </div>
        <div class="grid gap-6 mt-12 lg:mt-14 lg:gap-12 md:grid-cols-3">
            <div class="flex mb-2 md:flex-col md:mb-0">
                <img class="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png"
                    alt="office image" />
                <div>
                    <h3 class="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">Build as one team
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">Work seamlessly across your organization on a
                        platform designed for collaboration.</p>
                </div>
            </div>
            <div class="flex mb-2 md:flex-col md:mb-0">
                <img class="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-2.png"
                    alt="office image 2" />
                <div>
                    <h3 class="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">Transform your
                        culture</h3>
                    <p class="text-gray-500 dark:text-gray-400">Embrace innersource, iterate faster, and ship more
                        frequently using best tools from open source teams.</p>
                </div>
            </div>
            <div class="flex md:flex-col">
                <img class="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-3.png"
                    alt="office image 3" />
                <div>
                    <h3 class="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">Learn as you build
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">Get insight into how your team builds today with
                        community-backed KPIs.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Block end -->