export const actions = {
    'GET_FEATURES': 'GET_FEATURES',
    'GET_FEATURE_DETAIL': 'GET_FEATURE_DETAIL',
    'EDIT_FEATURE_DETAIL': 'EDIT_FEATURE_DETAIL',
    'DELETE_FEATURE': 'DELETE_FEATURE',
    'UPVOTE': 'UPVOTE',
    'ADD_FEATURE':'ADD_FEATURE'
}

const initState = {
    features:[],
    featureDetail:{}
}

const featureReducer = (state=initState, action) => {
    switch(action.type) {
        case actions.GET_FEATURES:
            return { ...state, features: action.payload }
            break;
        case actions.GET_FEATURE_DETAIL:
            const feature = state.features.filter(f=>f.id == action.payload)[0]
            return {...state, featureDetail: feature }
            break;
        case actions.DELETE_FEATURE:
            return { ...state, features: action.payload }
            break;
        case action.ADD_FEATURE:
            return { ...state, features: action.payload }
            break;
        default:
            return { ...state }                
    }
}

export default featureReducer;