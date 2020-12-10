import React, { Component } from 'react';
import Error from '../views/Containers/Error';
import { withTranslate } from 'react-redux-multilingual';
import { useRouter } from 'next/router';

const _error = ({ translate }) => {
  const router = useRouter();
  const params = router.query;

  return <Error translate={translate} params={params} />;
};

export default withTranslate(_error);
