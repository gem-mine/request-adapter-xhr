# request-adapter-xhr
An axios adapter for IE9/10

## install 
```
  npm i @gem-mine/request-adapter-xhr
```

## usage
作为 [axios](https://github.com/axios/axios) 的适配器使用。

``` js
  import axios from 'axios'
  import adapter from '@gem-mine/request-adapter-xhr'

  axios.get('/api', {
    adapter // 设置适配器
  })
```
