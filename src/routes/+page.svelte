<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
	import Trending from '../components/Trending.svelte';
	import LandingBackdrop from '../components/LandingBackdrop.svelte';

    export let data;

</script>

<div class="w-full lg:w-9/12 mx-auto flex flex-col">

    <LightSwitch />
    <LandingBackdrop image_url={data.week_trends[7]} />
    <div class="w-11/12 lg:w-full mx-auto ">
        <Trending trending_data={data} />
    </div>
</div>
