<template>
    <div id="theme-provider" :umt-theme="theme">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'UmtThemeProvider',
        props: {
            theme: {
                required: false,
                type: String,
                default: 'light'
            }
        }
    }
</script>