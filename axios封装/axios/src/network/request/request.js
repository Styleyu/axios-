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