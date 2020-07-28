import React from 'react';
// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Paginations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  render() {
    return (
      <>
        <nav aria-label="...">
          <Pagination className="pagination pagination-sm" listClassName="pagination-sm">
            <PaginationItem>
              <PaginationLink className="ar-active" href="#pablo" onClick={(e) => e.preventDefault()} tabIndex="-1">
                {' '}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="ar-inactive" href="#pablo" onClick={(e) => e.preventDefault()}>
                {' '}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="ar-inactive" href="#pablo" onClick={(e) => e.preventDefault()}>
                {' '}
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </nav>
      </>
    );
  }
}

Paginations.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(Paginations);
