import React, { Component } from 'react'

import TextInput from './Components/TextInput'
import Previewer from './Components/Previewer'

class App extends Component {
  state = {
    textInput: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[BlazingRockStorm](https://www.freecodecamp.com/blazingrockstorm)*'
  }

  handleChange(e) {
    this.setState({
      textInput: e.target.value
    })
  }
  render() {
    return (
      <div className="container">
				<div className="row">
					<div className="col m6 s12">
						<h4>Enter Markdown</h4>
            <TextInput
              handleChange={this.handleChange.bind(this)}
              defaultContent={this.state.textInput}
            />
					</div>
					<div className="col m6  s12">
						<h4>Previewer</h4>
						<div className="card teal lighten-5">
							<div className="card-content">
                <Previewer
                  textInput={this.state.textInput}
                />
							</div>
						</div>
					</div>
				</div>
      </div>
    )
  }
}

export default App;

