import React from 'react';

class Label extends React.Component {
  render() {
    const { title, value, classes } = this.props;
    return (
      <div className={'ar-label ' + classes}>
        <>
          {title}
          <strong className="ar-label-text">{value}</strong>
        </>
      </div>
    );
  }
}

export default Label;
