import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotificationAlert from 'react-notification-alert';
import * as actions from '../../../../actions/generalActions';

class SuccessNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotification: false,
    };
    this.dispatch = this.props.dispatch;
  }

  notify = (type, message) => {
    let options = {
      place: 'tc',
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {this.props.translate('common.error.attention')}
          </span>
          <span data-notify="message">{message}</span>
        </div>
      ),
      type: type,
      icon: 'ni ni-bell-55',
      autoDismiss: 10,
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  render() {
    const { translate } = this.props;
    if (this.props.showNotification && !this.props.error) {
      this.notify('success', translate(`common.validationMessages.${this.props.messageType}`));
      this.dispatch(actions.hideNotification());
    }
    if (this.props.showNotification && this.props.error) {
      if (this.props.messageType.includes(' ')) {
        this.notify('danger', this.props.messageType);
      } else {
        this.notify('danger', translate(`common.error.${this.props.messageType}`));
      }
      this.dispatch(actions.hideNotification());
    }
    return (
      <div className="rna-wrapper">
        <NotificationAlert ref="notificationAlert" />
      </div>
    );
  }
}

SuccessNotification.proptypes = {
  dispatch: PropTypes.func,
  translate: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.generalReducer;
};

export default connect(mapStateToProps)(SuccessNotification);
