import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'
import Navigator from '../../components/Navigator'
import { adminMenu } from './menuApp'
import './Header.scss'
import { FormattedMessage } from 'react-intl'

class Header extends Component {
    handleChangeLanguage = (language) => {
        this.props.changeLangueRedux(language)
    }

    render() {
        const { processLogout, language, userInfo } = this.props
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-menus-container">
                    <Navigator menus={adminMenu} />
                </div>

                {/* nút logout */}
                <div className="header-personal">
                    <span className="header-welcome">
                        <FormattedMessage id="home-header.welcome" />
                        {userInfo && userInfo.firstName ? userInfo.firstName : ''}
                    </span>
                    <span
                        className={language === 'vi' ? 'language-vi active' : 'language-vi'}
                        onClick={() => this.handleChangeLanguage('vi')}
                    >
                        VN
                    </span>
                    <span
                        className={language === 'en' ? 'language-en active' : 'language-en'}
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
        userInfo: state.user.userInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLangueRedux: (language) => dispatch(actions.changeLanguage(language)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
