<script>
	import Nav from '../components/Nav.svelte';
	import Foot from '../components/Footer.svelte'

	export let segment;
</script>

<Nav {segment}/>

<main class="flex flex-col justify-between">
    <section id="home" class="container mx-auto my-24 flex-1">
        <slot/>
    </section>
    <Foot />
</main>

<style>
    main {
        height: calc(100% - 60px)
    }
</style>
