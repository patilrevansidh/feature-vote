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

export const ERROR = {
    USER_NAME: 'Enter Username.',
    PASSWORD: 'Enter password.',
    GRP_NAME: 'Enter Group Name.',
    GRP_MEMBER: 'Select user(s).',
    FEATURE_TITLE: 'Enter Feature Title.',
    FEATURE_DESCRIPTION: 'Enter Feature Description.'

}