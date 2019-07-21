<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main>
    <section id="home" class="container mx-auto">
        <div class="flex my-24">
            <div class="flex-1">
                <slot></slot>
            </div>
        </div>
    </section>
</main>
