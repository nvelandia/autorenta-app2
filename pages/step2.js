import Step2 from '../views/Containers/Step2';
import { withTranslate } from 'react-redux-multilingual';

const step2 = ({ translate }) => {
  return <Step2 translate={translate} />;
};

export default withTranslate(step2);
