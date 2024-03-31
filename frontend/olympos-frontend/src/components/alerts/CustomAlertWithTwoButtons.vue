<script setup lang="ts">
import type { NotivueItem } from 'notivue'

export interface CustomAlertWithTwoButtonsProps {
    icon: string,
    iconColor: string,
    btn1: string,
    btn2: string,
    btn1Function: Function,
    btn2Function: Function,
}

defineProps<{
    item: NotivueItem<CustomAlertWithTwoButtonsProps>
}>();
</script>

<template>
    <div class="Wrapper" :data-notification="item.type">
        <i class="icon" :class="item.props.icon" :style="{color: item.props.iconColor}"></i>

        <div class="Content">
            <!-- 👇 Enable screen readers to announce the message
            adding role + aria-live on the text container -->
            <p :role="item.ariaRole" :aria-live="item.ariaLive" class="title">
                {{ item.title }}
            </p>
            <p :role="item.ariaRole" :aria-live="item.ariaLive" class="message" v-html="item.message">
            </p>

            <nav class="buttons">
                <button class="btn_deny" @click="item.props.btn1Function">{{ item.props.btn1 }}</button>
                <button class="btn_confirm" @click="item.props.btn2Function">{{ item.props.btn2 }}</button>
            </nav>
        </div>

    </div>
</template>

<style scoped>
.Wrapper {
    background-color: #fff;
    border-radius: 10px;
    align-items: flex-start;
    gap: 15px;
    width: 520px;
    max-width: 100%;
    padding: 10px;
    display: flex;
    box-shadow: 0 0 10px #0003;
}
.icon {
    font-size: 23px;
}
.Content {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    display: flex;
}
.Content .title {
    font-weight: bold;
}
.Content .message {
    padding-right: 21px;
}
.buttons {
    justify-content: flex-end;
    gap: 10px;
    width: 100%;
    display: flex;
}
button {
    border: 2px solid var(--alert-blue);
    background-color: var(--alert-blue);
    -webkit-tap-highlight-color: #0000;
    color: #fff;
    cursor: pointer;
    border-radius: 7px;
    padding: .3em 1em;
    font-size: .9rem;
    font-weight: 700;
    transition: all .1s ease-out;
}
.btn_deny {
    color: var(--alert-blue);
    background-color: #fff;
}
.btn_deny:hover {
    background-color: var(--alert-blue);
    color: #fff;
    opacity: 1;
}
.btn_confirm:hover {
    opacity: .5;
}

[data-notification='success'] {
    color: green;
}

[data-notification='error'] {
    color: red;
}
</style>