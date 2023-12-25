<script>
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    export let data;
    let person = data.data
    let value = 0
</script>


<div class="w-full px-0 md:px-4 lg:px-0 lg:w-9/12 2xl:w-9/12 mx-auto mt-6 md:mt-10 2xl:mt-12 ">
    <div class="bg-black w-full h-[400px]">
        <div class="pl-10 h-full w-fit flex items-center">
            <img class=" h-72 rounded  border-white" src={`https://www.themoviedb.org/t/p/original${person.profile_path}`} alt={person.name}>
        </div>
    </div>
</div>

<div class="overflow-x-hidden">
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>