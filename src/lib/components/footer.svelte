<script>
  import content from "$lib/content/footer.json";
</script>

<footer class="bg-black">
  <div class="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
    <div class="grid grid-cols-1 lg:grid-cols-4">
      <img src={content.logo} alt="" class="w-20 mx-auto pb-8 lg:pb-0 lg:mx-0" />
      <div class="flex flex-col pb-6 md:flex-row md:justify-center lg:items-center lg:pb-0 lg:col-span-2 whitespace-nowrap">
        {#each content.navLinks as link}
          <a
            href={link.link}
            class="text-gray-400 hover:underline mx-2 font-bold uppercase text-center"
            >{link.text}</a
          >
        {/each}
      </div>
      <div class="flex justify-center lg:flex-col">
        <form action="#" class="flex mt-4 !ml-0 w-full max-w-lg sm:mt-0 sm:ml-5">
          <div class="relative w-full">
            <label
              for="email-subscribe"
              class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Email address</label>
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            <input
              type="email"
              id="email-subscribe"
              class="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-l-lg border border-gray-300 focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-400 dark:focus:border-primary-400"
              placeholder="Your email"
              required
            />
          </div>
          <button
            type="submit"
            class="py-3 px-5 uppercase text-sm font-semibold text-center text-white rounded-r-lg border cursor-pointer bg-primary-400 border-primary-400 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >Subscribe</button
          >
        </form>
      </div>
    </div>
    <hr class="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="grid grid-cols-1 md:grid-cols-3 text-gray-500">
      <div class="flex justify-center md:justify-normal pb-4">
        <a href="/">
          <img
            class="max-w-[24px]"
            src="https://res.cloudinary.com/df9zmnqsz/image/upload/v1698711062/Metal%20Monger%20Iron%20Works/l3qmzifszcssh3hclsoj.png"
            alt="facebook"
          />
        </a>
        <a href="/" class="pl-3">
          <img
            class="max-w-[24px]"
            src="https://res.cloudinary.com/df9zmnqsz/image/upload/v1698711062/Metal%20Monger%20Iron%20Works/z5rjpkxvvj3z9nmd59t4.png"
            alt="instagram"
          />
        </a>
      </div>
      <div class="flex flex-col items-center text-md pb-4">
        <img src={content.agencyInfo.logo} class="max-w-[120px] pb-2" alt="" />
        <a href={content.agencyInfo.link}>{content.agencyInfo.description}</a>
      </div>
      <span class="text-center md:text-right">© 2023 {content.agencyInfo.copyright} </span>
    </div>
  </div>
</footer>
