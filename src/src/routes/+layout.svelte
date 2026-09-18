<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import NavItem from '$lib/components/nav-item.svelte';
	import '@ironyxlabs/design-system/styles';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<style lang="scss">
    div {
        height: 100%;
        width: 100%;
        
        &.container {
            display: grid;
            grid-template-columns: 240px 1fr;
        }
    
        &.left {
            border-right-color: var(--border);
            border-right-width: var(--border__width--thin);
            border-right-style: solid;
            
            padding: var(--spacing--2);   
   
            display: grid;
            grid-template-rows: auto 1fr;
            row-gap: var(--spacing--7);
        }

        &.right {
            display: grid;
            grid-template-rows: 64px 1fr;
        }
        
        &.header {
            border-bottom-color: var(--border);
            border-bottom-width: var(--border__width--thin);
            border-bottom-style: solid;
        }

        &.content {
            padding: var(--spacing--8);
        }

        &.menu {
            display: grid;
            grid-auto-rows: max-content;
            grid-gap: var(--spacing--2);
        }
    }
</style>

<div class="container">    
    <div class="left">        
        <span class="heading__h1">Ironyx</span>

        <div class="menu">
            <NavItem icon="ri-layout-column-line" label="Overview" path="/"></NavItem>
            <NavItem icon="ri-keyboard-box-line" label="Services" path="/services"></NavItem>
        </div>
    </div>

    <div class="right">   
        <div class="header">
        </div>

        <div class="content">
            {@render children()}            
        </div>
    </div>
</div>
