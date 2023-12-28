<script>
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    export let data;
    let person = data.data
    let value = 0
</script>




<!-- <div class="w-full px-0 md:px-4 lg:px-0 lg:w-9/12 2xl:w-9/12 mx-auto mt-6 md:mt-10 2xl:mt-12 ">
    <div class="bg-black bg-opacity-70 w-full h-[400px] flex">
        <div class="pl-10 h-full w-1/3 flex items-center">
            <div class=" w-fit h-fit p-1 bg- rounded-lg bg-opacity-60">
                <img class=" h-72  border-white" src={`https://www.themoviedb.org/t/p/original${person.profile_path}`} alt={person.name}>
            </div>
        </div>
        <div class=" w-2/3 ">
            <div class="">
                <p class="h3 font-bold">{person.name}</p>
                <div class="text-sm">{(person.gender==1 & person.known_for_department=="Acting")?"Actress":"Actor"}</div>
            </div>

        </div>
    </div>
</div>

<div class="overflow-x-hidden">
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div> -->

<div class="w-full px-0 md:px-4 lg:px-0 lg:w-9/12 2xl:w-9/12 mx-auto mt-6 md:mt-10 2xl:mt-12">
    <div class="flex relative flex-col md:flex-row rounded-xl py-7 2xl:py-14 ">
        <div class="absolute inset-0 overflow-hidden -z-10 h-full w-full md:bg-none">
            <div class="relative h-full w-full p-1 2xl:p-0 ">
                {#if true }
                    <img class="rounded object-cover h-full w-full blur-md" alt="The project logo" src={`https://image.tmdb.org/t/p/original${person.appears_in.cast[0].backdrop_path}`} />
                    <div class="absolute inset-0 bg-white bg-opacity-60 dark:bg-black md:dark:opacity-80 dark:opacity-50 "></div>
                {/if}
            </div>
        </div>

        <div class="flex">
            <div class="poster w-1/3 md:w-fit h-fit md:bg-white p-2 rounded-2xl ml-16 md:ml-4 2xl:ml-16">
                <img class="h-64 md:h-72 border border-white rounded md:rounded-none" src={`https://www.themoviedb.org/t/p/original${person.profile_path}`} alt={person.name}>
            </div>
            <div class="mobile-details flex md:hidden flex-col pl-2 ">
                <div class=" my-auto">
                    <p class="h3 font-bold">{person.name}</p>
                    {#if person.known_for_department == "Directing"}
                        <div class="">Director</div>
                    {:else}
                        <div class="">{person.gender!=1?"Actor":"Actress"}</div>
                    {/if}
                </div>

            </div>
        </div>
        <div class="details hidden w-3/5 md:w-4/5   pl-6 md:flex md:flex-col h-fit my-auto">
            <p class="h2 font-bold">{person.name}</p>
            {#if person.known_for_department == "Directing"}
                <div class="">Director</div>
            {:else}
                <div class="">{person.gender!=1?"Actor":"Actress"}</div>
            {/if}
            <div class="pr-0 md:pr-6">
                <p class="text-xs xl:text-sm text-justify">{person.biography}</p>
            </div>
        </div>
    </div>
</div>

<div class="overflow-x-hidden">
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div> -->