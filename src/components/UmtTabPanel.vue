<template>
    <div class="umt-component umt-tab-panel">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'UmtTabPanel',
        props: {
            tab: {
                required: true,
                type: String
            },

            label: {
                required: true,
                type: String
            }
        }
    }
</script>