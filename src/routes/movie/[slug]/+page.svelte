<script>
    export let data;
    import { goto } from '$app/navigation';
    import { modalStore } from '@skeletonlabs/skeleton';
    import Cast from '../../../components/Cast.svelte';
    import SimTitle from '../../../components/SimTitle.svelte';

    let trailer_modal = (trailer_key) =>{
        const modal = {
            type: 'component',
            component: 'modalComponentTwo',
            image: trailer_key
        }
        modalStore.trigger(modal)
    }

    let cast_modal =() =>{
        const modal = {
            type: 'component',
            component: 'modalComponentThree'
        }
        modalStore.trigger(modal)
    }

    console.log(data.credits)

    let goto_media_page = (id_number,media_type) =>{
        goto(`/${media_type}/${id_number}`)
    }
    let goto_media_page_keyHandler = (id_number,media_type,e) =>{
        if (e.key == 'Enter' )
            goto(`/${media_type}/${id_number}`)
    }

    let details_css ='dark:text-white text-gray-700 font-normal'


</script>

<div class="w-full px-0 md:px-4 lg:px-0 lg:w-9/12 2xl:w-9/12 mx-auto mt-6 md:mt-10 2xl:mt-12">
    <div class="flex relative flex-col md:flex-row rounded-xl py-7 2xl:py-14">
        <div class="absolute inset-0 overflow-hidden -z-10 h-full w-full md:bg-none">
            <div class="relative h-full w-full p-1 2xl:p-0 ">
                {#if data.backdrop_path }
                    <img class="rounded object-cover h-full w-full blur-md" alt="The project logo" src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} />
                    <div class="absolute inset-0 bg-white bg-opacity-60 dark:bg-black md:dark:opacity-80 dark:opacity-50 "></div>
                {/if}
            </div>
        </div>
        <div class="mobile-details flex md:hidden flex-col pl-2">
            <p class="h3 font-bold">{data.title}</p>
            <p class="h4 text-gray-600 dark:text-gray-400">{data.release_date.substring(0,4)}</p>
        </div>
        <div class="flex">
            <div class="poster w-1/2 md:w-fit h-fit md:bg-white p-2 rounded-2xl ml-0 md:ml-4 2xl:ml-16">
                <img class="h-64 md:h-96 border border-white rounded md:rounded-none" src={`https://www.themoviedb.org/t/p/original${data.poster_path}`} alt={data.title}>
            </div>
            <div class="flex flex-col space-y-2 md:hidden w-1/2 py-2">
                <p class="">Genre:<span class={details_css}>{data.genres.map((x)=> " "+x.name)}</span></p>
                <p class="">Rating: <span class={details_css}>{parseFloat(data.vote_average).toFixed(1)}</span></p>
                <p class="mb-4">Language: <span class={details_css}>{data.spoken_languages.map((language)=> " " + language.english_name)}</span></p>
                <!-- <p class="">Production: <span class={details_css}>{data.production_companies.map((production_company)=> " "+ production_company.name )}</span></p> -->
                <p class="">Runtime: <span class={details_css}>{data.runtime} minutes</span></p>
                <div class="">
                    <button on:click={()=> trailer_modal(data.trailers[0].key)} type="button" class="btn mt-2 variant-filled-primary">{`Trailer`}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1  w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg>                          
                    </button>
                </div>
            </div>
    
        </div>
        <div class="details hidden w-3/5 pl-6 md:flex md:flex-col h-fit my-auto">
            <p class="h2 font-bold">{data.title}</p>
            <p class="h4 mb-8 text-gray-600 dark:text-gray-400">{data.release_date.substring(0,4)}</p>
            <div class="font-bold text-xl">
                <p class="">Genre:<span class={details_css}>{data.genres.map((x)=> " "+x.name)}</span></p>
                <p class="">Rating: <span class={details_css}>{parseFloat(data.vote_average).toFixed(1)}</span></p>
                <p class="mb-4">Language: <span class={details_css}>{data.spoken_languages.map((language)=> " " + language.english_name)}</span></p>
                <p class="">Production: <span class={details_css}>{data.production_companies.map((production_company)=> " "+ production_company.name )}</span></p>
                <p class="">Runtime: <span class={details_css}>{data.runtime} minutes</span></p>
            </div>
             <div class="flex space-x-4 pt-4 w-full overflow-hidden">
                {#each data.trailers as trailer, index}
                    <button on:click={()=> trailer_modal(trailer.key)} type="button" class="btn variant-filled-primary">
                        {`Trailer ${index+1}`}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                          </svg>                            
                    </button>
                {/each}
            </div>
        </div>
        <!-- <div class="poster w-fit bg-white p-2 rounded-2xl absolute right-4">
            <img class="h-96" src={`https://www.themoviedb.org/t/p/original${data.poster_path}`} alt={data.title}>
        </div> -->

    </div>
    <!-- <div class="border-gray-300 border-opacity-10 border-b mt-6"></div> -->

    <Cast data={data.credits}/>
    <SimTitle similar_title_data={data} />


    <!-- <div class="w-full flex mt-10 bg-black mb-4">
        <div class="w-fit mx-auto">-The End-</div>
    </div> -->

    <!-- <div class="overflow-x-hidden">
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
     -->
</div>

