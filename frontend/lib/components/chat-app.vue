<template>
    <chat-login v-if="current==='login'" v-on:login="login"></chat-login>
    <chat-messages v-else-if="current='messages'"></chat-messages>
</template>

<script src="./chat-app.js"></script>