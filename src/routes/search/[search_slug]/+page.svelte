<script>
    export let data;
    console.log(data.status)
    console.log(data)

    $:page_1 = data.search_data.results
</script>

<!--separate all, tv, movies -->
<div class=" w-9/12 mt-20 mx-auto">
    <div class="grid grid-cols-5 gap-y-4 justify-items-center">
    {#key page_1}
        {#each page_1 as content}
            <div class="h-fit w-48 ">
                <!-- <img class="h-56 w-44 border-4 border-white rounde cursor-pointer" src={`https://www.themoviedb.org/t/p/original${content.poster_path}`} alt={content.title}> -->
                <img class="h-80 border-4 border-white rounded-lg cursor-pointer" src={`https://www.themoviedb.org/t/p/original${content.poster_path}`} alt={content.title}>

                <div class="">{content.name}</div>
            </div>
        {/each}
    {/key}

    </div>

</div>

<div class="overflow-x-hidden">
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>