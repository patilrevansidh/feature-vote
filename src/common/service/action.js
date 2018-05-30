import _ from 'lodash';
import api from './apiService'
import {actions} from '../../modules/reducers/features';

export const doLogin = (body) => {
    return async (dispatch) =>{
        try {
            const response = await api.login(body);
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('userDetails',JSON.stringify(response.data.data))
        } catch (error) {
            
        }
    }
}
// "data": {
//     "data": {
//         "id": 1,
//         "username": "revan",
//         "password": "revan",
//         "role": "admin"
//     }
// }

export const getFeatures = () => {
    return async (dispatch) =>{
        try {
            const response = await api.fetchFeatures();
            dispatch({ type: actions.GET_FEATURES, payload: response.data.data })
        } catch (error) {
            console.log("feature error")    
        }
    }
}

export const getFeatureDetails = (id) => {
    return async (dispatch) =>{
        try {            
            dispatch({type:actions.GET_FEATURE_DETAIL, payload:id})
        } catch (error) {
            console.log("feature detail error",error)
       }
    }
}

export const deleteFeature = (id,history) => {
    return async (dispatch) =>{
        try {
            const response = await api.deleteFeature(id)
            dispatch({ type: actions.DELETE_FEATURE, payload: response.data.data })
            if(history) {
                history.goBack()
            }
        } catch (error) {
            console.log("feature detail error")
        }
    }
}

export const castVote = (id) => {
    return async (dispatch) =>{
        try {
            const response = await api.castVote(id)
            dispatch({ type: actions.GET_FEATURES, payload: response.data.data })
        } catch (error) {
            console.log("feature detail error")
        }
    }
}

export const addFeature = (body, history) => {
    return async (dispatch) => {
        try {            
            const response = await api.postFeature(body)
            dispatch({ type: actions.ADD_FEATURE, payload: response.data.data })
            history.goBack()
        } catch (error) {
            
        }
    }
}
