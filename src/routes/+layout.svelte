<script>
    // using custom theme; loaded here ->
    import '../theme4.postcss';

    import { Modal, modalStore } from '@skeletonlabs/skeleton';
    modalStore.clear();

    
    // This contains the bulk of Skeletons required styles:
    import '@skeletonlabs/skeleton/styles/skeleton.css';

    // Application's global stylesheet (sometimes labeled 'app.css')
    import "../app.postcss";
    import Header from '../components/Header.svelte';
    import YoutubeLink from '../components/modals/YoutubeLink.svelte';

    const modalComponentRegistry = {
        modalComponentOne: {
            // Pass a reference to your custom component
            ref: YoutubeLink,
            // Add the component properties as key/value pairs
            props: { background: 'bg-red-500' },
            // Provide a template literal for the default component slot
            slot: '<p>Skeleton</p>'
        },
        modalComponentTwo: {
            ref: YoutubeLink,
        },
    };
                                
</script>
<Header />
<Modal components={modalComponentRegistry} regionBackdrop="backdrop-blur-md bg-surface-900/40"/>
<slot>
</slot>