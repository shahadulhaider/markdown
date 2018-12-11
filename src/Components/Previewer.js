import React, { Component } from 'react'
import marked from 'marked'

class Previewer extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: marked(this.props.textInput) }}>
        
      </div>
    )
  }
}

export default Previewer
