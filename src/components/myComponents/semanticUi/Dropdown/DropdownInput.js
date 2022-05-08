import React, { Component } from 'react'
import { Dropdown,Input,Button } from 'semantic-ui-react'

const options = [
  { key: 'legal', text: 'LEGAL', value: 'legal' },
  { key: 'medicalImaging', text: 'MEDICALIMAGING', value: 'MEDICALIMAGING'},
]
const focusSearch = false;

class DropdownInput extends Component {
  state = { options }

  handleAddition = (e, { value }) => {
    this.setState((prevState) => ({
      options: [{ text: value, value }, ...prevState.options],
    }))
  }

  handleChange = (e, { value }) => this.setState({ currentValue: value })

  render() {
    const { currentValue } = this.state

    return (
      <Dropdown
        // options={this.state.options}
        placeholder='Search'
        search
        selection
        fluid
        allowAdditions
        multiple
        value={currentValue}
        // onAddItem={this.handleAddition}
        // onChange={this.handleChange}
      >
        <Dropdown.Menu>
            {/* {currentValue.map((option) => (
              <Dropdown.Item key={option.value} {...option} />
            ))} */}
            {/* <Button style={{background:"white", color:"lightblue"}}>Unselect all</Button> */}
          <Dropdown.Divider />
            {options.map((option) => (
              <Dropdown.Item key={option.value} {...option} />
            ))}
          <Dropdown.Divider />
          <Input name='create' placeholder='Create new'/>
        </Dropdown.Menu>  
      </Dropdown>
    )
  }
}

export default DropdownInput
