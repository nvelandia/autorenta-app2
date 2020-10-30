import React, { Component } from 'react';
import Error from '../views/Containers/Error';
import { withTranslate } from 'react-redux-multilingual';

const _error = ({ translate }) => {
  return <Error translate={translate} />;
};

export default withTranslate(_error);
