<script>
    export let trending_data;
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import { goto } from '$app/navigation';

    let tv_or_movie = "movie"

    let goto_media_page = (id_number,media_type) =>{
        goto(`/${media_type}/${id_number}`)
    }
    let goto_media_page_keyHandler = (id_number,media_type,e) =>{
        if (e.key == 'Enter' )
            goto(`/${media_type}/${id_number}`)
    }

</script> 
<!-- <div class="px-4">
    <div class="h-3 w-12/12 bg-opacity-30 dark:bg-opacity-60 mb-3 mx-auto bg-black"></div>
</div> -->
<div class="tv-carousel mt-6 xl:mt-10">
    <div class="flex w-full ">
        <div class="flex flex-col mb-4 pl-3 cursor-pointer">
            <!-- <div class="font-bold h mb-0">Trending August 2023<span class="h4"></span></div> -->
            <RadioGroup class="-ml-4"  padding="px-2 py-0" active="variant-filled-primary" hover="hover:variant-soft-primary">  
                <RadioItem class="text-sm lg:text-sm tracking-tight py-1 md:font-bold xl:font-normal 2xl:font-bold w-32 md:w-36 xl:w-fit" bind:group={tv_or_movie} name="justify" value={"movie"}>Trending Movies</RadioItem>
                <RadioItem class="text-sm lg:text-sm tracking-tight py-1 md:font-bold xl:font-normal 2xl:font-bold w-32 md:w-36 xl:w-fit" bind:group={tv_or_movie} name="justify" value={"tv"}>Trending Series</RadioItem>
            </RadioGroup>
        </div>
        <div class=" w-9/12 mx-auto border-t mt-5 border-black border-opacity-0 dark:border-gray-200 dark:border-opacity-0">
        </div>
    </div>
    <div class="snap-x space-x-2 scroll-px-4 snap-mandatory hide-scrollbar md:scroll-smooth flex overflow-x-auto gap-4 w-full mx-auto">
        {#each trending_data.week_trends as content (content.id)}
            {#if content.media_type == "movie" && tv_or_movie == "movie"}
                <div aria-pressed="false" role="button" tabindex="0" on:click={()=>{goto_media_page(content.id,'movie')}} on:keyup={(e)=>{goto_media_page_keyHandler(content.id,'movie',e)}} class="snap-center shrink-0 w-fit text-center cursor-pointer" >
                    <img class="h-44 w-32 lg:h-48 lg:w-36 2xl:h-64 2xl:w-44 border 2xl:border-2 border-white rounded-lg border-opacity-40 drop-shadow-2xl" alt={content.title} src={`https://www.themoviedb.org/t/p/original${content.poster_path}`} />
                    <div class="h-12 w-32 lg:w-36 2xl:w-44 mt-0 sm:mt-1 mb-1  bg-opacity-50 rounded-2xl p-1  flex items-start justify-center text-left">
                            <div class="p-0 m-0 text-xs text-center line-clamp-2">{content.title}</div>
                    </div>
                </div>  
            {/if}
            {#if content.media_type == "tv" && tv_or_movie == "tv"}
                <div role="button" tabindex="-1" on:click={()=>{goto_media_page(content.id,'tv')}} on:keyup={(e)=>{goto_media_page_keyHandler(content.id,'tv',e)}} class="cursor-pointer snap-center shrink-0 w-fit text-center" >
                    <img class="h-44 w-32 lg:h-48 lg:w-36 2xl:h-64 2xl:w-44 border 2xl:border-2 border-white rounded-lg border-opacity-40 drop-shadow-2xl" alt={content.name} src={`https://www.themoviedb.org/t/p/original${content.poster_path}`} />
                    <div class="h-12 w-32 lg:w-36 2xl:w-44 mt-0 sm:mt-1 mb-1  bg-opacity-50 rounded-2xl p-1  flex items-start justify-center text-left">
                            <div class="p-0 m-0 text-xs text-center line-clamp-2 ">{content.name}</div>
                    </div>
                </div>  
            {/if}
        {/each}
    </div>
</div>