import httpService from './httpService';

const api = {
    fetchFeatures () {
        const url = 'features'
        return httpService.get(url)
    },
    deleteFeature (id) {
        const url = `features/${id}`
        return httpService.delete(url);
    },
    fetchFeatureDetail (id) {
        const url = `features/${id}`;
        return httpService.get(url)
    },
    postFeature (body) {
        const url = 'features'
        return httpService.post(url, body);
    },
    login (body) {
        const url = "auth/login"
        return httpService.post(url,body)
    },
    castVote (id) {
        const url = `features/${id}/vote`;
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        const body = {user_id:userDetails.id}
        console.log(url,body)
        return httpService.put(url,body)
    },
    fetchUsers(str='') {
        const url = 'users';
        const body = {name:str}
        return httpService.get(url)
    },
    fetchGroups (str='') {
        const url = 'groups';
        const body = {grpname:str}
        return httpService.get(url,body)
    },
    postGroup (body) {
        const url = 'groups';
        return httpService.post(url,body)
    }
    
}

export default api;