import React from 'react';
// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Paginations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
    this.dispatch = props.dispatch;
  }

  render() {
    const { totalPages, active } = this.props;
    if (this.state.active !== active) {
      this.setState({ active });
    }
    const pages = Array.from(Array(totalPages).keys());
    return (
      <>
        <nav aria-label="...">
          <Pagination className="pagination pagination-sm" listClassName="pagination-sm">
            {pages.map((item, index) => {
              return (
                <PaginationItem>
                  <PaginationLink
                    className={this.state.active === index + 1 ? 'ar-active' : 'ar-inactive'}
                    href=""
                    onClick={() => this.props.selectPage(index + 1)}
                  >
                    {' '}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
          </Pagination>
        </nav>
      </>
    );
  }
}

Paginations.propTypes = {
  dispatch: PropTypes.func,
  selectPage: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(Paginations);
