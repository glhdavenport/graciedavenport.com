import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import file from './resume.md'

class MarkDownFile extends Component {
  constructor(props) {
    super(props)

    this.state = { file: null }
  }

  componentWillMount() {
    fetch(file).then((response) => response.text()).then((text) => {
      this.setState({ file: text })
    })
  }

  render() {
    return (
      <div>
        <ReactMarkdown source={this.state.file} escapeHtml={false} />
      </div>
    )
  }
}

export default MarkDownFile;