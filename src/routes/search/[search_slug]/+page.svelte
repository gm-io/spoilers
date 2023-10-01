<script>
    export let data;
    console.log(data.status)
    console.log(data)
    import { goto } from '$app/navigation';

    let goto_media_page = (id_number,media_type) =>{
        goto(`/${media_type}/${id_number}`)
    }


    $:page_1 = data.search_data.results
</script>

<!--separate all, tv, movies -->
<div class=" w-full lg:w-9/12 mt-20 mx-auto">
    <div class="pl-2">
        Search for: {data.query}
    </div>
    <div class="border-gray-300 w-11/12 mx-auto border-opacity-5 border-b my-6"></div>
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-y-8 justify-items-center max-w-full">
    {#key page_1}
        {#each page_1 as content}
            <div on:click={()=>{goto_media_page(content.id,content.media_type)}} class="h-fit w-fit bg-orange  flex justify-center ">
                <div class="">
                    <img class="h-52 w-36 xl:h-64 xl:w-48 border-4 border-white dark:border-opacity-70 border-opacity-40 rounded cursor-pointer" src={`https://www.themoviedb.org/t/p/original${content.poster_path}`} alt={content.title}>
                    <div class="w-36 xl:w-48 text-center pt-2 text-sm px-2 font-bold">{content.media_type=="tv" ? content.name : content.title}</div>
                </div>
            </div>
        {/each}
    {/key}

    </div>

</div>

<!-- <div class="overflow-x-hidden">
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div> -->