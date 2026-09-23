<script lang="ts">
	import Counter from "$lib/components/counter.svelte";
	import { CounterVariant } from "$lib/models/counter-variant";
	import type { Overview } from "$lib/models/overview";

	let { data }: { data: { overview: Overview } } = $props();
</script>
<div class="container">
	<div class="page__header">
		<div class="page__title">
			<span class="heading__h1">Overview</span>
			<span class="heading__h4 page__subtitle">Your services at a glance</span>
		</div>
		<div class="page__updated">
			<i class="ri-refresh-line page__subtitle"></i>
			<span class="body__small page__subtitle">Updated 2 minutes ago</span>
		</div>
	</div>

	<div class="counters">
	    <Counter label="Services" value={data.overview?.serviceCount ?? 0} variant={CounterVariant.Services}></Counter>
	    <Counter label="Healthy" value={data.overview?.healthyCount ?? 0} variant={CounterVariant.Healthy}></Counter>  
	    <Counter label="Degraded" value={data.overview?.degradedCount ?? 0} variant={CounterVariant.Degraded}></Counter>  
	    <Counter label="Unhealthy" value={data.overview?.unhealthyCount ?? 0} variant={CounterVariant.Unhealthy}></Counter>  
	</div>

	<div class="status">
	    <div class="status__header">
			<span class="status__title header__h4">Service Health</span>
			<span class="status__subtitle body__small">Current status accross all services</span>
		</div>

		<div class="status__bar" style="grid-template-columns: {data.overview?.healthyCount ?? 0}fr {data.overview?.degradedCount ?? 0}fr {data.overview?.unhealthyCount ?? 0}fr;">
		    <div class="status__bar--healthy"></div>
		    <div class="status__bar--degraded"></div>
		    <div class="status__bar--unhealthy"></div>						
		</div>
	</div>
</div>

<style lang="less">
	div {
		&.container {
			display: grid;
			grid-template-rows: auto 250px 1fr;

			grid-row-gap: var(--spacing--6);
		}

		&.counters {
		    display: grid;
			grid-template-columns: auto auto auto auto;
			column-gap: var(--spacing--4);
			
			height: 100%;
		}

		&.status {
		    display: grid;
			grid-template-rows: auto auto;
			grid-row-gap: var(--spacing--6);

			border-color: var(--border);
			border-width: var(--border__width--thin);
			border-style: solid;
			border-radius: var(--border__radius--lg);

			padding: var(--spacing--4);
		}

		&.status__header {
		    display: grid;
			grid-template-rows: auto auto;
		}

		&.status__bar {
		    display: grid;
		
		    height: 8px;
			width: 100%;

			border-radius: var(--border__radius--full);

			overflow: hidden;
		}
		
		&.status__bar--healthy {
		    height: 100%;

			background-color: var(--status__foreground--success);
		}
		
		&.status__bar--degraded {
		    height: 100%;

			background-color: var(--status__foreground--warning);
		}
		
		&.status__bar--unhealthy {
		    height: 100%;

			background-color: var(--status__foreground--error);
		}
	}

	span {
	    &.status__title {
			color: var(--foreground);
		}

		&.status__subtitle {
		    color: var(--foreground--secondary);
		}
	}
</style>
