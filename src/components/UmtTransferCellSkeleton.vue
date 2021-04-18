<template>
    <div class="umt-component umt-transfer-cell-skeleton">
        <a-row type="flex" align="middle">
            <a-col :span="3">
                <div class="team-image team-image-skt"></div>
            </a-col>

            <a-col :flex="1" class="transfer-info">
                <div class="info-skt">
                    <div class="square"></div>
                </div>
                <div class="info-to-skt">
                    <div class="square"></div>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import UmtThemeMixin from './../mixins/theme' 

    export default {
        name: 'UmtTransferCellSkeleton',
        mixins: [ UmtThemeMixin ],
    }
</script>