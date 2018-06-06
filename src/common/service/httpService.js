import { STORAGE_KEYS } from '../constants/stringConstant';
const UNAUTHORIZED = "Unauthorized";
const BASE_URL = "http://localhost:3001/"


let obj = {
    get (url,body) {
        const METHOD = 'get';
        return doHttpCall(url, METHOD, body);
    },
    put (url,body) {
        const METHOD = 'put';
        return doHttpCall(url, METHOD, body);
    },
    post (url,body) {
        const METHOD = 'post';
        return doHttpCall(url, METHOD, body);
    },
    delete (url) {
        const METHOD = 'delete';
        return doHttpCall(url, METHOD);
    }
};

function doHttpCall(url, method, body={}, isLogin) {
    const promise = new Promise((resolve, reject) => {      
            let NEW_URL = BASE_URL + url;
            let options = {
                method : method
            };

            if (method === 'post' || method === 'put') {
                options.body = JSON.stringify(body)
            }
            if(method ==='get') {
                NEW_URL = NEW_URL + constructParams(body)
            }
            const isLoggedIn=localStorage.getItem(STORAGE_KEYS.IS_LOGGED_IN)
            options.headers = new Headers();
            if(isLoggedIn) {
                const userDetails = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_DETAILS))
                options.headers.append('user_id', `${userDetails.id}`);                
            }
            options.headers.append('Content-Type', 'application/json');
    
            fetch(NEW_URL, options)
            .then(checkStatus)
            .then((response) => {
                resolve(response);
            }).catch((message)=> {
                console.log(message)
               reject(message);
            });
    });

    return promise;
}

function checkStatus(data) {
    const promise = new Promise((resolve, reject) =>{
        if (data.status === 401) {
            reject({message : UNAUTHORIZED});
        } else {
            resolve(data.json());
        }
    });
    return promise;
}

function constructParams(params={}) {
    const keys = Object.keys(params);

    if (keys.length === 0) {
        return "";
    }

    let paramString = '?';

    for (let i = 0, ii = keys.length; i < ii; i++) {
        paramString += `${keys[i]}=${params[keys[i]]}`;

        if ( i !== ii - 1) {
            paramString += '&';
        }
    }

    return paramString;
}

export default obj;