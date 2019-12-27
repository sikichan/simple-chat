<template>
  <div class="chat-bubble">
    <div :class="align">
      <div class="user">
        <img :src="message.img">
        <span>{{message.name}}</span>
      </div>
      <div class="bub">
        <div></div>
        <div>{{message.msg}}</div>
      </div>
    </div>
    <!-- <div :class="align">
      <img src="../assets/logo.png">
      <div class="bub">
        <div></div>
        <div>见覅卫计委I网欧冠</div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  props: {
    align: { type: String, default: 'right' },
    message: { type: Object },
  },
};
</script>
<style lang="scss" scoped>
$xPoint: 20px;
$yPoint: 10px;
$maxWidth: 380px;
$minHight: 28px;
$mainColor: #df5959;
  .chat-bubble {
    font-size: $minHight;
    padding:26px;
    @mixin img {
      border-radius: 50%;
      width: 86px;
      height: 86px;
      border: 1px solid #efefef;
    }
    .left {
      display: flex;
      .user {
        display: flex;
        flex-direction: column;
        img {
          @include img;
        }
      }
      .bub {
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        div:first-child {
          width: 0;
          height: 0;
          margin-top: 20px;
          border-right: $xPoint solid $mainColor;
          border-left: $xPoint solid transparent;
          border-top: $yPoint solid transparent;
          border-bottom: $xPoint solid transparent;
        }
        div:last-child {
          text-align: left;
          color: #fff;
          padding: 14px 20px;
          max-width: $maxWidth;
          align-self: flex-start;
          min-height: $minHight;
          background-color: $mainColor;
          border-radius: 8px;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: row-reverse;
      .user {
        display: flex;
        flex-direction: column;
        img {
          @include img;
        }
      }
      .bub {
        display: flex;
        flex-direction: row-reverse;
        margin-top: 10px;
        div:first-child {
          width: 0;
          height: 0;
          margin-top: 20px;
          border-right: $xPoint solid transparent;
          border-left: $xPoint solid $mainColor;
          border-top: $yPoint solid transparent;
          border-bottom: $xPoint solid transparent;
        }
        div:last-child {
          text-align: left;
          color: $mainColor;
          border: 1px solid $mainColor;
          padding: 14px 20px;
          max-width: $maxWidth;
          min-height: $minHight;
          background-color: #fff;
          border-radius: 8px;
          align-self: flex-start;
        }
      }
    }
  }
</style>
