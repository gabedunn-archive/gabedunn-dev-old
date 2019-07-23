<div class="max-w-sm m-4 rounded overflow-hidden shadow-lg">
  <a {href} target="_blank">
    <img
        class="w-full"
        src="{image}"
        alt="{name} project image"
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    >
  </a>
  <div class="px-6 py-4">
    {#if github}
    <div class="font-bold text-xl mb-2"><a href="{href}" target="_blank">{name}</a> | <a href="https://github.com/{github}" target="_blank">github</a></div>
    {:else}
    <div class="font-bold text-xl mb-2"><a href="{href}" target="_blank">{name}</a></div>
    {/if}
    <p class="text-gray-700 text-base">{description}</p>
  </div>
  <div class="px-6 py-4">
    {#each skills as skill}
    <span class="inline-block bg-gray-200 rounded-full p-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2">{skill}</span>
    {/each}
  </div>
</div>

<script>
    export let name
    export let description
    export let href
    export let github = false
    export let image
    export let skills = []
</script>
