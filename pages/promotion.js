import Promotion from '../views/Containers/Promotion';
import { withTranslate } from 'react-redux-multilingual';

const promotion = ({ translate }) => {
  return <Promotion translate={translate} />;
};

export default withTranslate(promotion);
