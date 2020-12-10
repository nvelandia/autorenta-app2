import Step1 from '../views/Containers/Step1';
import { useRouter } from 'next/router';
import React from 'react';
import { withTranslate } from 'react-redux-multilingual';

const Step1WithParams = ({ translate }) => {
  const router = useRouter();
  const params = router.query;
  return (
    <>
      <Step1 params={params} translate={translate} />
    </>
  );
};

export default withTranslate(Step1WithParams);
