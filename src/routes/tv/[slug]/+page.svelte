<script>
    export let data;
    let details_css ='dark:text-white text-gray-700 font-normal'

</script>

<div class="w-full px-0 md:px-4 lg:px-0 lg:w-9/12 2xl:w-9/12 mx-auto mt-6 md:mt-10 2xl:mt-12 bg-red-500">
    <div class="flex relative flex-col md:flex-row rounded-xl py-7 2xl:py-14">
        <div class="absolute inset-0 overflow-hidden -z-10 h-full w-full md:bg-none">
            <div class="relative h-full w-full p-1 2xl:p-0 ">
                {#if data.backdrop_path }
                    <img class="rounded object-cover h-full w-full blur-md" alt="The project logo" src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} />
                    <div class="absolute inset-0 bg-white bg-opacity-60 dark:bg-black md:dark:opacity-80 dark:opacity-50 "></div>
                {/if}
            </div>
        </div>
        <div class="mobile-details flex md:hidden flex-col pl-2 ">
            <p class="h3 font-bold">{data.name}</p>
        </div>
        <div class="flex">
            <div class="poster w-1/2 md:w-fit h-fit md:bg-white p-2 rounded-2xl ml-0 md:ml-4 2xl:ml-16">
                <img class="h-64 md:h-96 border border-white rounded md:rounded-none" src={`https://www.themoviedb.org/t/p/original${data.poster_path}`} alt={data.name}>
            </div>
            <div class="flex flex-col space-y-2 md:hidden w-1/2 py-2">
                <!-- <div class="">
                    <button on:click={()=> trailer_modal(data.trailers[0].key)} type="button" class="btn mt-2 variant-filled-primary">{`Trailer`}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1  w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg>                          
                    </button>
                </div> -->
            </div>
    
        </div>
        <div class="details hidden w-3/5 pl-6 md:flex md:flex-col h-fit my-auto bg-green-600">
            <div class="mb-4">
                <p class="h2 font-bold">{data.name}</p>
                <p class="">{data.genres.map((x) => " " + x.name)}</p>
            </div>
            <div class="details">
                <p class="">First Air: {data.first_air_date.slice(0,4)}</p>
                <p>End Date: __.__</p>
                <p class="">Status: {data.status}</p>
                <p class="">Runtime: {data.episode_run_time[0]} minutes</p>




                <p class="">Seasons: {data.seasons.length}</p>
                <!-- <p class="">Language: {[...data.languages]}</p> -->
                <!-- <p class="">Type: {data.type}</p> -->
                <p class="">Networks:{data.networks.map((x) => " " + x.name)}</p>
                <p class="">Rating: {parseFloat(data.vote_average).toFixed(1)}</p>

            </div>
            <!-- <div class="">
                <p>Start date: {data.first_air_date.slice(0,4)}</p>
                <p>End Date: __.__</p>
                <p>Status: {data.in_production?"Ongoing":"Ended"}</p>
                <p>Run time: {data.episode_run_time[0]} mins</p>
                <p>Episodes: {data.number_of_episodes} episodes</p>
                <p>Genre: {data.genres.map(x => " "+x.name)} </p>

            </div> -->
            <!-- <div class="font-bold text-xl">
                <p class="">Genre:<span class={details_css}>{data.genres.map((x)=> " "+x.name)}</span></p>
                <p class="">Rating: <span class={details_css}>{parseFloat(data.vote_average).toFixed(1)}</span></p>
                <p class="mb-4">Language: <span class={details_css}>{data.spoken_languages.map((language)=> " " + language.english_name)}</span></p>
                <p class="">Production: <span class={details_css}>{data.production_companies.map((production_company)=> " "+ production_company.name )}</span></p>
                <p class="">Runtime: <span class={details_css}>{data.runtime} minutes</span></p>
            </div> -->
        </div>

    </div>
</div>





<!-- _______________________________________ -->

<div class="overflow-x-hidden">
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>

<!-- _______________________________________ -->

<div class="w-fit mx-auto">
    <div class="flex space-x-10">
        <div class="details">
            <p class="">Title: {data.name}</p>
            <p class="">Rating: {parseFloat(data.vote_average).toFixed(1)}</p>
            <p class="">Seasons: {data.seasons.length}</p>
            <p class="">Genre:{data.genres.map((x) => " " + x.name)}</p>
            <p class="">Year: {data.first_air_date.substring(0, 4)}</p>
            <p class="">Start date: {data.first_air_date}</p>
            <p class="">Language: {[...data.languages]}</p>
            <p class="">Type: {data.type}</p>
            <p class="">Networks:{data.networks.map((x) => " " + x.name)}</p>
            <p class="">Status: {data.status}</p>
            <p class="">Runtime: {data.episode_run_time[0]} minutes</p>
        </div>
        <div class="poster">
            <img class="h-44" src={`https://www.themoviedb.org/t/p/original${data.poster_path}`} alt="">
        </div>
    </div>
</div>

<!-- <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div> -->