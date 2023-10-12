<script>
   $:active_search = ""
   let search_item = [
    {
        "symbol": "PRAA",
        "name": "PRA Group, Inc.",
        "currency": "USD",
        "stockExchange": "NasdaqGS",
        "exchangeShortName": "NASDAQ"
    },
    {
        "symbol": "PAAS",
        "name": "Pan American Silver Corp.",
        "currency": "USD",
        "stockExchange": "NasdaqGS",
        "exchangeShortName": "NASDAQ"
    }
]
</script>

<div class=" w-4/6 mx-auto mt-40 flex flex-col justify-center">
    <div class="w-fit mx-auto my-5">Search for: {active_search}</div>
    <div class="flex w-full bg-green-300">
        <input class="w-5/6 px-2 broder focus:" type="text" bind:value={active_search}>
        <button class="btn w-1/6  bg-sky-600 rounded-none text-white ">Search</button>
    </div>
    <div class={`h-fit w-5/6 bg-gray-100 px-1 z-50 py-1 ${active_search==""?"hidden":""}`}>
        {#each search_item as item }
            <div class="flex rounded-sm pl-2 relative bg-white mt-1 py-3 cursor-pointer hover:bg-gray-100 transition duration-100">
                <div class="font-bold">{item.symbol}</div>
                <div class="pl-8">{item.name}</div>
                <div class="absolute right-2  tracking-tight">{item.exchangeShortName}</div>
            </div>
        {/each}
    </div>
</div>