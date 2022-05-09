import React, { Component } from 'react'
import { Dropdown,Input,Button, Icon } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'LEGAL', value: 'LEGAL', icon: 'tag'},
  { key: 2, text: 'MEDICAL IMAGING', value: 'MEDICAL IMAGING', icon: 'tag'},
  { key: 3, text: 'PROGRAMMING', value: 'PROGRAMMING', icon: 'tag'},
]

const currentValues = [];
const displayValues = [];

class DropdownInput extends Component {
  state = { options, currentValues, displayValues }

  handleAddition = (e, { value }) => {
    console.log("ADDING")
    for (var i = 0; i < this.state.options; i++){
      if (value === this.state.options[i].value)
        break;
    }
    this.setState((prevState) => ({
      options: [{ key: this.state.options.length+1, text: value.toUpperCase(), value: value.toUpperCase(), icon: 'tag' }, ...prevState.options],
    }))
  }

  handleSelection = (e, { text, icon, value }) => {
    this.setState((prevState) => ({
      currentValues: prevState.currentValues.concat([{text: text, value:value, icon: icon}]),
      displayValues: prevState.displayValues.concat([text])
    }))
    console.log(this.state.currentValues)
  }

  clearValues = (e, { value }) => {
    console.log("DELETING SELECTIONS")
    this.setState(({
      currentValues: [],
      displayValues: []
    }))
  }

  deleteLabel = (e, {value, content}) => {
    console.log("DELETE SELECTED VALUE")
    console.log(value)
    console.log(content)
    var current = []
    var display = []
    for (var i = 0; i < this.state.currentValues.length; i++){
      if (value === this.state.currentValues[i].text){
        continue;
      }
      else{
        console.log("ELSE")
        current = current.concat(this.state.currentValues[i])
        display = current.concat(this.state.currentValues[i].text)
        console.log(display)
      }
    }
    this.setState(({
      displayValues: display,
      currentValues: current
    }))
  }

  render() {
    return (
      <div style={{background: "#FFF", borderColor:"red", padding: '5px'}}>
        <Dropdown
        className='style'
        selection
        // floating
        fluid
        multiple
        search
        clearable={true}
        options={this.state.options}
        allowAdditions={true}
        onAddItem={this.handleAddition}
        value={this.state.displayValues}
        onLabelClick={this.deleteLabel}
        >
          <Dropdown.Menu>
            <Dropdown.Menu scrolling>
              {this.state.currentValues.map((option) => (
                  <div style={{float:"left", margin: "5px", background:"#6C757D", color: "white", borderRadius:"20px", padding:"0px", zIndex: 10, position:'relative'}}>
                    <Icon name={option.icon} style={{ marginLeft: "5px", marginRight:"-10px", padding:"0px", zIndex: 10, position:'relative'}}/>
                    <Button content={option.text} icon='close' labelPosition='right' onClick={this.deleteLabel} style={{background:"#6C757D", color: "white", borderRadius:"20px", paddingLeft:"0px"}}/>
                  </div>
                ))}
            </Dropdown.Menu>
            <Button style={{background: "white", color: "#37CAF0"}} onClick={this.clearValues}>Unselect All</Button>          
            <Dropdown.Divider />
              <Dropdown.Menu scrolling>
                {this.state.options.map((option) => (
                  <Dropdown.Item key={option.key} {...option} onClick={this.handleSelection} style={{margin: '10px', background: '#F8F9FA', color: '#6C757D', borderRadius: '20px', padding: '5px', width: 'max-content'}}/>
                ))}
            </Dropdown.Menu>
            <Dropdown.Divider />
              <Input className='create' placeholder="Create New"/>            
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}

export default DropdownInput
