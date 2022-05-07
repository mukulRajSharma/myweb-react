import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';
import { TypeOption } from './docs/data';
import { MultiValueGenericProps, OptionProps } from 'react-select';
import { components } from "react-select";
import Icon from '../Iconify';
import { Container,Typography } from '@mui/material';

const defaultOptions = [
  { value: "legal", label: "LEGAL"},
  { value: "medical_imaging", label: "MEDICAL IMAGING"},
  { value: "programming", label: "PROGRAMMING"},
  { value: "pharmacist", label: "PHARMACIST"},
  { value: "general", label: "GEN"},
];
const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});
interface State {
  readonly isLoading: boolean;
  readonly invalidInput: boolean;
  readonly options: readonly TypeOption[];
}


const Option = (props: OptionProps<TypeOption>) => {
  return (
    // <Tooltip content={'Customise your option component!'} truncate>
      <components.Option {...props} >
        <div style={{backgroundColor:"#F8F9FA",borderRadius: '20px', width: "max-content", padding:"4px"}}>
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
export default class TagBox extends Component<{}, State> {
  
  state: State = {
    isLoading: false,
    invalidInput: false,
    options: defaultOptions,
  };

  handleInputChange = (inputValue: string) => {
    this.setState({invalidInput: false})
  }

  handleCreate = (inputValue: string) => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      if (/^[a-zA-Z ]*$/.test(inputValue)) {
        const newOption = createOption(inputValue.toUpperCase());
        console.log(newOption);
        this.setState({
          isLoading: false,
          invalidInput: false,
          options: [...defaultOptions, newOption],
        });
      }
      else {
        this.setState({
          isLoading: false,
          invalidInput: true
        })
      }
      
    }, 1000);
  };

  render() {
    const { isLoading, invalidInput, options } = this.state;

    return (
      <Container>
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
              multiValueRemove: (base) => ({
                ...base,
                borderRadius: '20px',
              }),
              container: (base) => ({
                ...base,
                backgroundColor: invalidInput?"red": "",
                padding: 2,
              })
            }}


            isClearable
            isSearchable      
            isMulti
            isLoading={isLoading}
            // closeMenuOnSelect={false}
            options={options}  
            onInputChange={this.handleInputChange}
            onCreateOption={this.handleCreate}
            placeholder="Search"

        />
        
        { invalidInput && 
          <Typography color={"red"}>
              <Icon icon="bi:exclamation-diamond-fill" color="red" sx={1} height='15px'/> Only Alphabetical Tags Allowed!
          </Typography>
        }

      </Container>

    );
  }
}
