import React, { Component } from 'react'


class TextInput extends Component {
 
  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea
                className="materialize-textarea"
                onChange={this.props.handleChange}
                defaultValue={this.props.defaultContent}
                rows="50"
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default TextInput