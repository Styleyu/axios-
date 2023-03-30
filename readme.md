一、概念
     ajax是一种基于promise对ajax的一种封装
     
二、axiso的基本使用
     <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
        axios({
            url:'https://jsonplaceholder.typicode.com/todos/1'
        }).then(res=>{
             console.log(res);
        })
    </script>
    默认使用的是get方式进行请求

三、axiso 带参的get请求和post请求

四、axios在vue中的模块封装
方式一：

封装方

import axios from 'axios'
export function request(config,success,fail){
    axios({
        url:config,
    }).then(res=>{
        success(res);
    }).catch(err=>{
        fail(err);
    })
}

调用方

import {request} from './network/request/request'
request('https://jsonplaceholder.typicode.com/posts',res=>{
     console.log(res)
},err=>{
     console.log(err)
})
