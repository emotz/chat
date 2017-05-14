export default {
    data: function () {
        return {
            username: '',
        };
    },
    methods: {
        login: function(){
            this.$emit('login', this.username);
        },
    },
};