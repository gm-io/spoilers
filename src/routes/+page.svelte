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


</div>
<div class="">
    {#each data.movies as movie}
        {#if movie.media_type == "tv"}
            <div class="">{movie.name}</div>
        {:else}
            <div class="p-0 m-0 w-fit bg-red-600">{movie.title}</div>
        {/if}
    {/each}
</div>