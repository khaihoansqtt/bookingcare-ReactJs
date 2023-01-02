import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import * as actions from '../../store/actions'
import { userServices } from '../../services'
import './Login.scss'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isShowPass: false,
            errMessage: '',
        }
    }

    handlePassInput(value) {
        this.setState({
            password: value,
        })
    }
    handleEmailInput(value) {
        this.setState({
            email: value,
        })
    }

    handleShowPass() {
        this.setState({
            isShowPass: !this.state.isShowPass,
        })
    }

    async handleLogin() {
        this.setState({
            errMessage: '',
        })
        try {
            const data = await userServices.handleLoginApi(this.state.email, this.state.password)
            if (data.errCode === 0) {
                console.log('login success')
                this.props.userLoginSuccess(data.user)
            } else
                this.setState({
                    errMessage: data.errMessage,
                })
        } catch (error) {
            this.setState({
                errMessage: error.response.data.errMessage,
            })
        }
    }

    render() {
        return (
            <div className="login-background">
                <div className="login-container row">
                    <h4 className="login-heading col-12 text-center">Login</h4>
                    <div className="cols-12 form-group mt-4">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            className="form-control"
                            onChange={(e) => this.handleEmailInput(e.target.value)}
                        ></input>
                    </div>
                    <div className="col-12 form-group mt-4 login-input">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type={this.state.isShowPass ? 'text' : 'password'}
                            className="form-control"
                            onChange={(e) => this.handlePassInput(e.target.value)}
                        ></input>
                        <div className="login-show-pass" onClick={() => this.handleShowPass()}>
                            <i className={this.state.isShowPass ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
                        </div>
                    </div>
                    <div className="login-forgot-password">Forgot password?</div>
                    <div className="col-12 text-center">
                        <div className="login-error">{this.state.errMessage}</div>
                        <button
                            className="login-btn btn-primary"
                            onClick={() => {
                                this.handleLogin()
                            }}
                        >
                            Login
                        </button>
                    </div>
                    <div className="login-other-method">
                        <div className="login-other-method__text">Or sign in with</div>
                        <a className="login-other-method__link login-other-method__link--google" href="">
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                        <a className="login-other-method__link login-other-method__link--facebook" href="">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userData) => dispatch(actions.userLoginSuccess(userData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
