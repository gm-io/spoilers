<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import { Ratings } from '@skeletonlabs/skeleton';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

    import SearchBar from '../components/SearchBar.svelte';



    let value = { current: 4.5, max: 7 };
    let tv_or_movie = "movie"

    export let data;
    
    function iconClick(event) {
	    value.current = event.detail.index;
    }				
</script>
<div class="inset-0 absolute">
    <div class=" h-full flex">
        <div class="aside bg-[#011642] h-full w-0/12 md:w-4/12 lg:w-3/12"></div>
        <div class="main h-full w-full md:w-8/12 lg:w-9/12">
            <div class="flex space-x-2 justify-end p-8 pb-0">
                <div class="">Willkommen Bei Spoilers</div>
                <LightSwitch />
            </div>
            <div class="searchbar h-fit w-full">
                <SearchBar image_url={data.week_trends[6]} />
            </div>

            <div class="tv-carousel mt-1 ">
                <div class="flex w-11/12 mx-auto">
                    <div class="flex pl-3 flex-col mb-4 cursor-pointer">
                        <!-- <div class="font-bold h mb-0">Trending August 2023<span class="h4"></span></div> -->
                        <RadioGroup class="-ml-4"  padding="px-2 py-0" active="variant-filled-primary" hover="hover:variant-soft-primary">  
                            <RadioItem bind:group={tv_or_movie} name="justify" value={"movie"}>Trending Movies</RadioItem>
                            <RadioItem bind:group={tv_or_movie} name="justify" value={"tv"}>Trending Series</RadioItem>
                        </RadioGroup>
                    </div>
                </div>
                <div class="snap-x space-x-1 scroll-px-4 snap-mandatory hide-scrollbar scroll-smooth flex overflow-x-auto gap-4 w-11/12 mx-auto">
                    {#each data.week_trends as content}
                        {#if content.media_type == "tv" && tv_or_movie == "tv"}
                            <div class="snap-center shrink-0 w-fit text-center" >
                                <img class="h-44 w-32 lg:h-64 lg:w-44 rounded-xl" alt="The project logo" src={`https://www.themoviedb.org/t/p/original${content.poster_path}`} />
                                <div class="h-12 w-32 mt-4 mb-1 lg:w-44  bg-opacity-50 rounded-2xl p-1  flex items-start justify-center text-left">
                                        <div class="p-0 m-0 text-xs">{content.name}</div>
                                </div>
                            </div>  
                        {/if}
                        {#if content.media_type == "movie" && tv_or_movie == "movie"}
                            <div class="snap-center shrink-0 w-fit text-center" >
                                <img class="h-44 w-32 lg:h-64 lg:w-44 rounded-xl" alt="The project logo" src={`https://www.themoviedb.org/t/p/original${content.poster_path}`} />
                                <div class="h-12 w-32 lg:w-44 mt-4 mb-1  bg-opacity-50 rounded-2xl p-1  flex items-start justify-center text-left">
                                        <div class="p-0 m-0 text-xs">{content.title}</div>
                                </div>
                            </div>  
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>


