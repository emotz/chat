<template>
  <div>
    <ul>
      <li v-for="message in msgs"><div><span>{{ message.username }} {{message.time}}</span><p>{{ message.msg }}</p></div></li>
    </ul>
    <input v-model="msg" v-on:keyup.enter="send" v-on:keyup="typingEmit" placeholder="Пиши сюда">
    <p id='typing'>{{renderTypingUsers}}</p>
  </div>
</template>

<script src="./chat-messages.js"></script>

<style>

input {
    vertical-align: bottom;
    font-size: 18px;
    width: 738px;
    height: 28px;
    border-left: none;
    text-align: left
}
ul {
  padding: 0;
  height: 441px;
  overflow-y: scroll;
}
li {
  margin: 15px 6px;
  width: 85%;
  border-radius: 1%;
  list-style-type: none;
  text-align: left;
  background-color: #f9ddff;
  font-size: 18px;
  padding: 6px;
}
div span{
  font-weight: bold;
  font-size: 14px;
}
p {margin: 0;
}
#typing {
    font-size: 13px;
    height: 18px;
    line-height: 18px;
    text-align: left;
    padding-left: 6px;
    background-color: #6c0aab;
    color: white;
}
</style>
