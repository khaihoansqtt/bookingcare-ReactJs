import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { withRouter } from 'react-router-dom'

import * as actions from '../../store/actions'
import './HomeHeader.scss'

class HomeHeader extends Component {
    handleChangeLanguage = (language) => {
        this.props.changeLanguageProp(language)
    }

    redirectGoHome = () => {
        this.props.history.push(`/home`)
    }

    render() {
        return (
            <React.Fragment>
                <div className="home-header">
                    <div className="header__menu-logo" onClick={this.redirectGoHome}>
                        <div className="header__menu-icon">
                            <i className="fas fa-bars"></i>
                        </div>
                        <div className="header__logo"></div>
                    </div>
                    <ul className="header__list">
                        <li className="header__list-item">
                            <a href="/" className="header__list-item-title">
                                <FormattedMessage id="home-header.specialty" />
                                <div className="header__list-item-des">
                                    <FormattedMessage id="home-header.find-doctor" />
                                </div>
                            </a>
                        </li>
                        <li className="header__list-item">
                            <a href="/" className="header__list-item-title">
                                <FormattedMessage id="home-header.facilities" />

                                <div className="header__list-item-des">
                                    <FormattedMessage id="home-header.choose-hospital" />
                                </div>
                            </a>
                        </li>
                        <li className="header__list-item">
                            <a href="/" className="header__list-item-title">
                                <FormattedMessage id="home-header.doctor" />

                                <div className="header__list-item-des">
                                    <FormattedMessage id="home-header.choose-doctor" />
                                </div>
                            </a>
                        </li>
                        <li className="header__list-item">
                            <a href="/" className="header__list-item-title">
                                <FormattedMessage id="home-header.package" />

                                <div className="header__list-item-des">
                                    <FormattedMessage id="home-header.health-check" />
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="header__option">
                        <a href="/" className="header__option-support">
                            <i className="fas fa-question-circle"></i>
                            <FormattedMessage id="home-header.support" />
                        </a>
                        <div className="header__option-language-vn" onClick={() => this.handleChangeLanguage('vi')}>
                            VN
                        </div>
                        <div className="header__option-language-en" onClick={() => this.handleChangeLanguage('en')}>
                            EN
                        </div>
                    </div>
                </div>
                {this.props.isShowBanner && (
                    <div className="header-banner">
                        <div className="header__search">
                            <div className="header__search-title">
                                Nền tảng y tế
                                <br />
                                <b>Chăm sóc sức khỏe toàn diện</b>
                            </div>
                            <div className="header__search-box">
                                <i className="fas fa-search"></i>
                                <input />
                            </div>
                            <ul className="header__search-option-list">
                                <a href="/" className="header__search-option-list-item">
                                    <div className="header__search-option-list-item-image image-1"></div>
                                    Khám chuyên khoa
                                </a>
                                <a href="/" className="header__search-option-list-item">
                                    <div className="header__search-option-list-item-image image-2"></div>
                                    Khám từ xa
                                </a>
                                <a href="/" className="header__search-option-list-item">
                                    <div className="header__search-option-list-item-image image-3"></div>
                                    Khám tổng quát
                                </a>
                                <a href="/" className="header__search-option-list-item">
                                    <div className="header__search-option-list-item-image image-4"></div>
                                    Xét nghiệm y học
                                </a>
                                <a href="/" className="header__search-option-list-item">
                                    <div className="header__search-option-list-item-image image-5"></div>
                                    Sức khỏe tinh thần
                                </a>
                                <a href="/" className="header__search-option-list-item">
                                    <div className="header__search-option-list-item-image image-6"></div>
                                    Khám nha khoa
                                </a>
                                <a href="/" className="header__search-option-list-item">
                                    <div className="header__search-option-list-item-image image-7"></div>
                                    Gói phẫu thuật
                                </a>
                                <a href="/" className="header__search-option-list-item">
                                    <div className="header__search-option-list-item-image image-8"></div>
                                    Sản phẩm y tế
                                </a>
                                <a href="/" className="header__search-option-list-item">
                                    <div className="header__search-option-list-item-image image-9"></div>
                                    Sức khỏe doanh nghiệp
                                </a>
                            </ul>
                        </div>
                    </div>
                )}
            </React.Fragment>
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
        changeLanguageProp: (language) => dispatch(actions.changeLanguage(language)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader))
