<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ shopCount }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <!-- <a href="/pages/index/main" class="home">去往首页</a> -->
    <navigator url="/pages/index/main" open-type="switchTab" class="home" hover-class="navigator-hover">去往首页</navigator>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'shopCount'
    ])
    // count () {
    //   return store.state.count
    // }
  },
  created () {
    // this._getList()
    var query = `{
                  capsule_findAll(where: "{topic: {$like:'%穿%'}}") {
                    id
                    topic
                  }
                }`
    this.$api.gqlRequest({ query })
      .then(res => {
        console.log('第一次请求', res)
      })
  },
  methods: {
    ...mapActions([
      'updateIncrmentCount',
      'updateDecrmentCount'
    ]),
    increment () {
      this.updateIncrmentCount()
    },
    decrement () {
      this.updateDecrmentCount()
    },
    async _getList () {
      let res = await this.$api.getSubject('2')
      console.log('-_getList-', res)
    }
  }
}

</script>
<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

</style>
