<script>
	import { slide } from "svelte/transition";

	export let i;
	export let show;
	export let showCollapse;
	export let item;
</script>

<style>
	.AccordionBody{
		margin: 0% 10%;
	}
	.collapse__header {
	  padding: 1rem;
	  border: 1px solid #f99248;
	  transition: background 200ms ease-in-out;
	}
	.collapse__header:hover {
	  background: #fee9da;
	}
	.collapse__body {
	  padding: 1rem;
	  background: #bdd0fc;
	}
</style>
<div class="AccordionBody">
<div class="collapse__header" on:click={showCollapse(i)}>
		{item}
</div>
{#if show === i}
<div class="collapse__body"  >
	<slot/>
</div>

{/if}
</div>