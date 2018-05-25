export const actions = {
    'GET_FEATURES': 'GET_FEATURES',
    'GET_FEATURE_DETAIL': 'GET_FEATURE_DETAIL',
    'EDIT_FEATURE_DETAIL': 'EDIT_FEATURE_DETAIL',
    'DELETE_FEATURE': 'DELETE_FEATURE',
}

const initState = {
    features:[]
}

const featureReducer = (state,action) => {
    switch(action.type) {
        case actions.GET_FEATURES:
            return { ...state, features: action.payload }
            break;
        case actions.DELETE_FEATURE:
            const features = state.features.filter(f=>f.id != action.payload)
            return {...state, features: features }
            break;
        default:
            return { ...state }                
    }
}

export default featureReducer;