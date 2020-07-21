import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import React from 'react';

class Main extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <CustomNavBar />
        {children}
      </>
    );
  }
}

export default Main;
