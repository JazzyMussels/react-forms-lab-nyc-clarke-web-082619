import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleCharCount = event => this.setState({message: event.target.value})

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"  onChange={this.handleCharCount} value={this.state.message} />
        <p>{this.props.maxChars - this.state.message.length} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
