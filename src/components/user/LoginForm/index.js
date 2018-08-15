import React, { PureComponent } from 'react';
import { func, bool, string } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, Button } from 'react-native';

import Input from '../../common/Input';
import * as constraints from '../../../utils/constraints';
import styles from './styles';

class LoginForm extends PureComponent {
  static propTypes = {
    handleSubmit: func.isRequired,
    submitting: bool.isRequired,
    error: string
  }

  render() {
    const { handleSubmit, error, submitting } = this.props;

    return (
      <View style={styles.login} onSubmit={handleSubmit}>
        {error && <Text>{error}</Text>}
        <Field
          name="email"
          label="Email"
          component={Input}
        />
        <Field
          name="password"
          label="Password"
          component={Input}
          password
        />
        <Button title="LOGIN" onPress={handleSubmit} />
        {submitting && <Text>Loading</Text>}
      </View>
    );
  }
}

export default reduxForm({
  form: 'login',
  validate: constraints.validations(constraints.login)
})(LoginForm);
