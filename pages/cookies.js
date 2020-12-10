import { withTranslate } from 'react-redux-multilingual';
import StaticPages from '../views/Containers/StaticPages';

const cookies = ({ translate }) => {
  return <StaticPages translate={translate} cookies={true} />;
};

export default withTranslate(cookies);
