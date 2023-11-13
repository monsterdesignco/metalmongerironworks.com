<script>
    export let title = 'Change Me!';
    export let subtitle = 'Change Me!';
    export let image = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png';
    export let cards
</script>

<section id="contact" class="bg-white mt-28 dark:bg-gray-900 relative">
    <div class="z-10 style h-64 w-2/3 absolute -top-14 left-0" style="background-image: url('https://res.cloudinary.com/df9zmnqsz/image/upload/v1699901200/Metal%20Monger%20Iron%20Works/wf9byrg1kocxhtjlbcbp.png')"></div>
    <div class="bg-no-repeat bg-cover bg-center bg-gray-700 relative" style="background-image: url({image})">
        <div class="px-4 lg:pt-24 pt-24 pb-72 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6 ">
            <h2 class="mb-4 text-4xl tracking-tight font-bold font-heading relative text-white z-20">{title}</h2>
            <p class="mb-16 text-white text-lg relative z-20">{subtitle}</p>
        </div>
        <div class="absolute bg-contain bg-repeat-x bottom-0 h-[12px] w-full" style="background-image: url('https://res.cloudinary.com/df9zmnqsz/image/upload/v1699574820/mnwuvofbryskwpbcafqb.png')"></div>
    </div>
    <div class=" py-16 px-4 mx-auto relative -mt-96 max-w-screen-xl sm:py-24 lg:px-6 ">
        <form data-netlify="true" netlify-honeypot="bot-field" name="contact" method="POST" class="z-50 grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700 sm:grid-cols-2">
            <input type="hidden" name="form-name" value="contact" />
            <div>
                <label for="first-name" name="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                <input type="text" name="first-name" id="first-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-400 dark:focus:border-primary-400 dark:shadow-sm-light" placeholder="First Name" required>
            </div>
            <div>
                <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                <input type="text" name="last-name" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-400 dark:focus:border-primary-400 dark:shadow-sm-light" placeholder="Last Name" required>
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-400 dark:focus:border-primary-400 dark:shadow-sm-light" placeholder="example@email.com" required>
            </div>
            <div>
                <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                <input name="phone-number" type="number" id="phone-number" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-400 dark:focus:border-primary-400 dark:shadow-sm-light" placeholder="555-555-5555" required>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-400 dark:focus:border-primary-400" placeholder="Leave a comment..."></textarea>
                <p class="mt-4 text-sm text-gray-500">By submitting this form, you confirm that you have read and agree to Metal Monger’s <a href="/privacy-policy" class="text-primary-600 hover:underline dark:text-primary-400">privacy policy</a>.</p>
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium uppercase text-center text-white rounded-lg bg-primary-400 sm:w-fit hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
        <div class="space-y-8 text-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {#each cards as card}
                <div class="flex flex-col items-center"> <!-- This ensures that the card content is flexed and centered vertically and horizontally -->
                    <div class="flex justify-center items-center mx-auto mb-4 w-16 h-16 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                        <img src={card.icon} alt={card.title} class="w-12 h-12 lg:w-12 lg:h-12"/>
                    </div>
                    <p class="mb-2 text-xl font-heading dark:text-white">{card.title}</p>
                    <p class="mb-3 text-gray-500 dark:text-gray-400">{card.content}</p>
                    {#if card.link}
                        <a href={card.link.link} class="font-heading font-bold text-primary-400 hover:underline">{card.link.text}</a>
                    {/if}
                </div>
            {/each}
        </div>
        
    </div>

</section>  