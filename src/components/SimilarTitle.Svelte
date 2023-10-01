<script>
    import { goto } from '$app/navigation';

    export let data;
    $:similar_list = data.similar.results.slice(0,16)
    console.log

    let goto_media_page = (id_number,media_type) =>{
        goto(`/${media_type}/${id_number}`)
    }
    let goto_media_page_keyHandler = (id_number,media_type,e) =>{
        if (e.key == 'Enter' )
            goto(`/${media_type}/${id_number}`)
    }


</script>


<div class="similar-movies mt-6 px-1 md:px-0 md:mt-8 2xl:mt-10">
    <div class="flex bg-orange-7 pl-1 mb-3 items-center opacity-70 dark:opacity-100 w-fit pr-2 rounded dark:bg-black py-1">
        <!-- <div class="border-gray-300 border-opacity-10 border-b mt-6"></div> -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white dark:text-primary-300 opacity-100 dark:opacity-100">
            <path fill-rule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clip-rule="evenodd" />
          </svg>
          
        <!-- <h1 class="text-gray-800 dark:text-gray-400 dark:text-opacity-70 pl-1 2xl:text-xl tracking-wide">Similar Titles</h1> -->
        <h1 class="text-gray-800 dark:text-white dark:text-opacity-100 pl-1 text-sm  2xl:text-base tracking-wide">Similar Movies</h1>

    </div>
    {#key similar_list}
        
    <div class="flex space-x-6 w-full overflow-x-scroll hide-scrollbar ">
        {#each similar_list as similar (similar.id)}
        <div  class="flex flex-col" tabindex="0" role="button"  on:click={()=>{goto_media_page(similar.id,'movie')}} on:keyup={(e)=>{goto_media_page_keyHandler(similar.id,'movie',e)}} >
            <img class="h-56 w-44 rounded-lg drop-shadow-lg cursor-pointer border 2xl:border-2 border-white border-opacity-60" src={`https://www.themoviedb.org/t/p/original${similar.poster_path}`} alt={similar.title}>
            <div class="cursor-pointer w-44 px-1 overflow-ellipsis mx-auto text-center pt-2 line-clamp-2">{similar.title}</div>
        </div>
        {/each}
    </div>
    {/key}

</div>