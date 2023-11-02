<script>
    export let title = 'Change Me!';
    export let subtitle = 'Change Me!';
    export let image = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png';
    export let cards
</script>

<section class="bg-white dark:bg-gray-900">
    <div class="bg-no-repeat bg-cover bg-center bg-gray-700" style="background-image: url({image})">
        <div class="px-4 lg:pt-24 pt-24 pb-72 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6 ">
            <h2 class="mb-4 text-4xl tracking-tight font-bold font-heading text-white">{title}</h2>
            <p class="mb-16 font-light text-white sm:text-xl">{subtitle}</p>
        </div> 
    </div>
    <div class="py-16 px-4 mx-auto -mt-96 max-w-screen-xl sm:py-24 lg:px-6 ">
        <form data-netlify="true" name="contact" action="#" class="grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700 sm:grid-cols-2">
            <div>
                <label for="first-name" name="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                <input type="text" name="first-name" id="first-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Bonnie" required>
            </div>
            <div>
                <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                <input type="text" name="last-name" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Green" required>
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
            </div>
            <div>
                <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                <input name="phone-number" type="number" id="phone-number" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                <p class="mt-4 text-sm text-gray-500">By submitting this form you agree to our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> and our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
        <div class="space-y-8 text-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {#each cards as card}
                <div>
                    <div class="flex justify-center items-center mx-auto mb-4 w-16 h-16 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                        <img src={card.icon} alt={card.title} class="w-12 h-12 lg:w-12 lg:h-12"/>
                    </div>
                    <p class="mb-2 text-xl font-heading dark:text-white">{card.title}</p>
                    <p class="mb-3 text-gray-500 dark:text-gray-400">{card.content}</p>
                    {#if card.link}
                        <a href={card.link.link} class=" font-heading font-bold text-primary-600 dark:text-primary-500 hover:underline">{card.link.text}</a>
                    {/if}
                </div>
            {/each}

        </div>
    </div>
</section>