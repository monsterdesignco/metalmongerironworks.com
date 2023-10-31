<script>
  import content from '$lib/content/home.json'
  import {HomeHero, Content, About} from '$lib/components'
</script>

<HomeHero {...content.hero} />
<Content {...content.content} />
<About {...content.about} />