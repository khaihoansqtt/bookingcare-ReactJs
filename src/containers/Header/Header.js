import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'
import Navigator from '../../components/Navigator'
import { adminMenu } from './menuApp'
import './Header.scss'

class Header extends Component {
    handleChangeLanguage = (language) => {
        this.props.changeLangueRedux(language)
    }

    render() {
        const { processLogout } = this.props
        console.log(this.props.language)
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                {/* nút logout */}
                <div className="logout-container">
                    <span
                        className={this.props.language === 'vi' ? 'language-vi active' : 'language-vi'}
                        onClick={() => this.handleChangeLanguage('vi')}
                    >
                        VN
                    </span>
                    <span
                        className={this.props.language === 'en' ? 'language-en active' : 'language-en'}
                        onClick={() => this.handleChangeLanguage('en')}
                    >
                        EN
                    </span>
                    <div className="btn btn-logout" onClick={processLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLangueRedux: (language) => dispatch(actions.changeLanguage(language)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
