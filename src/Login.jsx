import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (Number(values.password.length) < 6) {
    errors.password = 'Password should be more than 6 chars';
  }

  return errors;
}

@reduxForm({
  form: 'simple',
  fields: ['email', 'password'],
  validate,
  getFormState: (state, reduxMountPoint) => state.get(reduxMountPoint).toJS()
})

export default class Login extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const { fields: {email, password}, handleSubmit } = this.props;
    return (<form onSubmit={handleSubmit}>
        <div>
          <div>
            {email.touched && email.error && <div>{email.error}</div>}
            <input type="text" placeholder="Email" {...email}/>
          </div>
          <div>
            {password.touched && password.error && <div>{password.error}</div>}
            <input type="text" placeholder="Password" {...password}/>
          </div>
        </div>
        <div>
          <button disabled={!this.props.valid} onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    );
  }
}
