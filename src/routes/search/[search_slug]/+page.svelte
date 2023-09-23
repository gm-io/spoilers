<script>
    export let data;
    console.log(data.status)
    console.log(data)

    let page_1 = data.search_data.results
</script>

<!--separate all, tv, movies -->
<div class="bg-yellow-600 w-9/12 mt-20 mx-auto">
    <div class="grid grid-cols-5 gap-y-4">
    {#each page_1 as content}
        <div class="h-72 w-48 bg-black">
            <div class="">{content.name}</div>
        </div>
    {/each}
    </div>

</div>

<div class="overflow-x-hidden">
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>