<script>
	import Nav from '../components/Nav.svelte';
	import Foot from '../components/Footer.svelte'

	export let segment;
</script>

<Nav {segment}/>

<main class="px-4 md:px-8 flex flex-col justify-between">
    <div id="home" class="container mx-auto my-24 flex-1">
        <slot/>
    </div>
    <Foot />
</main>

<style>
    main {
        height: calc(100% - 60px)
    }
</style>
