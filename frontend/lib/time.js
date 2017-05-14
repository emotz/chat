export function timeoutFunction() {
    this.typing = false;
    this.$socket.emit('stopTyping');
}
export function timeNow() {
    let date = new Date();
    let hours = (date.getHours() < 10) ? ('0' + date.getHours()) : date.getHours();
    let minutes = (date.getMinutes() < 10) ? ('0' + date.getMinutes()) : date.getMinutes();
    let time = hours + ':' + minutes;
    return time;
}