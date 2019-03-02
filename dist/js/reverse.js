/**
<div id="app">
  <input type="text" v-model="msg" />
  {{gsm}}
</div>
**/

new Vue({
  el: "#app",
  data: {
    msg: "jxjxj sss"
  },
  computed:｛
    gsm: function(){
      let s = this.msg.split("").reverse().join("");
      return s;
    }
  ｝
})

