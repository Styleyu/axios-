import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// 普通的引用axios

// import axios from 'axios'

// axios({
//     url:'https://jsonplaceholder.typicode.com/posts',
// }).then(res=>{
//         console.log(res);
// })

import {request} from './network/request/request'
request('https://jsonplaceholder.typicode.com/posts',res=>{
     console.log(res)
},err=>{
     console.log(err)
})

