import React from 'react';
// reactstrap components

class UpToTop extends React.Component {
  handleClick = (event) => {};

  render() {
    return (
      <div className="ar-up-to-top-button">
        <a onClick={this.handleClick}>
          <span className="icon-chevron-up" />
        </a>
      </div>
    );
  }
}

export default UpToTop;
