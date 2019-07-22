<footer>
    <div class="container mx-auto my-12 flex">
        <ul class="mx-auto font-light">
            {#each contactInfo as contact}
            <li class="inline px-8">
                <a href="{contact.href}" target="{contact.target}">{contact.name}</a>
            </li>
            {/each}
        </ul>
    </div>
</footer>

<script>
const contactInfo = [
  {
    name: 'email',
    href: 'mailto:gabe@gabedunn.dev',
    target: ''
  },
  {
    name: 'discord',
    href: 'https://discord.gg',
    target: '_blank'
  },
  {
    name: 'linkedin',
    href: 'https://linkedin.com',
    target: '_blank'
  },
  {
    name: 'dev.to',
    href: 'https://dev.to',
    target: '_blank'
  }
]
</script>
