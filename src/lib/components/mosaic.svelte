<script>
    export let firstSection
    export let secondSection
</script>
<div id="services" class="max-w-screen-xl mx-auto pt-10 mt-10 md:p-6">
    <div class="grid grid-cols- md:grid-cols-2 gap-6 bg-white p-6">
      <!-- Left Column -->
      <div class="flex flex-col justify-between">
        <div class="text-center mb-6">
          <div class="text-primary-400 text-4xl text-left  font-heading font-bold font-varna md:leading-[55px] mb-4  md:text-5xl ">{firstSection.title}</div>
          <div class="text-stone-500 md:text-lg text-left font-normal font-din leading-relaxed">{firstSection.content}</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="grid grid-cols-2 gap-4 md:flex md:flex-col md:justify-between ">
            <ul class="list-disc list-inside font-heading responsive-text pb-4 whitespace-nowrap" >
                {#each firstSection.bullets as li}
                    <li>{li.bullet}</li>
                {/each}
            </ul>
              <img class="w-full rounded-lg object-cover aspect-square" src={firstSection.photos[0].photo} alt="src={firstSection.photos[0].title}" />
          </div>
          <div class="flex flex-col justify-end">
            <img class="w-full  rounded-lg object-cover mb-4 aspect-3/4 hidden md:block" src={firstSection.photos[1].photo} alt="src={firstSection.photos[1].title}"/>
            <img class="w-full rounded-lg object-cover aspect-square hidden md:block" src={firstSection.photos[2].photo} alt="src={firstSection.photos[2].title}"/>
          </div>
        </div>
      </div>
      <!-- Right Column -->
      <div class="flex flex-col-reverse md:flex-col">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="grid grid-cols-2 gap-4 pt-8 md:pt-0 md:flex  md:flex-col justify-between">
            <img class="w-full rounded-lg object-cover aspect-square mb-4 " src={secondSection.photos[0].photo} alt={secondSection.photos[0].text}/>
            <img class="w-full rounded-lg object-cover md:aspect-3/4" src={secondSection.photos[1].photo} alt={secondSection.photos[1].text}/>
          </div>
          <div class="flex items-center">
            <img class="w-full rounded-lg object-cover aspect-square hidden md:block" src={secondSection.photos[2].photo}  alt={secondSection.photos[2].text}/>
          </div>
        </div>
        <div class="text-left">
          <div class="text-primary-400 text-4xl font-heading font-bold font-varna md:leading-[55px] mb-4  md:text-5xl">{secondSection.title}</div>
          <div class="text-stone-500 md:text-lg font-normal font-din leading-relaxed mb-4">{secondSection.content}</div>
          <a href={secondSection.button.link} class="inline-flex uppercase items-center py-3 px-5 font-semibold text-center text-white rounded-lg bg-primary-400 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{secondSection.button.text}</a>
        </div>
      </div>
    </div>
  </div>
  <style>
    .responsive-text {
        font-size: clamp(16px, 3vw, 24px);
    }
    @media (min-width: 768px) {
    .responsive-text {
        font-size: clamp(16px, 1.8vw, 24px);
    }
}
    
</style>