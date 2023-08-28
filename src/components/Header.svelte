<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<div class="flex relative w-9/12 h-fit mx-auto my-5">
    <div class="absolute left-0 h-full flex items-center pl-1 pt-1">
        <div class="">Spoilers.IO</div>
    </div>
    <div class="absolute right-0 h-full flex items-center pr-1 pt-1">
        <LightSwitch />
    </div>
    <div class="w-4/6 mx-auto h-full">
        <input type="search" id="default-search" class="block rounded-2xl w-full p-4 py-2 pl-10 text-sm text-gray-900 rounded-4xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="search ..." required>
    </div>
</div>