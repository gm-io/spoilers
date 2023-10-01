<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import { goto } from "$app/navigation";
    let query = '';

    let SEARCH_QUERY = (e) =>{
        if (e.key == "Enter")
            goto(`/search/${query}`)
    }
</script>
<!-- <div class="h-5 w-9/12 bg-opacity-60 mt-1 mx-auto bg-black"></div> -->
<div class="flex relative w-full lg:w-9/12 2xl:w-9/12 h-fit mx-auto mt-10 2xl:mt-12">
    <div class="absolute left-0 h-full flex items-center pl-2 sm:pl-4 pt-1">
        <div on:click={()=>goto(`/`)} class="cursor-pointer hover:bg-stone-800 text-white transition-all duration-300 bg-black p-1 sm:p-3 py-2 sm:py-1 bg-opacity-90 rounded text-xs sm:text-base 2xl:text-lg">Spoilers.IO</div>
    </div>
    <div class="absolute right-0 h-full flex items-center pr-3 xl:pr-2 pt-1">
        <LightSwitch height="h-4 2xl:h-6" width="w-8 2xl:w-12" />
    </div>
    <div class="w-4/6 sm:w-3/5 2xl:w-4/6 pl-8 2xl:pl-0 mx-auto relative focus:  h-full">
        <div class="absolute top-0 bottom-0 my-auto flex pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 m-auto text-stone-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>              
        </div>
        <input bind:value={query} on:keyup={SEARCH_QUERY} type="text" id="default-search" class="block rounded-2xl w-full p-4 py-2 pl-8 md:pl-10 text-base md:text-sm text-gray-900 rounded-4xl bg-gray-50 focus:ring-blue-500 dark:focus:outline-white focus:outline-gray-600  dark:focus:border-white focus:border-gray-600 dark:bg-primary-200 dark:border-gray-600 sm:font-bold dark:text-black dark:placeholder-black" placeholder="" required>
        <!-- <input bind:value={query} on:keyup={SEARCH_QUERY} type="text" id="default-search" class="block rounded-2xl w-full p-4 py-2 pl-4 md:pl-10 text-sm text-gray-900 rounded-4xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="search dis ..." required> -->
    </div>
</div>
<!-- <div class="h-5 w-9/12 bg-opacity-50 my-3 mt-1 mx-auto bg-black"></div> -->
