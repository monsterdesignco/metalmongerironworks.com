<script>
    export let firstSection
    export let secondSection
</script>
<div class="max-w-screen-xl mx-auto p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6">
      <!-- Left Column -->
      <div class="flex flex-col justify-between">
        <div class="text-center mb-6">
          <div class="text-orange-400 text-5xl font-heading font-bold font-varna leading-[72px] mb-4">Built to Last</div>
          <div class="text-stone-500 text-lg font-normal font-din leading-relaxed">With our custom iron creations, you can transform your living space into a work of art. From intricate railings that adorn your staircase to elegant gates that welcome you home, every piece we create is tailored to your unique vision and the character of your residence.</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col justify-between">
            <ul class="list-disc list-inside font-heading text-xl pb-4">
                {#each firstSection.bullets as li}
                    <li>{li.bullet}</li>
                {/each}
            </ul>
            <img class="w-full h-full rounded-lg object-cover" src={firstSection.photos[0].photo} />
          </div>
          <div class="flex flex-col justify-between">
            <img class="w-full h-full rounded-lg object-cover mb-4" src={firstSection.photos[1].photo} />
            <img class="w-full h-full rounded-lg object-cover" src={firstSection.photos[2].photo}/>
          </div>
        </div>
      </div>
      <!-- Right Column -->
      <div class="flex flex-col">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="flex flex-col justify-between">
            <img class="w-full h-full rounded-lg object-cover" src={secondSection.photos[0].photo} />
            <img class="w-full h-full rounded-lg object-cover" src={secondSection.photos[1].photo} />
          </div>
          <img class="w-full h-full rounded-lg object-cover" src={secondSection.photos[2].photo}  />
        </div>
        <div class="text-left">
          <div class="text-orange-400 text-5xl font-heading font-bold font-varna leading-[72px] mb-4">Elevate Your Space</div>
          <div class="text-stone-500 text-lg font-normal font-din leading-relaxed mb-4">See more of our work.</div>
          <button class="px-4 py-2 bg-orange-400 rounded-lg text-white font-normal font-din">PROJECT GALLERY</button>
        </div>
      </div>
    </div>
  </div>