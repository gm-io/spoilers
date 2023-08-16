<script>
	import Trending from '../components/Trending.svelte';
	import LandingBackdrop from '../components/LandingBackdrop.svelte';
    import SearchBar from '../components/SearchBar.svelte';
    import Lhs from '../components/LHS.svelte';
	import Header from '../components/Header.svelte';
    export let data;
</script>

<Header />
<div class="w-full lg:w-9/12 mx-auto flex flex-col">
    <SearchBar />
    <LandingBackdrop image_url={data.week_trends[7]} />
    <div class="w-11/12 lg:w-full mx-auto ">
        <Trending trending_data={data} />
    </div>
</div>

    <!-- <Header />
<div class="w-10/12 mx-auto h-[100vh] flex">
    <div class="w-1/5 border-r border-black dark:border-gray-200 border-opacity-10 dark:border-opacity-10">
        <Lhs />

    </div>
    <div class="px-2 w-4/5">
        <SearchBar />
        <LandingBackdrop image_url={data.week_trends[7]} />
        <div class="w-11/12 lg:w-full mx-auto ">
            <Trending trending_data={data} />
        </div>
    </div>
</div> -->
