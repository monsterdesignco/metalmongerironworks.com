<script>
  import header from '$lib/content/header.json';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
</script>

<Navbar class="bg-black py-6 !px-8 md:px-20">
  <NavBrand href="/" >
    <img src={header.logo} class="mr-3 h-16 lg:h-24" alt="Flowbite Logo" />
  </NavBrand>
      <div class="flex md:order-2 pl-6">
          <Button href={header.button.link} size="lg"  class="uppercase font-semibold text-base bg-primary-400 hover:bg-primary-500">{header.button.text}</Button>
          <NavHamburger class="hover:bg-black shadow-none text-white"/>
      </div>  
      <NavUl class="order-1 ml-auto uppercase" classUl="bg-black border-none p-0">
        {#each header.navLinks as link}
            <NavLi class="nav-link text-white text-right font-semibold uppercase text-base hover:bg-gray-500 md:hover:text-primary-500" href={link.link}>{link.text}</NavLi>
        {/each}
      </NavUl>
</Navbar>
