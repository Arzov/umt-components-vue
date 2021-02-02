<template>
    <div class="section-card">
        <div class="section-card-title">
            <h5 class="title">{{ title }}</h5>
            <span class="tag">{{ tag }}</span>
        </div>

        <div class="section-card-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'tag']
    }
</script>

<style>
.section-card {
    margin: 20px;
    border: 1px solid #AC9FF9;
    border-radius: 3px;
    background-color: white;
}

.section-card-content {
    padding: 10px;
}

.section-card-title {
    padding: 5px 10px;
    border-bottom: 1px solid #AC9FF9;
}

.section-card-title .title {
    font-family: 'PublicSans';
    font-weight: 900;
    font-size: 20px;
    margin: 0;
    margin-bottom: -5px;
}

.section-card-title .tag {
    font-family: 'PublicSans';
    font-weight: 400;
    font-size: 14px;
    font-style: italic;
}
</style>