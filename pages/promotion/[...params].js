import { useRouter } from 'next/router';
import React from 'react';
import { withTranslate } from 'react-redux-multilingual';
import Promotion from '../../views/Containers/Promotion';

const promotion = ({ translate }) => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <>
      <Promotion params={params} translate={translate} />
    </>
  );
};

export default withTranslate(promotion);
