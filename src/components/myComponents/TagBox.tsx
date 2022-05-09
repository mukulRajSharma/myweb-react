import React, { Component, Fragment } from 'react';

import CreatableSelect from 'react-select/creatable';
import { TypeOption } from './docs/data';
import { MultiValueGenericProps, OptionProps,SelectInstance } from 'react-select';
import { components } from "react-select";
import Icon from '../Iconify';
import { Container,Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

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
  readonly selectedOptions: TypeOption[];
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

const Menu = (props) => {
  return (
    <Fragment>
      <components.Menu {...props}>
        <div>
          {props.selectProps.fetchingData ? (
            <span className="fetching">Fetching data...</span>
          ) : (
            <div>{props.children}</div>
          )}
          <hr
              style={{
                  color: '#F8F9FA',
                  // backgroundColor: 'F8F9FA',
                  height: 1,
                  width: '95%',
                  margin: 'auto'
              }}
          />
          <div style={{width: '95%',marginTop:'-2%', marginLeft:'2.5%'}}>
            <TextField 
              id="standard-basic" 
              label="Create New" 
              variant="standard" 
              InputProps={{ disableUnderline: true }}
              // onClick={{props.focus()}}
              focused={false}
            />
            {/* <Button
              className={"change-data"}
              // onClick={console.log("CLICKEDD")}
              marginTop="auto"
            >
              Add
            </Button> */}
          </div>
          
        </div>
      </components.Menu>
    </Fragment>
  );
};


export default class TagBox extends Component<{}, State> {
  
  state: State = {
    isLoading: false,
    invalidInput: false,
    options: defaultOptions,
    selectedOptions: []
  };

  handleChange = (inputValue: TypeOption[]) => {
    this.setState({invalidInput: false})
    console.log("CHANGE")
    for (var i=0; i < inputValue.length; i++){
      console.log(inputValue[i].label)
    }
    // this.setState({selectedOptions: [createOption(inputValue)]})
  }

  handleCreate = (inputValue: string) => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      if (/^[a-zA-Z ]*$/.test(inputValue)) {
        const newOption = createOption(inputValue.toUpperCase());
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

  creatableRef?: SelectInstance<TypeOption> | null;
  focusCreatable = () => {
    console.log(this.creatableRef);
    this.creatableRef!.focus();
  };
  blurCreatable = () => {
    this.creatableRef!.blur();
  };
  render() {
    const { isLoading, invalidInput, options, selectedOptions } = this.state;

    return (
      <Container>
        <CreatableSelect

            components={{ MultiValueLabel, Option, Menu }}
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
            
            ref={(ref) => {
              this.creatableRef = ref;
            }}

            isClearable
            isSearchable      
            isMulti
            isLoading={isLoading}
            // closeMenuOnSelect={false}
            options={options}
            onChange={this.handleChange}
            autoFocus={false}
            onCreateOption={this.handleCreate}
            // hideSelectedOptions={false}
            placeholder="Search"

        />
        
        { invalidInput && 
          <Typography color={"red"}>
              <Icon icon="bi:exclamation-diamond-fill" color="red" sx={1} height='15px'/> Only Alphabetical Tags Allowed!
          </Typography>
        }
        <Typography>
          {selectedOptions[0] && selectedOptions[0].label}
        </Typography>

      </Container>

    );
  }
}
