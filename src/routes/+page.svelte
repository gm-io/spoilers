<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import { Ratings } from '@skeletonlabs/skeleton';

    let value = { current: 4.5, max: 7 };


    export let data;
    console.log(data.movies)


    function iconClick(event) {
	    value.current = event.detail.index;
    }
						
</script>
<div class="inset-0 absolute">
    <div class="bg-red-500"></div>
    <div class="flex space-x-2 justify-end p-8 pb-0">
        <div class="">Willkommen Bei Spoilers</div>
        <LightSwitch />
    </div>


    <!-- <div class="">
        <br>
        <Ratings bind:value={value.current} max={value.max} interactive on:icon={iconClick}>
            <svelte:fragment slot="empty">[ ]</svelte:fragment>
            <svelte:fragment slot="half">[x]</svelte:fragment>
            <svelte:fragment slot="full">(X)</svelte:fragment>
        </Ratings>
    </div> -->
    <div class="">
        <div class="snap-x space-x-3 scroll-px-4 snap-mandatory scroll-smooth flex overflow-x-auto pb-2 gap-7 w-5/6 mx-auto">
            {#each Array.from({ length: 8 }) as _ , i}
                <div class="snap-center shrink-0 w-fit text-center" >
                    <img class="h-72 w-48 rounded-xl" alt="The project logo" src={`https://www.themoviedb.org/t/p/original${data.movies[i].poster_path}`} />
                    <div class="h-12 w-48 mt-4 mb-1  bg-opacity-50 rounded-2xl p-1  flex items-start justify-center text-left">
                        {#if data.movies[i].media_type == "tv"}
                        <div class="p-0 m-0 text-xs">{data.movies[i].name}</div>
                        <!-- <div class="">{data.movies[i].poster_path}</div> -->
                        {:else}
                        <div class="p-0 m-0 text-xs">{data.movies[i].title}</div>
                        <!-- <div class="">{data.movies[i].poster_path}</div> -->
                        {/if}

                    </div>
                    {#if data.movies[i].media_type == "tv"}
                        <!-- <div class="">{data.movies[i].name}</div> -->
                        <!-- <div class="">{data.movies[i].poster_path}</div> -->
                    {:else}
                        <!-- <div class="p-0 m-0 w-fit bg-red-600">{data.movies[i].title}</div> -->
                        <!-- <div class="">{data.movies[i].poster_path}</div> -->
                    {/if}
                </div>
            {/each}
    <!-- 
            {#each }
            {/each} -->

        </div>
    </div>




</div>


