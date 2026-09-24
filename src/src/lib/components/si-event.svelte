<script lang="ts">
	import type { EventEntry } from "$lib/models/event";

    let { entry } : { entry: EventEntry } = $props();
</script>

<style lang="scss">
    div {
        &.container {
            display: grid;
            grid-template-columns: 48px 1fr 56px;
            column-gap: var(--spacing--2);

            border-color: var(--border);
            border-width: var(--border__width--thin);
            border-style: solid;
            border-radius: var(--border__radius--md);

            overflow: hidden;

            height: 64px;
        }

        &.information {
            height: 100%;

            display: grid;
            grid-template-rows: auto auto;
            
            align-items: center;

            padding-top: var(--spacing--2);
            padding-bottom: var(--spacing--2);
        }

        &.indicator--unhealthy {
            background-color: var(--status__foreground--error);
        }

        &.indicator--degraded {
            background-color: var(--status__foreground--warning);
        }
    }

    i {
        &.navigation {
            font-size: 56px;

            vertical-align: middle;
        }
    }
</style>

<div class="container">
    <div class="indicator--{entry.status}"></div>
    <div class="information">
        <span class="body__medium">{entry.name} is {entry.status}</span>
        <span class="caption">5 minutes ago</span>
    </div>
    <i class="navigation ri-arrow-right-wide-line"></i>
</div>