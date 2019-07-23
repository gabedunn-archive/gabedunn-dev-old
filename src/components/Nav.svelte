<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(0, 157, 231, 0.2);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(0, 157, 231);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav class="container mx-auto">
	<ul>
		<li><a rel="prefetch" class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
		<!--<li><a rel="prefetch" class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>-->
		<li><a rel="prefetch" class='{segment === "projects" ? "selected" : ""}' href='projects'>projects</a></li>
	</ul>
</nav>
