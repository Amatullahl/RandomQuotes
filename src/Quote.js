import React from "react";

/*
This is a good place to use a functional component because this child component does not 
contain state. Write as follows:
const Quote = (props) => {}


You can pull variables out of props like 
const Quote = ({quote, handleClick, etc.}) => {}
*/
class Quote extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="quote">"{this.props.quote}"</h1>
          
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="newquote"
          onClick={this.props.handleClick}
        >
          Get a Quote!
        </button>
      </div>
    );
  }
}

export default Quote;
