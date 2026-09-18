<style lang="less">
    div {
        &.container {
            display: grid;
            grid-template-rows: auto 1fr;
        }

        &.header {
            display: grid;
            grid-template-columns: 1fr auto;
        }

        &.title {
            display: grid;
            grid-template-rows: auto auto;
            grid-gap: var(--spacing--1);
        }

        &.status {
            display: grid;
            grid-template-columns: auto auto;
            grid-gap: var(--spacing--1);

            align-items: center;
        }
    }

    span {
        &.subtitle {
            color: var(--foreground--secondary);
        }

        &.refresh {
            color: var(--foreground--secondary);
        }
    }

    i {
        width: 24px;
        height: 24px;

        color: var(--foreground--secondary);
    }
</style>

<div class="container">
    <div class="header">
        <div class="title">
            <span class="heading__h1">Overview</span>
            <span class="heading__h4 subtitle">Your services at a glance</span>                    
        </div>
        <div class="status">
            <i class="ri-refresh-line"></i>
            <span class="body__small refresh">Updated 2 minutes ago</span>
        </div>
    </div>
</div>