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

    <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
        {#each Array.from({ length: 8 }) as _ , i}
            <div style=" background-image: url(https://www.themoviedb.org/t/p/w342/p0AtD0ivSlHq2MHY6JFgyhNqAQY.jpg)" class="bg-no-repeat bg-center snap-center shrink-0 card py-20 w-40 md:w-80 text-center" >

                {#if data.movies[i].media_type == "tv"}
                    <div class="">{data.movies[i].name}</div>
                    <div class="">{data.movies[i].poster_path}</div>

                {:else}
                    <div class="p-0 m-0 w-fit bg-red-600">{data.movies[i].title}</div>
                    <div class="">{data.movies[i].poster_path}</div>
                {/if}
            </div>
        {/each}
<!-- 
        {#each }
        {/each} -->

    </div>




</div>


