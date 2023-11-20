<template>
    <ManagementView>
        <template #title>
            매장 추가
        </template>

        <template #form>
            <ManagementInput :title="'매장 명'" :placeholder="'운영하고 계신 매장 이름을 입력해 주세요.'"></ManagementInput>
            <ManagementInput :title="'전화 번호'" :placeholder="'해당 매장의 전화번호를 입력해 주세요.'"></ManagementInput>
            <ManagementInput :title="'주소'" :placeholder="'해당 매당의 주소를 입럭해 주세요.'"></ManagementInput>
            <ManagementInput :title="'사장님 성함'" :placeholder="'사장님 성함을 입력해 주세요.'"></ManagementInput>
            <ManagementInput :title="'테이블 개수'" :placeholder="'매장 내의 테이블 개수를 입력해 주세요.'"></ManagementInput>
        </template>

        <template #btnArea>
            <ManagementButton :btnColor="'white'">취소</ManagementButton>
            <ManagementButton :btnColor="'blue'">매장 등록</ManagementButton>
        </template>
    </ManagementView>
</template>

<script setup lang="ts">
import ManagementView from '@/components/management/ManagementView.vue';
import ManagementInput from '@/components/management/ManagementInput.vue';
import ManagementButton from '@/components/management/ManagementButton.vue';

</script>

<style scoped>
</style>