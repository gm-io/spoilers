<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import { Ratings } from '@skeletonlabs/skeleton';

    let value = { current: 4.5, max: 7 };


    export let data;



    function iconClick(event) {
	    value.current = event.detail.index;
    }
						
</script>
<div class="inset-0 absolute">
    <div class="flex space-x-2 justify-end p-8 pb-0">
        <div class="">Willkommen Bei Spoilers</div>
        <LightSwitch />
    </div>
    <div class="">
        {data.title}
        <br>
        <Ratings bind:value={value.current} max={value.max} interactive on:icon={iconClick}>
            <svelte:fragment slot="empty">[ ]</svelte:fragment>
            <svelte:fragment slot="half">[.5]</svelte:fragment>
            <svelte:fragment slot="full">(X)</svelte:fragment>
        </Ratings>
    </div>

</div>
