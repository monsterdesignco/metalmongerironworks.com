<script>
  import content from '$lib/content/home.json'
  import {HomeHero, Services, About, Contact, Testimonials, Mosaic} from '$lib/components'
</script>

<HomeHero {...content.hero} />
<Services {...content.content} />
<About {...content.about} />
<Mosaic {...content.gallery} />
<Contact {...content.contact} />
<Testimonials {...content.testimonials} />
