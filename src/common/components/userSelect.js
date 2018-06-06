import React, { Component } from 'react';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import $ from 'jquery';
import PropTypes from 'prop-types';

class SelectMemberField extends Component {
    constructor (props) {
        super(props);
        // this.state = {value : '',selectedApp:props.selectedApp};
        this.defaultValue = props.preSelected.map(data => data.id);        
    }

    componentWillMount () {
        this.setOptionsConfig('users');
    }
    componentWillReceiveProps(nextProps) { 
        this.defaultValue = nextProps.preSelected.map(data => data.id);
    }

    componentDidMount() {
        const id = 'abc'
        $(`#${id}`).on('select2:selecting',(e)=>{
            this.props.onSeletionChange(e.params.args.data);
        });
        $(`#${id}`).on('select2:unselecting',(e)=>{
            this.props.onSeletionChange(e.params.args.data);
        });
    }

    setOptionsConfig (app_name) {
        const paramKey = app_name == 'users' ? 'name' : 'grpname'
        const searchUrl = `http://localhost:3001/${app_name}?`;
            
        this.optionsConfig = {
             ajax: {
                url : searchUrl,
                dataType: 'json',
                mutiple : true,
                headers : {
                    'user_id' : JSON.parse(localStorage.getItem('userDetails')).id
                },
                delay: 250,
                data: function (params) {
                    return {
                        [paramKey] : params.term,
                        // type : paramKey		  
                    };
                },
                processResults: function (data, params) {
                    const arr = Array.isArray(data) ? data.map((m)=>{
                        m.text = m.username
                        return m
                    })
                    :[];
                    params.page = params.page || 1;
                        return {
                            results: arr
                        };
                }
            },
            minimumInputLength: 3,
	    };
    }

    render() {
        const styles = this.props.error ? 'form-group has-error' : 'form-group';
        return (
               <div className={styles}>
                    <label className="col-xs- col-sm-3 control-label no-padding-right" htmlFor="form-field-1">
                        {this.props.label}
                     </label>
                    <div className="col-xs-12 col-sm-6 members" >
                         <Select2 className="form-control" 
                            multiple
                            multiselect
                            id="abc"
                            data={this.props.preSelected}
                            defaultValue={this.defaultValue}                            
                            options={this.optionsConfig}
                         />
                    </div>
                 </div>
            
        );
    }
}

const FormError = (props) => {
    return (
        <div className="col-sm-3">
            <label className="control-label">{props.errorMessage}</label>
        </div>
    );
};

SelectMemberField.defaultProps = {
    preSelected : []
};

SelectMemberField.propTypes = {
    preSelected : PropTypes.array
};

export default SelectMemberField;