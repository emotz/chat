<template>
  <div class="login">
    <p>Представься!</p>
    <input type="text" v-on:keyup.enter="login" size="14" v-model="username" placeholder="тут">
  </div>
</template>

<script src="./chat-login.js"></script>

<style>
.login p{
  margin:200px 0 25px;
}
</style>