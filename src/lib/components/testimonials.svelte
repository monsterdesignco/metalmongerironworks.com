<script>
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
  export let testimonials = [];
  export let image;

  let carousel; // for calling methods of the carousel instance

</script>

{#if browser}
<div class="bg-cover py-16 text-white" style="background-image: url({image})">
  <Carousel bind:this={carousel} arrows={false} dot="true">
    {#each testimonials as testimonial}
      <div class="px-16 flex flex-col justify-center items-center">
        <img src="https://res.cloudinary.com/df9zmnqsz/image/upload/v1698947616/quote-icon_xlimt7.png" alt="quoteation icon" class="w-16 pb-5">
        <div class="text-lg mb-4 max-w-xl font-heading text-center">{testimonial.testimonial}</div>
        <div class="text-lg mb-4 max-w-xl text-center text-primary-400 font-heading">{testimonial.author}</div>
      </div>
    {/each}
  </Carousel>
</div>
{/if}

<style>
    :global(.sc-carousel-dot__dot) {
        background-color: #fff !important;
    }
</style>