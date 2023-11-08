<script>
    export let firstSection
    export let secondSection
</script>
<div id="services" class="max-w-screen-xl mx-auto p-6">
    <div class="grid grid-cols- md:grid-cols-2 gap-6 bg-white p-6">
      <!-- Left Column -->
      <div class="flex flex-col justify-between">
        <div class="text-center mb-6">
          <div class="text-orange-400 text-5xl text-left font-heading font-bold font-varna leading-[72px] mb-4">Built to Last</div>
          <div class="text-stone-500 text-lg text-left font-normal font-din leading-relaxed">With our custom iron creations, you can transform your living space into a work of art. From intricate railings that adorn your staircase to elegant gates that welcome you home, every piece we create is tailored to your unique vision and the character of your residence.</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col justify-between ">
            <ul class="list-disc list-inside font-heading responsive-text pb-4 hidden md:block" >
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
          <div class="flex flex-col justify-between">
            <img class="w-full rounded-lg object-cover aspect-square mb-4 hidden md:block" src={secondSection.photos[0].photo} alt={secondSection.photos[0].text}/>
            <img class="w-full rounded-lg object-cover aspect-3/4 hidden md:block" src={secondSection.photos[1].photo} alt={secondSection.photos[1].text}/>
          </div>
          <div class="flex items-center">
            <img class="w-full rounded-lg object-cover aspect-square" src={secondSection.photos[2].photo}  alt={secondSection.photos[2].text}/>
          </div>
        </div>
        <div class="text-left">
          <div class="text-orange-400 text-5xl font-heading font-bold font-varna leading-[72px] mb-4">Elevate Your Space</div>
          <div class="text-stone-500 text-lg font-normal font-din leading-relaxed mb-4">See more of our work.</div>
          <button class="px-4 py-2 bg-orange-400 rounded-lg text-white font-normal font-din">PROJECT GALLERY</button>
        </div>
      </div>
    </div>
  </div>
  <style>
    .responsive-text {
        font-size: clamp(16px, 1.8vw, 24px);
    }
</style>