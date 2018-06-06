import httpService from './httpService';

const obj = {
    fetchUser (body) {
        const url = "/users"
        return httpService.get(url,body)
    }
}

export default obj;