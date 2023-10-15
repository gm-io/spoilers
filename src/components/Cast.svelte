<script>
    import { modalStore } from '@skeletonlabs/skeleton';
    import { goto } from '$app/navigation';
    export let data;
    $:cast_10 = data.cast.slice(0,10)

    let goto_media_page = (id_number,media_type) =>{
        goto(`/${media_type}/${id_number}`)
    }
    let goto_media_page_keyHandler = (id_number,media_type,e) =>{
        if (e.key == 'Enter' )
            goto(`/${media_type}/${id_number}`)
    }

    let cast_modal =() =>{
        console.log("cast modal")
        const modal = {
            type: 'component',
            component: 'modalComponentThree',
            meta:{all_cast:data}
        }
        modalStore.trigger(modal)
    }

</script>
<div class="w-full flex flex-col overflow-hidden px-1 md:px-0">
    <div class="flex  pl-1 mt-6 md:mt-8 2xl:mt-10 mb-3 items-center opacity-70 dark:opacity-100 w-fit pr-2 dark:bg-black py-1 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white dark:text-primary-300 opacity-100 dark:opacity-100">
            <path fill-rule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clip-rule="evenodd" />
          </svg>
        <!-- <h1 class="text-gray-800 dark:text-gray-400 dark:text-opacity-70 pl-1 2xl:text-xl tracking-wide">Cast</h1> -->
        <h1 class="text-gray-800 dark:text-white dark:text-opacity-100 pl-1 text-sm  2xl:text-base tracking-wide">Cast</h1>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 gap-y-4 md:gap-y-8 px-1 md:px-0">
       {#key cast_10} 
            {#each cast_10 as cast}
                <div on:click={()=>{goto_media_page(cast.id,'person')}} on:keyup={(e)=>{goto_media_page_keyHandler(cast.id,'person',e)}} class="flex cursor-pointer relative flex-col pt-1 md:pt-0 md:flex-row bg-white dark:bg-black dark:text-white bg-opacity-80 dark:bg-opacity-40 items-center md:dark:bg-opacity-60 rounded-lg md:rounded text-black max-h-fit md:max-h-32">
                    {#if cast.profile_path }
                        <img class="my-2 md:my-0 h-20 w-20 md:h-32 md:w-auto aspect-square md:aspect-auto rounded-full md:rounded border-2 md:border-none object-cover border-white border-opacity-40 md:border-opacity-10" src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt={`${cast.name}'s profile`}>
                    {:else}
                        <img class="my-2 md:my-0 h-20 w-20 bg-black opacity-10 md:h-32 md:w-auto aspect-square md:aspect-auto rounded-full md:rounded-none border-2 md:border-none object-cover border-white border-opacity-40 md:border-opacity-10" src='/images/default_person_image.png' alt={`${cast.name}'s profile`}>
                    {/if}
                    <div class="flex flex-col md:p-2 p-0 text-center md:text-left mb-2">
                        <div class="font-bold text-xs md:text-base line-clamp-2">{cast.name}</div>
                        <div class="text-xs pt-1 md:pt-0 line-clamp-2 ">{cast.character}</div>
                    </div>
                </div>
            {/each}
            <div class="flex items-end pr-2 justify-start md:justify-end font-bold text-sm 2xl:text-base md:bg-white md:bg-opacity-80 md:dark:bg-black md:dark:bg-opacity-60 rounded col-span-2 md:col-span-1 ">
                <div class=" hidden md:flex h-fit items-center p-1 px-0 text-black hover:text-gray-600  dark:text-primary-300 cursor-pointer dark:hover:text-primary-200 border-primary-300 opacity-80 hover:opacity-90">
                    <div on:click={cast_modal} class="tracking-tight underline text-sm 2xl:text-base">Full Cast</div>
                </div>
            </div>
        {/key}
    </div> 
</div>
<!-- <div>
    <pre>{JSON.stringify(data.cast, null, 2)}</pre>
</div> -->