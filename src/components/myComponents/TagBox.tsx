import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';
import { TypeOption } from './docs/data';
import { ActionMeta, MultiValueGenericProps, OptionProps } from 'react-select';
import Select, { components } from "react-select";
import Icon from '../Iconify';

const options = [
  { value: "legal", label: "LEGAL"},
  { value: "medical_imaging", label: "MEDICAL IMAGING"},
  { value: "programming", label: "PROGRAMMING"},
  { value: "pharmacist", label: "PHARMACIST"},
  { value: "general", label: "GEN"},
];


const Option = (props: OptionProps<TypeOption>) => {
  return (
    // <Tooltip content={'Customise your option component!'} truncate>
      <components.Option {...props} >
        <div style={{backgroundColor:"#F8F9FA",borderRadius: '20px', width: "max-content", padding:"5px"}}>
          <Icon icon="ant-design:tag-filled" color="#6C757D" width='20px' height='15px' sx={1}/> {props.data.label} {'     '}
        </div>
      </components.Option>
    // </Tooltip>
  );
};

const MultiValueLabel = (props: MultiValueGenericProps<TypeOption>) => {
  return (
    // <Tooltip content={'Customise your multi-value label component!'}>
      <components.MultiValueLabel {...props}>
        <Icon icon="ant-design:tag-filled" color="white" width='20px' height='15px' sx={1}/> {props.data.label}
      </components.MultiValueLabel>
    // {/* </Tooltip> */}
  );
};
export default class TagBox extends Component<{}> {

  render() {
    return (
      <CreatableSelect

        components={{ MultiValueLabel, Option }}
        styles={{
          multiValue: (base) => ({
            ...base,
            backgroundColor: "#6C757D",
            // border: `2px`,
            borderRadius: '20px',
            color: 'white'
          }),
          multiValueLabel: (base) => ({
            ...base,
            color: 'white'
          }),
          option: (base) => ({
            ...base,
            color: '#6C757D'
          }),
          
        }}


        isClearable
        isSearchable      
        isMulti
        closeMenuOnSelect={false}
        options={options}  
        placeholder="Search"
      />
    );
  }
}
