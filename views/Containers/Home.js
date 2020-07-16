import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/homeActions';
import CustomNavBar from "../Components/Molecules/Navbars/CustomNavBar";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.dispatch = props.dispatch;
    }


    render() {
        return(
            <>
                <CustomNavBar/>
            </>
        )
    }
}

Home.propTypes = {
    dispatch: PropTypes.func,
}

const mapStateToProps = state => {
    return state.homeReducer
}

export default connect(mapStateToProps)(Home);