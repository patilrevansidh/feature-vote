import React from 'react';
import { Form, TextInput, FormButton, UserSelect } from '../../../common/components';

const AddForm = (props) => {
    return (
        <Form>
            <TextInput 
                error={props.error && props.error.nameError ? props.error.nameError : null }
                label="Name" placeholder="Group Name"  onChange={(e)=>props.onTextChange(e.target.value,'name')}/>
            <UserSelect
                error={props.error && props.error.memberError ? props.error.memberError : null}
                preSelected={props.selected}
                onSeletionChange={props.onUserSelection}
                label="Select User(s)"/>
             <FormButton 
                onSubmit={(e)=>props.onAdd()}
                onCancel={(e)=>props.onCancel()}/>
        </Form>
    );
};

export default AddForm;