import { useRouter } from 'next/router';
import React from 'react';
import Step3 from '../../views/Containers/Step3';

const Step3WithParams = () => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <>
      <Step3 params={params} />
    </>
  );
};

export default Step3WithParams;
