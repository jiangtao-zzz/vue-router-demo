# hello

demo中实现从首页到list页面，list页面需要重新发送ajax请求获取数据，而从detail页面回退到list页面，不必发送ajax请求，使用缓存数据。
第一次进入keep-alive组件时，其生命周期执行顺序：beforeRouteEnter --> created --> mounted --> activated --> deactivated
非首次进入时，其生命周期执行顺序：beforeRouteEnter -->activated --> deactivated
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
