import React from 'react';

class Label extends React.Component {
  render() {
    const { title, value, classes } = this.props;
    return (
      <div className={'ar-label ' + classes}>
        <p className="ar-label-title">
          {title}
          <strong className="ar-label-text">{value}</strong>
        </p>
      </div>
    );
  }
}

export default Label;
