import {timeoutFunction, timeNow} from '../time.js';
export default {
    data: function () {
        return {
            msgs: [],
            msg: '',
            typingUsers: [],
            typing: false,
            timeout: null,
        };
    },
    sockets: {
        newMessage: function (data) {
            this.msgs.push({ username: data.username, msg: data.msg, time: data.time });
        },
        typing: function (username) {
            this.typingUsers.unshift(username);
        },
        stopTyping: function (username) {
            for (let i in this.typingUsers) {
                if (this.typingUsers[i] === username)
                    this.typingUsers.splice(i, 1);
            }
        },
    },
    computed: {
        renderTypingUsers: function () {
            if (this.typingUsers.length === 0) return null;
            if (this.typingUsers.length === 1) return this.typingUsers + ' дрочит';
            return this.typingUsers.join(', ') + ' дрочат';
        },
    },
    methods: {
        send: function () {
            if (this.msg === '') return;
            this.$socket.emit('newMessage', { msg: this.msg, time: timeNow() });
            this.msg = '';
        },
        typingEmit: function (event) {
            if (event.key === 'Enter') return;
            if (this.typing === false) {
                this.typing = true;
                this.$socket.emit('typing');
                this.timeout = setTimeout(timeoutFunction.bind(this), 500);
            } else {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(timeoutFunction.bind(this), 500);
            }
        },
    },
};
