<template>

    <div class="section-card" :style="theme === 'dark' ? `background-color: #161C27; border: 1px solid #0CECF2;` : `background-color: #F1F3FF; border: 1px solid #AC9FF9;`">

        <div class="section-card-title">
            <h5 class="title" :style="theme === 'dark' ? `color: #FFFFFF;` : `color: #161C27;`">{{ title }}</h5>
        </div>

        <div class="section-card-content">
            <slot></slot>
        </div>

    </div>

</template>


<script>
    export default {
        props: ['title', 'theme']
    }
</script>


<style>
.section-card {
    margin: 20px;
    border: 1px solid #AC9FF9;
    border-radius: 3px;
    background-color: #F1F3FF;
}

.section-card-content {
    padding: 10px;
}

.section-card-title {
    padding: 5px 10px;
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