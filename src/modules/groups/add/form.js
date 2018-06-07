import React from 'react';
import { Form, TextInput, FormButton, UserSelect } from '../../../common/components';

const AddForm = (props) => {
    return (
        <Form>
            <TextInput label="Name" placeholder="Group Name"  onChange={(e)=>props.onTextChange(e.target.value,'name')}/>
            <UserSelect 
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