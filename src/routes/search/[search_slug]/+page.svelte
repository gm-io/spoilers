<script>
    export let data;
    console.log(data.status)
    console.log(data)

    $:page_1 = data.search_data.results
</script>

<!--separate all, tv, movies -->
<div class=" w-9/12 mt-20 mx-auto">
    <div class="border-gray-300 w-11/12 mx-auto border-opacity-5 border-b my-6"></div>
    <div class="grid grid-cols-5 gap-y-8 justify-items-center">
    {#key page_1}
        {#each page_1 as content}
            <div class="h-fit w-48 ">
                <!-- <img class="h-56 w-44 border-4 border-white rounde cursor-pointer" src={`https://www.themoviedb.org/t/p/original${content.poster_path}`} alt={content.title}> -->
                <img class="h-64 w-44 border-4 border-primary-300 dark:border-opacity-20 border-opacity-40 rounded cursor-pointer" src={`https://www.themoviedb.org/t/p/original${content.poster_path}`} alt={content.title}>

                <div class="w-44 text-center pt-2 text-sm px-2 font-bold">{content.media_type=="tv"?content.name:content.title}</div>
            </div>
        {/each}
    {/key}

    </div>

</div>

<div class="overflow-x-hidden">
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>