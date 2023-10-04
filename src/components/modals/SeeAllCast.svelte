<script >
    import { modalStore } from '@skeletonlabs/skeleton';
	export let parent;
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
    console.log($modalStore[0].meta)

    let cast = $modalStore[0].meta.all_cast.cast
    let crew = $modalStore[0].meta.all_cast.crew


</script>

{#if $modalStore[0]}
	<div class="modal-example-form {cBase} max-h-[75vh] overflow-hidden">
        <div class="cast flex flex-col">
            <div class="">Cast</div>
        </div>
        <div class="crew">
            <div class="">Crew</div>
        </div>
        <!-- {#each cast as person }
            <div class="">{person.name}</div>
        {/each} -->
        
        <footer class="modal-footer {parent.regionFooter}">
            <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Close</button>
        </footer>    
	</div>
{/if}