<script>
    export let data;
    
    $:cast_10 = data.cast.slice(0,10)
</script>
<div class="w-full flex flex-col overflow-hidden px-1 md:px-0">
    <div class="flex  pl-1 mt-6 md:mt-8 2xl:mt-10 mb-3 items-center opacity-70 dark:opacity-100 w-fit pr-2 dark:bg-black py-1 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white dark:text-primary-300 opacity-100 dark:opacity-100">
            <path fill-rule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clip-rule="evenodd" />
          </svg>
          
        <!-- <h1 class="text-gray-800 dark:text-gray-400 dark:text-opacity-70 pl-1 2xl:text-xl tracking-wide">Cast</h1> -->
        <h1 class="text-gray-800 dark:text-white dark:text-opacity-100 pl-1 text-sm  2xl:text-base tracking-wide">Cast</h1>

    </div>
    <div class="grid grid-cols-4 gap-6 gap-y-8">
       {#key cast_10} 
            {#each cast_10 as cast}
                <div class="flex bg-white dark:bg-black dark:text-white bg-opacity-80 dark:bg-opacity-60 rounded text-black max-h-32">
                    <img class="h-32 rounded border object-cover border-white border-opacity-10" src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt={`${cast.name} profile`}>
                    <div class="flex flex-col p-2 ">
                        <div class="font-bold">{cast.name}</div>
                        <div class="text-ellipsis hover:text-clip overflow-hidden">
                            <div class="text-sm ">{cast.character}</div>
                        </div>
                    </div>

                </div>
            {/each}
            <div class="flex items-end pr-2 justify-end font-bold text-sm 2xl:text-base bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-60 rounded ">
                <div class="flex h-fit items-center p-1 px-0 text-black hover:text-gray-600  dark:text-primary-300 cursor-pointer dark:hover:text-primary-200 border-primary-300 opacity-80 hover:opacity-90">
                    <div class="tracking-tight underline">See All Cast & Crew</div>
                </div>

                  
            </div>
        {/key}
    </div>
</div>
<!-- <div>
    <pre>{JSON.stringify(data.cast, null, 2)}</pre>
</div> -->