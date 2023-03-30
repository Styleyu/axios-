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
