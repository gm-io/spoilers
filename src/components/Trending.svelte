<script>
    export let trending_data;
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

    let tv_or_movie = "movie"

</script>

<div class="tv-carousel mt-1 ">
    <div class="flex full ">
        <div class="flex flex-col mb-4 pl-3 cursor-pointer">
            <!-- <div class="font-bold h mb-0">Trending August 2023<span class="h4"></span></div> -->
            <RadioGroup class="-ml-4"  padding="px-2 py-0" active="variant-filled-primary" hover="hover:variant-soft-primary">  
                <RadioItem class="text-sm tracking-tight py-1 font-bold" bind:group={tv_or_movie} name="justify" value={"movie"}>Trending Movies</RadioItem>
                <RadioItem class="text-sm tracking-tight py-1 font-bold" bind:group={tv_or_movie} name="justify" value={"tv"}>Trending Series</RadioItem>
            </RadioGroup>
        </div>
    </div>

    <div class="snap-x space-x-2 scroll-px-4 snap-mandatory hide-scrollbar scroll-smooth flex overflow-x-auto gap-4 w-full mx-auto">
        {#each trending_data.week_trends as content}
            {#if content.media_type == "tv" && tv_or_movie == "tv"}
                <div class="snap-center shrink-0 w-fit text-center" >
                    <img class="h-44 w-32 lg:h-48 lg:w-36 2xl:h-64 2xl:w-44 rounded-xl drop-shadow-lg" alt="The project logo" src={`https://www.themoviedb.org/t/p/original${content.poster_path}`} />
                    <div class="h-12 w-32 mt-4 mb-1 lg:w-36 2xl:w-44 bg-opacity-50 rounded-2xl p-1  flex items-start justify-center text-left">
                            <div class="p-0 m-0 text-xs">{content.name}</div>
                    </div>
                </div>  
            {/if}
            {#if content.media_type == "movie" && tv_or_movie == "movie"}
                <div class="snap-center shrink-0 w-fit text-center" >
                    <img class="h-44 w-32 lg:h-48 lg:w-36 2xl:h-64 2xl:w-44 rounded-xl drop-shadow-lg" alt="The project logo" src={`https://www.themoviedb.org/t/p/original${content.poster_path}`} />
                    <div class="h-12 w-32 lg:w-36 2xl:w-44 mt-4 mb-1  bg-opacity-50 rounded-2xl p-1  flex items-start justify-center text-left">
                            <div class="p-0 m-0 text-xs text-center">{content.title}</div>
                    </div>
                </div>  
            {/if}
        {/each}
    </div>
</div>