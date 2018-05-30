import Fly from 'flyio'

const http = new Fly()

http.config.baseURL = 'https://wx.xinjijiaoyu.com'
// http.config.timeout = 10 * 1000
// if (process.env.METHOD === 'proxy1') {
//   request.config.baseURL = 'http://localhost:3001/douban' // 本地代理1(100次/小时)
// } else if (process.env.METHOD === 'proxy2') {
//   request.config.baseURL = 'http://localhost:3002' // 本地代理2(100次/小时)
// } else if (process.env.METHOD === 'nginx') {
//   request.config.baseURL = 'https://movie.douban.gusaifei.com/v2/movie' // nginx 代理(100次/小时)
// }
// http.interceptors.request.use(null)
// http.interceptors.response.use(null, null)

http.interceptors.request.use((request) => {
  wx.showNavigationBarLoading()
  return request
})

http.interceptors.response.use(
  (response, promise) => {
    wx.hideNavigationBarLoading()
    if (response.status >= 200 && response.status <= 300) {
      let data = response.data
      if (!(data.hasOwnProperty('code'))) {
        return data.data
      } else if (data.code === 0) {
        return data.data
      } else if (data.code === 6004) {
        // window.authUser()
      } else {
        var error = new Error(data.msg)
        error.code = data.code
        error.msg = data.msg
        throw error
      }
    } else {
      // if (response.status === 401 && window && window.authUser) {
      //    window.authUser()
      // }
      // let error = new Error(response.statusText)
      // error.response = response
      // throw error
    }
  },
  (err, promise) => {
    wx.hideNavigationBarLoading()
    wx.showToast({
      title: err.message,
      icon: 'none'
    })
    return promise.resolve()
  }
)

export default {
  gqlRequest (data = null) {
    const url = '/db/graphql'
    return http.post(url, data)
  },
  getSubject (id) {
    return http.get('api/trainMaterial/getSubject?id=' + id)
  }
}
