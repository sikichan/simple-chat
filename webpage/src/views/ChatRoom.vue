<template>
  <div class="chat-chatroom">
    <div class="nav">
      <span @click="back">&lt;</span>
      <span>Simple Chat</span>
    </div>
    <div class="content">
      <div v-for="(m, i) in messages" :key="i">
        <Bubble class="bubble" :message="m"></Bubble>
      </div>
    </div>
     <div class="bottom">
        <input type="text" v-model="content" autofocus placeholder="输入内容回车发送">
        <div @click="send()" @mousedown="send()">发送</div>
      </div>
  </div>
</template>

<script>
import Bubble from '../components/Bubble.vue';

export default {
  data() {
    return {
      socket: null,
      content: '',
      messages: [],
    };
  },
  created() {
    this.getSocket()
  },
  mounted() {
    const input = document.querySelector('input');
    const bottom = document.querySelector('.bottom')
    input.addEventListener('focus', () => {
      bottom.style.position = 'absolute';
      window.scrollTo(0, document.body.scrollHeight)
    })
    input.addEventListener('blur', () => {
      bottom.style.position = 'fixed'
      window.scrollTo(0, document.body.clientHeight)
    })
    input.focus();
  },
  watch: {
  },
  methods: {
    getSocket() {
      const socket = new WebSocket('ws://192.168.1.103:3001')
      console.log(socket)
      socket.onopen = () => {
        console.log('连接服务器成功端口:3001；')
      }
      socket.onerror = (event) => {
        console.log('onerror', event)
      }
      socket.onclose = () => {
        console.log('socket 连接断开，正在尝试重新建立连接')
        this.getSocket()
      }
      socket.onmessage = (data) => {
        const other = JSON.parse(data.data)
        this.$set(this.messages, this.messages.length, other)
      }
      this.socket = socket
    },
    back() {
      this.$router.go(-1);
    },
    send() {
      if (this.content.trim() === '') return
      const mesg = {
        msg: this.content,
        name: localStorage.getItem('simple-chat-user') || '',
        img: '',
      }
      this.socket.send(JSON.stringify(mesg))
      this.content = ''
    },
  },
  components: {
    /*eslint-disable*/
    Bubble,
  },
};
</script>
<style lang="scss" scpoed>
$mainColor: #df5959;
  .chat-chatroom {
    width: 100%;
    .nav {
      position: fixed;
      z-index: 100;
      top: 0;
      background-color: $mainColor;
      width: 100%;
      border: 1px solid $mainColor;
      font-size: 40px;
      height: 100px;
      line-height: 100px;
      color: #fff;
      span:first-child {
        position: absolute;
        left: 0;
        width: 60px;
        font-weight: 500;
        cursor: pointer;
      }
      span:last-child {
        font-size: 40px;
        cursor: pointer;
      }
    }
    .content {
      overflow-y: scroll;
      min-height: 100%;
      z-index: 1;
      position: relative;
      top: 100px;
      padding-bottom: 200px;
      // border: 2px solid #000;
      // &::after {
      //   content: '';
      //   display: block;
      //   width: 100%;
      //   height: 140px;
      //   background: #444444;
      //   background: transparent;
      // }
    }
    .bottom {
      position: fixed;
      z-index: 100;
      bottom: 0;
      display: flex;
      width: 100%;
      padding: 8px 0 8px 8px;
      height: 90px;
      height: calc(90px + constant(safe-area-inset-bottom));
      height: calc(90px + env(safe-area-inset-bottom));
      background: #efeeef;
      input {
        font-size: 32px;
        box-sizing: border-box;
        -webkit-appearance: none;
        width: 620px;
        height: 90px;
        // max-height: 386px;
        // margin: 0 0 auto 0px;
        padding: 16px;
        color: #888888;
      }
      div {
        color: #444444;
        cursor:pointer;
        font-weight: 500;
        background-color: #efeeef;
        font-size: 32px;
        line-height: 86px;
        height: 86px;
        flex:1;
      }
    }
  }
</style>
