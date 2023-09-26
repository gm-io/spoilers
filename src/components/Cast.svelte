<script>
    export let data;
    
    $:cast_10 = data.cast.slice(0,20)
</script>

<!-- <div class="border-gray-300 border-opacity-10 border-b mt-6"></div>
<div class="cast flex flex-col">
    <h1 class="text-gray-800 dark:text-gray-400 dark:text-opacity-70 my-2 pl-4">Cast</h1>
    <div class="grid grid-cols-6 gap-4">
        {#key cast_10}
            {#each cast_10 as cast}
                <div class="flex flex-col border-2 rounded border-black">
                    {#if cast.profile_path}
                        <img class="rounded-full h-10 w-10" src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt={`${cast.name} profile`}>
                    {/if}
                    <div class="">{cast.name}</div>
                    <div class="">{cast.character}</div>
                </div>
            {/each}
        {/key}
    </div>
</div> -->


<div class="w-full flex flex-col">
    <div class="border-gray-300 border-opacity-10 border-b mt-6"></div>
    <h1 class="text-gray-800 dark:text-gray-400 dark:text-opacity-70 my-2 mt-1 pl-4">Cast</h1>
    <div class="grid grid-cols-5 gap-4">
       {#key cast_10} 
            {#each cast_10 as cast}
                <div class="flex bg-white dark:bg-black dark:text-white bg-opacity-80 dark:bg-opacity-60 rounded text-black">
                    <img class="h-32 rounded border object-cover border-white border-opacity-10" src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt={`${cast.name} profile`}>
                    <div class="flex flex-col p-2">
                        <div class="font-bold">{cast.name}</div>
                        <div class="text-sm">{cast.character}</div>
                    </div>

                </div>
                
            {/each}
        {/key}
    </div>
</div>



<!-- <div>
    <pre>{JSON.stringify(data.cast, null, 2)}</pre>
</div> -->