<script>
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import { goto } from '$app/navigation';

    export let data;
    let person = data.data
    let media = data.data.appears_in.cast
    let value = 0

    let tv_or_movie = "movie"

    let goto_media_page = (id_number,media_type) =>{
        goto(`/${media_type}/${id_number}`)
    }
    let goto_media_page_keyHandler = (id_number,media_type,e) =>{
        if (e.key == 'Enter' )
            goto(`/${media_type}/${id_number}`)
    }

</script>

<div class="w-full px-0 md:px-4 lg:px-0 lg:w-9/12 2xl:w-9/12 mx-auto mt-6 md:mt-10 2xl:mt-12">
    <div class="flex relative flex-col md:flex-row rounded-xl py-7 2xl:py-14 ">
        <div class="absolute inset-0 overflow-hidden -z-10 h-full w-full md:bg-none">
            <div class="relative h-full w-full p-1 2xl:p-0 ">
                {#if true }
                    <img class="rounded object-cover h-full w-full blur-md" alt="The project logo" src={`https://image.tmdb.org/t/p/original${person.appears_in.cast[0].backdrop_path}`} />
                    <div class="absolute inset-0 bg-white bg-opacity-60 dark:bg-black md:dark:opacity-80 dark:opacity-50 "></div>
                {/if}
            </div>
        </div>

        <div class="flex ">
            <div class="poster w-1/3 md:w-fit h-fit md:bg-white p-2 rounded-2xl ml-6 md:ml-4 2xl:ml-16">
                <img class="h-auto sm:w-auto sm:h-64 lg:h-72 border border-white rounded md:rounded-none" src={`https://www.themoviedb.org/t/p/original${person.profile_path}`} alt={person.name}>
            </div>
            <div class="mobile-details flex md:hidden flex-col pl-2">
                <div class=" my-auto ">
                    <p class="h5 sm:h3 font-bold">{person.name}</p>
                    {#if person.known_for_department == "Directing"}
                        <div class="">Director</div>
                    {:else}
                        <div class="">{person.gender!=1?"Actor":"Actress"}</div>
                    {/if}
                </div>

            </div>
        </div>
        <div class="details hidden w-3/5 md:w-4/5   pl-6 md:flex md:flex-col h-fit my-auto">
            <p class="h2 font-bold">{person.name}</p>
            {#if person.known_for_department == "Directing"}
                <div class="">Director</div>
            {:else}
                <div class="">{person.gender!=1?"Actor":"Actress"}</div>
            {/if}
            <div class="pr-0 md:pr-6">
                <p class="text-xs xl:text-sm text-justify">{person.biography}</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-4 flex justify-center">
    <div class="w-fit flex flex-col">
        <RadioGroup>
            <RadioItem class="text-xs" bind:group={tv_or_movie} name="justify" value={"movie"}>Movies</RadioItem>
            <RadioItem class="text-xs" bind:group={tv_or_movie} name="justify" value={"tv"}>TV</RadioItem>
        </RadioGroup>
    </div>
</div>

<div class="w-full px-0 md:px-4 lg:px-0 lg:w-9/12 2xl:w-9/12 mx-auto mt-3">
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-2 bg-red-5 pl-2 md:pl-0">
        {#each media as thismedia }
            {#if thismedia.media_type == "movie" && tv_or_movie=="movie" && thismedia.poster_path}

                <div aria-pressed="false" role="button" tabindex="0" on:click={()=>{goto_media_page(thismedia.id,'movie')}} on:keyup={(e)=>{goto_media_page_keyHandler(thismedia.id,'movie',e)}} class="dark:bg-black bg-white  my-1 flex hover:cursor-pointer dark:hover:bg-gray-900 hover:bg-gray-200 transition duration-100">
                    <img class="h-32 w-26 max-w-26 min-w-26 lg:h-44 lg:w-32 lg:min-w-32 lg:max-w-32" src={`https://www.themoviedb.org/t/p/original${thismedia.poster_path}`} alt={thismedia.title}>
                    <div class="flex flex-col h-fit my-auto pl-2 pr-2">
                        <div class="text-sm font-bold">{thismedia.title}</div>
                        {#if thismedia.release_date}
                            <span class="text-xs">({thismedia.release_date.slice(0,4)})</span>
                        {/if}
                        <div class="text-xs mt-1 md:mt-2 font-thin">As {thismedia.character}</div>
                    </div>
                </div>
            {:else if thismedia.media_type == "tv" && tv_or_movie=="tv" && thismedia.poster_path }
            <div aria-pressed="false" role="button" tabindex="0" on:click={()=>{goto_media_page(thismedia.id,'tv')}} on:keyup={(e)=>{goto_media_page_keyHandler(thismedia.id,'tv',e)}} class="dark:bg-black bg-white my-1 flex hover:cursor-pointer dark:hover:bg-gray-900 hover:bg-gray-200 transition duration-100">
                <img class="h-32 w-26 max-w-26 min-w-26 lg:h-44 lg:w-32 lg:min-w-32 lg:max-w-32" src={`https://www.themoviedb.org/t/p/original${thismedia.poster_path}`} alt={thismedia.name}>
                <div class="flex flex-col h-fit my-auto pl-2 pr-2">
                    <div class="text-sm font-bold">{thismedia.name}</div>
                    {#if thismedia.release_date}
                        <span class="text-xs">({thismedia.release_date.slice(0,4)})</span>
                    {/if}
                    <div class="text-xs mt-1 md:mt-2 font-thin">As {thismedia.character}</div>
                </div>
            </div>
            {/if}
        {/each}
    </div>
</div>
<div class="flex flex-col bg-gray-900 px-4 mt-4 pb-8 pt-1 md:hidden ">
    <div class="my-1">{person.name}</div>
    <div class=" text-xs text-justify font-thin"> {person.biography}</div>
</div>