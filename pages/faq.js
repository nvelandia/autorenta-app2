import StaticPages from '../views/Containers/StaticPages';
import { withTranslate } from 'react-redux-multilingual';

const faq = ({ translate }) => {
  return <StaticPages translate={translate} faq={true} />;
};

export default withTranslate(faq);
