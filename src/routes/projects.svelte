<svelte:head>
	<title>projects</title>
</svelte:head>

<script>
    import Project from '../components/project.svelte'

    const projects = [
      {
        name: 'gabedunn.dev',
        description: 'This website.',
        href: 'https://gabedunn.dev',
        github: 'redxtech/gabedunn.dev',
        image: 'https://i.imgur.com/a3USZLo.png',
        skills: ['html', 'css', 'js', 'svelte', 'sapper', 'tailwind']
      },
      {
        name: 'when.',
        description: 'A simple website to show when the next episode of your favourite TV shows will air.',
        href: 'https://when.redxte.ch',
        github: 'redxtech/when',
        image: 'https://i.imgur.com/CjOQSan.png',
        skills: ['html', 'css', 'js', 'vue', 'APIs', 'OAuth2', 'fetch']
      },
      {
        name: 'canmore-brewing',
        description: 'A landing page and informative website for a local brewery.',
        href: 'https://canmorebrewing.com',
        image: 'https://i.imgur.com/tlZ4dsK.png',
        skills: ['html', 'css', 'js', 'vue', 'APIs', 'google maps']
      },
      {
        name: 'devmod',
        description: 'A moderation bot for a discord server.',
        href: 'https://devcord.com',
        github: 'redxtech/devmod',
        image: 'https://i.imgur.com/ltBwusB.png',
        skills: ['js', 'node', 'discord.js', 'async']
      },
      {
        name: 'devcord',
        description: 'A discord community that brings together web developers of all experience levels.',
        href: 'https://devcord.com',
        github: 'devcord',
        image: 'https://i.imgur.com/Ov3QJaB.png',
        skills: ['discord', 'community']
      }
    ]
</script>

<div class="mb-12">
    <h1 class="title-2">projects</h1>
    <h2 class="subtitle-2">A list of some of my projects, with a link to the project page and github, if it is public.</h2>
</div>

<div class="flex flex-wrap items-stretch content-center justify-around">
    {#each projects as project}
    <Project
        name="{project.name}"
        description="{project.description}"
        href="{project.href}"
        github="{project.github}"
        image="{project.image}"
        skills="{project.skills}"
    />
    {/each}
</div>

