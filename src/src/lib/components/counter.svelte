<script lang="ts">
	import type { CounterVariant } from "$lib/models/counter-variant";
	import { loaderService } from "$lib/services/loader.service.svelte";
	import Spinner from "./spinner.svelte";

    let { label, value, variant }: { label: string, value: number, variant: CounterVariant } = $props();
</script>

<style lang="scss">
    div {
        &.container {
            display: grid;
            grid-template-rows: auto 1fr;

            border-color: var(--border);
            border-width: var(--border__width--thin);
            border-style: solid;
            border-radius: var(--border__radius--lg);

            padding: var(--spacing--4);
        }
    }

    span {
        &.label {
            color: var(--foreground--secondary);
        }
        
        &.value {
            align-self: center;
            justify-self: center;
        }

        &.value--services {
            color: var(--foreground--primary);
        }
        
        &.value--healthy {
            color: var(--status__foreground--success);
        }
        
        &.value--degraded {
            color: var(--status__foreground--warning);
        }
        
        &.value--unhealthy {
            color: var(--status__foreground--error);
        }
    }
</style>

<div class="container">
    <span class="label__large label">{label}</span>
    {#if loaderService.loading}
        <Spinner></Spinner>
    {:else}
        <span class="display__large value value--{variant}">{value}</span>
    {/if}
</div>