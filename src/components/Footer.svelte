<style>
    footer {
    		border-top: 1px solid rgba(0, 157, 231, 0.3);
    	}
</style>

<footer class="container mx-auto py-12 flex">
    <ul class="mx-auto font-light">
        {#each contactInfo as contact}
        <li class="inline px-2 md:px-8">
            <a href="{contact.href}" target="{contact.target}">{contact.name}</a>
        </li>
        {/each}
    </ul>
</footer>

<script>
const contactInfo = [
  {
    name: 'email',
    href: 'mailto:gabe@gabedunn.dev',
    target: ''
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/gabe-dunn-148142142/',
    target: '_blank'
  },
  {
    name: 'dev.to',
    href: 'https://dev.to/redxtech',
    target: '_blank'
  },
  {
    name: 'discord server',
    href: 'https://devcord.com/',
    target: '_blank'
  }
]
</script>
