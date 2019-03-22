import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { compose, withProps, withHandlers } from 'recompose';

const enhance = compose(
  inject('store'),
  withProps(({ store: { userStore } }) => ({
    store: userStore,
  })),
  withHandlers({
    setMessage: props => (value) => {
      props.store.setField(value);
    },
  }),
  observer,
);

const GalleyContent = ({ classes }) => (
  <div className={classes.BlogContainer}>
    Here will be Gallery Content
  </div>
);

GalleyContent.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};


export default enhance(GalleyContent);
