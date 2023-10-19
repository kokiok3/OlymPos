<template>
    <div class="store_content">
        <ImageSlider />
        <div class="store_wrapper">
            <ContentView>
                <template #title>
                    매장 관리
                </template>

                <template #buttonArea>
                    <ButtonRectangle>매장 추가</ButtonRectangle>
                </template>

                <template #table>
                    ContentTable
                </template>
            </ContentView>
        </div>
    </div>
</template>

<script setup lang="ts">
import ImageSlider from '@/views/stores/ImageSlider.vue';
import ContentView from '@/components/contents/ContentView.vue';
import ButtonRectangle from '@/components/buttons/ButtonRectangle.vue';

</script>

<style scoped>
.image_slider {
    margin: -50px;
    margin-bottom: 0;
}
.store_wrapper {
    margin-top: 50px;
}
</style>