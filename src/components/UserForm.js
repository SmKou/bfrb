import React from 'react';
import './UserForm.css';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (e) => this.setState({ name: e.target.value })
    onEmailChange = (e) => this.setState({ email: e.target.value })
    onPasswordChange = (e) => this.setState({ password: e.target.value })

    onSubmit = (e) => {
        e.preventDefault();
        const { name, email } = this.state;
        this.props.loadUser({
            name,
            email,
            entries: 0,
            faces: 0,
            rank: 0,
            joined: new Date()
        });
        this.props.onRouteChange('home');
    }

    render() {
        const { formType, onRouteChange } = this.props;
        return (
            <div className='form-container'>
                <form>
                    <fieldset>
                        <legend>{(formType === 'signin')? 'Sign In': 'Register'}</legend>
                        <div>
                            { formType === 'register'?
                                <>
                                    <label>Name</label>
                                    <input
                                        id='name'
                                        type='text'
                                        name='name'
                                        onChange={this.onNameChange}
                                    />
                                </>:
                                <></>
                            }
                            <label>Email</label>
                            <input
                                id='email-address'
                                type='email'
                                name='email-address'
                                onChange={this.onEmailChange}
                            />
                            <label>Password</label>
                            <input
                                id='password'
                                type='password'
                                name='password'
                                onChange={this.onPasswordChange}
                            />
                        </div>
                    </fieldset>
                    <div>
                        <input
                            type='submit'
                            value={(formType === 'signin'? 'Sign In': 'Register')}
                            onClick={this.onSubmit}
                        />
                    </div>
                    { formType === 'signin'?
                        <div>
                            <p className='anchor' onClick={ () => onRouteChange('register') }>Register</p>
                        </div>:
                        <></>
                    }
                </form>
            </div>
        );
    }
}

export default UserForm;