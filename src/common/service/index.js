import _ from 'lodash';

const users = [
    {username:"admin",password:"admin",role:"admin"},
    {username:"revan",password:"password",role:"user"},
    {username:"abhi",password:"password",role:"user"},
    {username:"revansiddh",password:"revansiddh",role:"admin"},            
]

const features = [
    {id:1,title:'Add Pdf',description:'Add pdf description'},
    {id:2,title:'Edit Pdf',description:'Edit pdf description'},
    {id:3,title:'Delete Pdf',description:'Delete pdf description'},
    {id:4,title:'export Pdf',description:'export pdf description'},
    {id:5,title:'import Pdf',description:'import pdf description'},
]

export const login = (body={username:'',password:''}) => {
    const userIndex = _.findIndex(users,(u)=> u.username == body.username)
	if(userIndex != -1){
        const user = _.find(users,(u)=> u.username === body.username);
        if(user.username === body.username && user.password === body.password ) {            
            const response = { success:true, data: { role: user.role} }
            return response
        }else {
            const response = { success: false, message: 'Incorrect username or password'}
            return response
        }
	}else {
        const response = { success: false, message: 'Unauthorized access'}
        return response
    }
}

export const getFeatures = () => {
    return features
}