import chat_login from './chat-login.vue';
import chat_messages from './chat-messages.vue';
export default {
    data: function () {
        return {
            current:'login',
        };
    },
    components: {
        'chat-login':chat_login,
        'chat-messages':chat_messages,
    },
    methods: {
        login: function(username){
            this.current='messages';
            this.$socket.emit('addUser', username);
        },
    },
};