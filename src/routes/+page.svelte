<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
	import Trending from '../components/Trending.svelte';

    export let data;

</script>

<div class="">
    <LightSwitch />
    <Trending trending_data={data} />

</div>
