import { withTranslate } from 'react-redux-multilingual';
import StaticPages from '../views/Containers/StaticPages';

const business = ({ translate }) => {
  return <StaticPages translate={translate} />;
};

export default withTranslate(business);
