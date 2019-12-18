import axios from 'axios'

export default function ajax(url,data={},type='GET') {
    let fullUrl='http://127.0.0.1:5000'+url;
    if(type==='GET'){
        return axios.get(fullUrl,{
            params:data
        })
    }else{
        return axios.post(fullUrl,data)
    }
}