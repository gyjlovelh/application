<template>
    <div>
        <slot v-if="pending" name="pending"></slot>

        <slot v-if="data" :data="data"></slot>

        <slot v-if="error" name="error" :error="error"></slot>
    </div>
</template>

<script src="./logic/promise.component.js"></script>

<style lang="scss">
@import "./style/promise.component.scss";

</style>

