import Home from '../views/Containers/Home';
import { withTranslate } from 'react-redux-multilingual';

const home = ({ translate }) => {
  return <Home translate={translate} />;
};

export default withTranslate(home);
