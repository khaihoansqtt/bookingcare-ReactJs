import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-background">
                <div className="login-container row">
                    <h4 className="login-heading col-12 text-center">Login</h4>
                    <div class="col-12 form-group mt-4">
                        <label for="email">Email</label>
                        <input id="email" type="text" className="form-control"></input>
                    </div>
                    <div class="col-12 form-group mt-4">
                        <label for="password">Password</label>
                        <input id="password" type="password" className="form-control"></input>
                    </div>
                    <div className="login-forgot-password">Forgot password?</div>
                    <div className="col-12 mt-4 text-center">
                        <button className="login-btn btn-primary">Login</button>
                    </div>
                    <div className="login-other-method">
                        <div className="login-other-method__text">Or sign in with</div>
                        <a className="login-other-method__link login-other-method__link--google" href="">
                            <i class="fab fa-google-plus-g"></i>
                        </a>
                        <a className="login-other-method__link login-other-method__link--facebook" href="">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
