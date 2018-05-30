
const UNAUTHORIZED = "Unauthorized";
const BASE_URL = "http://localhost:3001/"


let obj = {
    get (url) {
        const METHOD = 'get';
        return doHttpCall(url, METHOD);
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
            const NEW_URL = BASE_URL + url;
            let options = {
                method : method
            };

            if (method === 'post' || method === 'put') {
                options.body = JSON.stringify(body)
            }
         
            options.headers = new Headers();
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

export default obj;