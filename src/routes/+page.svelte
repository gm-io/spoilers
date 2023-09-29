<script>
	import Trending from '../components/Trending.svelte';
	import LandingBackdrop from '../components/LandingBackdrop.svelte';
    import Lhs from '../components/LHS.svelte';
	import Header from '../components/Header.svelte';
    import CascadedCarouselBackdrop from '../components/CascadedCarouselBackdrop.svelte';
    export let data;
</script>

<div class="main-container px-1 scrollbar-hidden">
    <!-- <Header /> -->
    <div class="w-full lg:w-9/12 2xl:w-9/12 mx-auto flex flex-col">
        <LandingBackdrop backdrop_data={data} image_url={data.week_trends[7]} />
        <div class="w-11/12 lg:w-full mx-auto ">
            <Trending trending_data={data} />
        </div>
        
        <!-- <CascadedCarouselBackdrop backdrop_data={data} image_url={data.week_trends[7]} /> -->
        <div class="grid grid-cols-1 lg:grid-cols-2 my-4 gap-6 mb-4 px-4 lg:px-0 pb-4 border-gray-200 border-opacity-10 py-0">
            <div class="flex flex-col card">
                <div class="bg-pink-300 h-[200px] md:h-[300px] lg:h-[250px] xl:h-[400px] 2xl:h-[400px] "></div>
                <div class=""></div>
            </div>
            <div class="flex flex-col card">
                <div class="bg-pink-300 h-[200px] md:h-[300px] lg:h-[250px] xl:h-[400px] 2xl:h-[400px] "></div>
                <div class=""></div>
            </div>
            <!-- <div class="flex flex-col card">
                <div class="bg-pink-300 h-[400px] "></div>
                <div class=""></div>
            </div> -->
        </div>     
        <div class="hidden md:flex px-3">
            <CascadedCarouselBackdrop backdrop_data={data} image_url={data.week_trends[7]} />
        </div>   
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
