<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
	import Trending from '../components/Trending.svelte';
	import LandingBackdrop from '../components/LandingBackdrop.svelte';

    export let data;

</script>

<div class="">
    <LightSwitch />

    <LandingBackdrop image_url={data.week_trends[7]} />

    <Trending trending_data={data} />

</div>
