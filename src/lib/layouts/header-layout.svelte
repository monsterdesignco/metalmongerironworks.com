<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
    import Logo from '$lib/assets/images/nav-logo.png';
</script>
  
  <Navbar class="bg-black py-6 !px-8 md:px-20">
    <NavBrand href="/" >
      <img src={Logo} class="mr-3 h-16 lg:h-24" alt="Flowbite Logo" />
    </NavBrand>
        <div class="flex md:order-2 pl-6">
            <Button size="lg" class="uppercase font-semibold text-base">Get started</Button>
            <NavHamburger />
        </div>  
        <NavUl class="order-1 ml-auto uppercase">
            <NavLi class="text-white font-semibold text-base" href="/" active={true}>Services</NavLi>
            <NavLi class="text-white font-semibold text-base"href="/about">About</NavLi>
            <NavLi class="text-white font-semibold text-base"href="/pricing">Gallery</NavLi>
            <NavLi class="text-white font-semibold text-base" href="/contact">Contact</NavLi>
        </NavUl>
  </Navbar>