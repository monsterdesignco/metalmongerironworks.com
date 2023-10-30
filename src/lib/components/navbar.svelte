<script>
    import header from '$lib/content/header.json';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';

</script>
  
  <Navbar class="bg-black py-6 !px-8 md:px-20">
    <NavBrand href="/" >
      <img src={header.logo} class="mr-3 h-16 lg:h-24" alt="Flowbite Logo" />
    </NavBrand>
        <div class="flex md:order-2 pl-6">
            <Button href={header.buttonLink} size="lg" class="uppercase font-semibold text-base">{header.buttonText}</Button>
            <NavHamburger />
        </div>  
        <NavUl class="order-1 ml-auto uppercase">
            {#each header.navLinks as link}
              <NavLi class="text-white font-semibold text-base" href={link.link}>{link.text}</NavLi>
            {/each}

        </NavUl>
  </Navbar>