export const STORAGE_KEYS = {
    IS_LOGGED_IN: 'isLoggedIn',
    USER_DETAILS: 'userDetails'
}

export const HEADER = {
    FEATURE : ['Title','Votes','Posted By','Action'],
    USER : ['Name','Role'],
    GROUPS : ['Name'],    
}
export const FIELDS = {
    FEATURE : ['title','vote','created_by'],
    USER : ['username','role'], 
    GROUPS : ['name'],
}
export const ACTIONS = {
    FEATURE : ['delete','archive','view'],
    USER : ['view'], 
    GROUPS : ['view'],
}

export const TYPE = {
    FEATURE : 'features',
    USER : 'users',
    GROUPS : 'groups',

}