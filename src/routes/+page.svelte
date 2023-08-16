<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
	import Trending from '../components/Trending.svelte';
	import LandingBackdrop from '../components/LandingBackdrop.svelte';
    import SearchBar from '../components/SearchBar.svelte';

    export let data;

</script>
<!-- <div class="w-full lg:w-9/12 mx-auto flex flex-col">
    <LightSwitch />
    <SearchBar />
    <LandingBackdrop image_url={data.week_trends[7]} />
    <div class="w-11/12 lg:w-full mx-auto ">
        <Trending trending_data={data} />
    </div>
</div> -->

<div class="w-10/12 mx-auto h-[100vh] flex">
    <div class="w-1/5">LEFT SIDE</div>
    <div class="w-4/5">
        <LightSwitch />
        <SearchBar />
        <LandingBackdrop image_url={data.week_trends[7]} />
        <div class="w-11/12 lg:w-full mx-auto ">
            <Trending trending_data={data} />
        </div>
    </div>
</div>
