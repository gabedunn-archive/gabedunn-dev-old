<script>
    const yearsSince = (from, to) => Math.abs(Math.round((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24 * 365.25)))
    const devYears = yearsSince(new Date('2015-10-15'), new Date())
</script>
<svelte:head>
	<title>Gabe Dunn</title>
	<meta property="og:title" content="Gabe Dunn." />
</svelte:head>

<div>
    <h1 class="title">Gabe Dunn.</h1>
    <h2 class="subtitle">Full-stack web & software developer.</h2>
</div>

<div class="mt-24 text-lg font-light text-justify">
    <p class="mt-4">
        Hello! I am a full-stack web and software developer based in Calgary, Alberta and I've been working with web
        technologies for the past {devYears} years.
    </p>
    <p class="my-4">
        If you are interested in working with me please reach out via any of the contacts listed below.
    </p>
    <p class="my-4">
        Check out my <a href="projects">projects</a> page to learn more about some of the projects I've worked on.
    </p>
</div>
