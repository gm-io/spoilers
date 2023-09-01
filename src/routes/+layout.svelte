<script>
    // using custom theme; loaded here ->
    import '../theme4.postcss';

    // This contains the bulk of Skeletons required styles:
    import '@skeletonlabs/skeleton/styles/skeleton.css';

    // Application's global stylesheet (sometimes labeled 'app.css')
    import "../app.postcss";
    import Header from '../components/Header.svelte';
</script>
<Header />
<slot></slot>