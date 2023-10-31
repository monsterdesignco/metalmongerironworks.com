<script>
  import content from '$lib/content/home.json'
  import {HomeHero, Content, About, Gallery, Contact} from '$lib/components'
</script>

<HomeHero {...content.hero} />
<Content {...content.content} />
<About {...content.about} />
<Gallery {...content.gallery} />
<Contact {...content.contact} />