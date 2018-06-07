import React from 'react';
import { GroupSelect, UserSelect, Form, TextInput, FormButton} from '../../../../common/components';

const NewFeatureForm = (props) => {
    return (
        <Form>
            <TextInput label="Title" placeholder="Feature title"  onChange={(e)=>props.onTextChange(e.target.value,'title')} />
            <TextInput label="description" placeholder="Feature description"  onChange={(e)=>props.onTextChange(e.target.value,'description')} />
                {/* <GroupSelect 
                    label="Select Group(s)"/>  */}
            <UserSelect 
                preSelected={props.invited}
                onSeletionChange={props.onUserSelection}
                label="Select User(s)"/>
            <FormButton 
                onSubmit={(e)=>props.onAdd()}
                onCancel={(e)=>console.log("submiteed")}/>
        </Form>
                                                        
    );
};

// const Form = (props) =>{
//     return(
//         <div className="main-content">
//             <div className="main-content-inner">
//                 <div className="page-content">
//                     <div className="row">
//                         <div className="col-sm-12">
//                             <form className="form-horizontal">
//                                 {props.children}                                
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const TextInput = (props) => {
//     const styles = props.error ? 'form-group has-error' : 'form-group';
//         return (
//             <div className={styles}>
//                 <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1">
//                     {props.label}
//                 </label>
//                 <div className="col-sm-6">
//                    <input type="text"
//                         placeholder={props.placeholder}
//                         className="col-xs-10 col-sm-6 form-control" 
//                         onChange={(e)=>props.onChange(e)}/>
//                 </div>         
//             </div>
//         )
// }

// const FormButton = (props) =>{
//     return(
//         <div className="row push-down-2">
//             <div className="col-sm-9">
//                 <p className="pull-right">
//                     <button style={{margin:8}}
//                         className="btn ll-btn btn-warning"
//                         type="button"
//                         onClick={(e)=>props.onCancel(e)}>
//                         Cancel
//                     </button>
//                     <button
//                         className="btn ll-btn btn-success"
//                         type="button"
//                         onClick={(e)=>props.onSubmit(e)}>
//                         Submit
//                     </button>
//                 </p>
                
//             </div>
//         </div>
//     );
// };

export default NewFeatureForm;