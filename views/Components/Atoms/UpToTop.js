import React from 'react';
// reactstrap components

class UpToTop extends React.Component {
  handleClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <div className="ar-up-to-top-button">
        <a onClick={this.handleClick}>
          <span className="ar-icon-chevron-up" />
        </a>
      </div>
    );
  }
}

export default UpToTop;
