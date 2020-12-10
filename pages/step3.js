import Step3 from '../views/Containers/Step3';
import { useRouter } from 'next/router';
import React from 'react';
import { withTranslate } from 'react-redux-multilingual';

const Step3WithParams = ({ translate }) => {
  const router = useRouter();
  const params = router.query;

  return (
    <>
      <Step3 params={params} translate={translate} />
    </>
  );
};

export default withTranslate(Step3WithParams);
