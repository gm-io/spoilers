<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<div class="flex relative w-full lg:w-9/12 2xl:w-10/12 h-fit mx-auto my-5 2xl:my-8">
    <div class="absolute left-0 h-full flex items-center pl-1 pt-1">
        <div class="text-xs sm:text-base 2xl:text-lg">Spoilers.IO</div>
    </div>
    <div class="absolute right-0 h-full flex items-center pr-1 pt-1">
        <LightSwitch />
    </div>
    <div class="w-4/6 2xl:w-4/6 pl-2 2xl:pl-0 mx-auto h-full">
        <input type="search" id="default-search" class="block rounded-2xl w-full p-4 py-2 pl-4 md:pl-10 text-sm text-gray-900 rounded-4xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="search ..." required>
    </div>
</div>