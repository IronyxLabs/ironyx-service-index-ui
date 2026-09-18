<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/state";

    let { icon, label, path }: { icon: string, label: string, path:  `/${string}` } = $props();

    function isActive(): boolean {
      if (path === '/') return page.url.pathname === path;
      
      return page.url.pathname.startsWith(path);
    }
</script>

<style lang="scss">
    div.container {
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-gap: var(--spacing--2);

        align-items: center;

        cursor: pointer;

        border-radius: var(--border__radius--md);

        height: 40px;

        padding-left: var(--spacing--3);
        padding-right: var(--spacing--3);
        
        &[active=true] {
            background-color: var(--action__primary--active);
            color: var(--foreground--inverse);
        }
    }

    i.icon {
        width: 24px;
        height: 24px;
    }
</style>

<div class="container" active="{isActive()}">
    <i class="{icon} icon"></i>
    <span class="heading--h3" onclick={() => goto(path)}>{label}</span>
</div>