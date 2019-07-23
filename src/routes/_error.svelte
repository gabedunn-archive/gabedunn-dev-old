<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1 class="title-2">{status}.</h1>
<h2 class="subtitle-2">{error.message}.</h2>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
