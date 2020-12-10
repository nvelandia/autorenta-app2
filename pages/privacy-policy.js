import { withTranslate } from 'react-redux-multilingual';
import StaticPages from '../views/Containers/StaticPages';

const privacyPolicy = ({ translate }) => {
  return <StaticPages translate={translate} privacy={true} />;
};

export default withTranslate(privacyPolicy);
