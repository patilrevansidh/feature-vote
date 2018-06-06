export const STORAGE_KEYS = {
    IS_LOGGED_IN: 'isLoggedIn',
    USER_DETAILS: 'userDetails'
}

export const HEADER = {
    FEATURE : ['Title','Votes','Posted By','Action'],
    USER : ['Name','Role','Email','Action'],
    GROUPS : ['Name','Action'],    
}
export const FIELDS = {
    FEATURE : ['title','vote','created_by'],
    USER : ['username','role','email'], 
    GROUPS : ['name'],
}
export const ACTIONS = {
    FEATURE : ['delete','archive','view'],
    USER : [''], 
    GROUPS : ['view'],
}

export const TYPE = {
    FEATURE : 'features',
    USER : 'users',
    GROUPS : 'groups',

}