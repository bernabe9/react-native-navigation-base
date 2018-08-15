import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';

import Stack from './Stack';
import Tabs from './Tabs';

const Navigation = ({ checked, authenticated }) => {
  if (!checked) {
    return null;
  }
  return authenticated ? <Tabs /> : <Stack />;
};

Navigation.propTypes = {
  checked: bool.isRequired,
  authenticated: bool.isRequired,
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated']),
  checked: state.getIn(['session', 'sessionChecked']),
});

export default connect(mapState)(Navigation);
