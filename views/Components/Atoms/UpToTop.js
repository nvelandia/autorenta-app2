import React from 'react';
// reactstrap components

class UpToTop extends React.Component {
  handleClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

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
