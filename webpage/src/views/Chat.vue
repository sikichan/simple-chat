<template>
  <div class="chat-chat">
    <div class="nav">
      <span @click="back">&lt;</span>
      <span>群聊</span>
    </div>
    <div class="content">
    </div>
    <div class="bottom">
      <input type="text" v-model="content" autofocus placeholder="输入内容回车发送">
      <div>发送</div>
    </div>
  </div>
</template>
<script>
// import Bubble from '../components/Bubble.vue';

export default {
  data() {
    return {
      content: '',
    };
  },
  mounted() {
    const input = document.querySelector('input');
    input.focus();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  components: {
    // Bubble,
  },
};
</script>
<style lang="scss" scoped>
$mainColor: #df5959;
  .chat-chat {
    .nav {
      position: fixed;
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
        font-weight: 800;
        cursor: pointer;
      }
      span:last-child {
        font-size: 40px;
        cursor: pointer;
      }
    }
    .content {
      border: 3px solid black;
      margin-top:100px;
      height: 1800px;
      width: 100%;
      font-size: 156px;
      overflow-y: scroll;
      position: absolute;
    }
    .bottom {
      position: fixed;
      bottom: 0;
      float: left;
      display: flex;
      width: 100%;
      input {
        font-size: 36px;
        border: 1px solid #e0e0e0;
        box-sizing: border-box;
        width: 620px;
        height: 86px;
        outline: none;
        padding: 6px 14px;
        color: #888888;
      }
      div {
        color: #fff;
        background-color: $mainColor;
        font-size: 32px;
        line-height: 86px;
        height: 86px;
        flex:1;
      }
    }
  }
</style>
