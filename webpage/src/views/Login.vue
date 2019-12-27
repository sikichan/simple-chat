<template>
  <div class="chat-login">
    <input type="text" v-model="username" placeholder="输入你的昵称" autofocus>
    <div class="enter-group" @click="goToChat">进入群聊</div>
    <!-- <router-link to="chat">进入群聊</router-link> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  created() {
    // const socket = new WebSocket('ws://127.0.0.1:3001')
    // console.log(socket)
    // socket.onopen = () => {
    //   console.log('连接服务器成功端口:3001；')
    //   socket.send('hello server')
    // }
    // socket.onerror = (event) => {
    //   console.log('onerror', event)
    // }
    // socket.onmessage = (data) => {
    //   console.log(data)
    // }
  },
  mounted() {
    const input = document.querySelector('input');
    input.focus();
  },
  methods: {
    goToChat() {
      localStorage.setItem('simple-chat-user', this.username)
      this.$router.push('/chat');
    },
  },
};
</script>
<style lang="scss" scoped>
$mainColor: #df5959;
$darkFontColor: #2c3e50;
  .chat-login {
    margin: 40px auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 340px;
    input {
      font-size: 36px;
      border: 1px solid #c0c0c0;
      box-sizing: border-box;
      padding: 23px 30px;
      width: 600px;
      border-radius:40px;
      outline: none;
    }
    @mixin div {
      box-sizing: border-box;
      font-size: 36px;
      border-radius:40px;
      width: 600px;
    }
    .enter-group {
      @include div;
      padding: 20px 30px;
      color: $mainColor;
      border: 1px solid $mainColor;
    }
  }
</style>
