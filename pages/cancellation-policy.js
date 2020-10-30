import { withTranslate } from 'react-redux-multilingual';
import StaticPages from '../views/Containers/StaticPages';

const cancellationPolicy = ({ translate }) => {
  return <StaticPages translate={translate} />;
};

export default withTranslate(cancellationPolicy);
