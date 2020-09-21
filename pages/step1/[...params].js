import Step1 from '../../views/Containers/Step1';
import { useRouter } from 'next/router';
import React from 'react';

const Step1WithParams = () => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <>
      <Step1 params={params} />
    </>
  );
};

export default Step1WithParams;
