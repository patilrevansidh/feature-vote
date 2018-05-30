export const actions = {
    'GET_FEATURES': 'GET_FEATURES',
    'GET_FEATURE_DETAIL': 'GET_FEATURE_DETAIL',
    'EDIT_FEATURE_DETAIL': 'EDIT_FEATURE_DETAIL',
    'DELETE_FEATURE': 'DELETE_FEATURE',
    'UPVOTE': 'UPVOTE'
}

const initState = {
    features:[]
}

const featureReducer = (state=initState, action) => {
    switch(action.type) {
        case actions.GET_FEATURES:
            return { ...state, features: action.payload }
            break;
        case actions.DELETE_FEATURE:
            return { ...state, features: action.payload }
            break;
        case actions.UPVOTE:
            const arr = state.features.filter(f=>f.id != action.payload.id);
            const votedFeature = state.features.filter(f=>f.id == action.payload.id)[0];
            const newObj = {...votedFeature,voted:[...votedFeature.voted,action.payload.user]}
            arr.push(newObj)
            return {...state.features,features:arr}
        default:
            return { ...state }                
    }
}

export default featureReducer;