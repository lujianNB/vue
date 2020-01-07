import axios from 'axios'
const instance = axios.create({ // 创建一个axios实例
    // baseURL, 
    timeout: 5000,

});

// 默认表单提交
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const request = ({
    url,
    method = "GET",
    params,
    data,
    withCredentials = false, // default
    headers
}) => {
    return new Promise((resolved, rejected) => {
        // 区别两个不同的数据请求就行  get  post 
        switch (method.toUpperCase()) {
            case 'POST':
                var real_data = {}
                if (headers['Content-Type'] == 'application/x-www-form-urlencoded') {
                    // 表单提交
                    const p = new URLSearchParams()
                    for (let key in data) {
                        p.append(key, data[key])
                    }
                    real_data = p
                } else {
                    // json提交
                    real_data = data
                }
                instance.post(url, data = real_data, {
                        withCredentials, // default
                        headers
                    }).then(res => resolved(res))
                    .catch(err => rejected(err))
                break;

            case 'PUT':
                instance.put(url, {
                        method,
                        params,
                        withCredentials, // default
                        headers
                    }).then(res => resolved(res))
                    .catch(err => rejected(err))
                break;
            default:
                instance.get(url, {
                        method,
                        params,
                        withCredentials, // default
                        headers
                    }).then(res => resolved(res))
                    .catch(err => rejected(err))
                break;

        }
    })
}



export default request