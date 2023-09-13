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

</script>

<div class="w-full mx-auto">
    <div class="flex">
        <div class="poster w-fit bg-white p-2 rounded-2xl">
            <img class="h-96" src={`https://www.themoviedb.org/t/p/original${data.poster_path}`} alt={data.title}>
            <!-- {#if data.belongs_to_collection}
                <img class="h-44" src={`https://www.themoviedb.org/t/p/original${data.belongs_to_collection.poster_path}`} alt={data.title}>
            {/if} -->

        </div>
        <div class="details w-3/5 pl-6">
            <p class="h2 font-bold">Title: {data.title}</p>
            <p class="h4 mb-8">{data.release_date.substring(0,4)}</p>
            <p class="">Genre:{data.genres.map((x)=> " "+x.name)}</p>
            <p class="">Rating: {parseFloat(data.vote_average).toFixed(1)}</p>
            <p class="mb-4">Language: {data.spoken_languages.map((language)=> " " + language.english_name)}</p>
            <p class="">Production:{data.production_companies.map((production_company)=> " "+ production_company.name )}</p>
            <!-- <p class="">Status: {data.status}</p> -->
            <p class="">Runtime: {data.runtime} minutes</p>
<!-- 
            <p class="">Type: {data.type}</p>
            <p class="">Networks:{data.networks.map((x)=>" "+x.name)}</p>
             -->
        </div>

    </div>
    <!-- <div class="similar-movies">
        <h1 class="h3 underline">Similar movies</h1>
        <div class="flex space-x-6">
            {#each data.similar.results as similar (similar.id)}
            <div  tabindex="0" role="button" class="flex flex-col w-36" on:click={()=>{goto_media_page(similar.id,'movie')}} on:keyup={(e)=>{goto_media_page_keyHandler(similar.id,'movie',e)}} >
                <img class="h-44 rounded-2xl cursor-pointer" src={`https://www.themoviedb.org/t/p/original${similar.poster_path}`} alt={data.title}>
                <div class="cursor-pointer">{similar.title}</div>

            </div>
            {/each}
         </div>
    </div> -->
</div>
<!-- 
<div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div> -->