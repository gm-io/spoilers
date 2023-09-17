<script>
    export let data;
    import { goto } from '$app/navigation';

    let goto_media_page = (id_number,media_type) =>{
        goto(`/${media_type}/${id_number}`)
    }
    let goto_media_page_keyHandler = (id_number,media_type,e) =>{
        if (e.key == 'Enter' )
            goto(`/${media_type}/${id_number}`)
    }

    let details_css ='dark:text-white text-gray-700 font-normal'

    $:similar_list = data.similar.results.slice(0,16)

</script>

<div class="w-full px-4 lg:px-0 lg:w-9/12 2xl:w-10/12 mx-auto mt-10 2xl:mt-20 bg-orange-600">
    <div class="flex relative bg-green-600 bg-opacity-10 rounded-xl py-7">
        <div class="poster w-fit bg-white p-2 rounded-2xl ml-4">
            <img class="h-96" src={`https://www.themoviedb.org/t/p/original${data.poster_path}`} alt={data.title}>
            <!-- {#if data.belongs_to_collection}
                <img class="h-44" src={`https://www.themoviedb.org/t/p/original${data.belongs_to_collection.poster_path}`} alt={data.title}>
            {/if} -->

        </div>
        <div class="details w-3/5 pl-6 bg-orange- h-fit my-auto">
            <p class="h2 font-bold">{data.title}</p>
            <p class="h4 mb-8 text-gray-600 dark:text-gray-400">{data.release_date.substring(0,4)}</p>
            <div class="font-bold text-xl">
                <p class="">Genre:<span class={details_css}>{data.genres.map((x)=> " "+x.name)}</span></p>
                <p class="">Rating: <span class={details_css}>{parseFloat(data.vote_average).toFixed(1)}</span></p>
                <p class="mb-4">Language: <span class={details_css}>{data.spoken_languages.map((language)=> " " + language.english_name)}</span></p>
                <p class="">Production: <span class={details_css}>{data.production_companies.map((production_company)=> " "+ production_company.name )}</span></p>
                <!-- <p class="">Status: {data.status}</p> -->
                <p class="">Runtime: <span class={details_css}>{data.runtime} minutes</span></p>
            </div>
<!-- 
            <p class="">Type: {data.type}</p>
            <p class="">Networks:{data.networks.map((x)=>" "+x.name)}</p>
             -->
        </div>
        <!-- <div class="poster w-fit bg-white p-2 rounded-2xl absolute right-4">
            <img class="h-96" src={`https://www.themoviedb.org/t/p/original${data.poster_path}`} alt={data.title}>
        </div> -->

    </div>
    <div class="border-gray-300 border-opacity-10 border-b mt-6"></div>
    <div class="similar-movies">
        <h1 class="text-gray-800 dark:text-gray-400 dark:text-opacity-70 my-2 pl-4">Similar Titles</h1>
        {#key similar_list}
            
        <div class="flex space-x-6 w-full overflow-scroll hide-scrollbar ">
            {#each similar_list as similar (similar.id)}
            <div  class="flex flex-col " tabindex="0" role="button"  on:click={()=>{goto_media_page(similar.id,'movie')}} on:keyup={(e)=>{goto_media_page_keyHandler(similar.id,'movie',e)}} >
                <img class="h-56 w-44 rounded-lg cursor-pointer" src={`https://www.themoviedb.org/t/p/original${similar.poster_path}`} alt={data.title}>
                <div class="cursor-pointer w-44 px-1 mx-auto text-center pt-2">{similar.title}</div>

            </div>
            {/each}
        </div>
        {/key}

    </div>
    <div class="flex space-x-4 py-2">
        {#each data.trailers as trailer}
            <p class="p-2 bg-white">{trailer.name}</p>
        {/each}
    </div>
</div>

<div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>