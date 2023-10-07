<script >
    import { modalStore } from '@skeletonlabs/skeleton';
	export let parent;
	const cBase = 'card p-4 shadow-xl space-y-4';
    console.log($modalStore[0].meta)

    let cast = $modalStore[0].meta.all_cast.cast
    let crew = $modalStore[0].meta.all_cast.crew


</script>

{#if $modalStore[0]}
	<div class="hidden md:flex flex-col  modal-example-form card px-8 py-6 max-h-[75vh] max-w-[85vw] w-[80vw] overflow-none">
        <div class="flex flex-col">
            <div class="cast">
                <div class="text-sm font-bold dark:text-opacity-20 text-opacity-60 dark:text-white text-gray-600 pb-3">Full Cast</div>
                <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 gap-x-4">
                    {#each cast as person }
                        <div class="flex flex-col pt-1 md:pt-0 md:flex-row dark:border border-white border-opacity-10 bg-white dark:bg-black dark:text-white bg-opacity-80 dark:bg-opacity-40 items-center md:dark:bg-opacity-60 rounded-lg md:rounded text-black max-h-fit h-fit md:max-h-32">
                            {#if person.profile_path}
                                <img class="my-2 md:my-0 h-20 w-20 md:h-12 md:w-auto aspect-square md:aspect-auto rounded-full md:rounded-none border-2 md:border-none object-cover border-white border-opacity-40 md:border-opacity-10" src={`https://image.tmdb.org/t/p/original${person.profile_path}`} alt={`${person.name} profile`}>

                            {:else}
                                <img class="my-2 md:my-0 h-20 w-20 md:h-12 md:w-auto aspect-square md:aspect-auto rounded-full md:rounded-none border-2 md:border-none object-cover border-white border-opacity-40 md:border-opacity-10" src='/images/default_person_image.png' alt={`${person.name} profile`}>

                            {/if}
                            <div class="flex flex-col md:p-2 p-0 text-center md:text-left">
                                <div class="font-bold text-xs md:text-xs line-clamp-1">{person.name}</div>
                                <div class="text-xs pt-1 md:pt-0 line-clamp-1">{person.character}</div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>

        </div>

        <!-- {#each cast as person }
            <div class="">{person.name}</div>
        {/each} -->
        
        <footer class="modal-footer mt-4 {parent.regionFooter}">
            <button class="btn btn-sm dark:text-white dark:text-opacity-20 text-gray-600 text-opacity-90 bg-white bg-opacity-40 text-xs {parent.buttonNeutral}" on:click={parent.onClose}>Close</button>
        </footer>    
	</div>
{/if}