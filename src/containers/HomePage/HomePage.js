import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'
import HomeHeader from './HomeHeader'
import Specialty from './Section/Specialty'

import './HomePage.scss'
import Facility from './Section/Facility'
import OutStandingDoctor from './Section/OutStandingDoctor'

class HomePage extends Component {
    render() {
        let settings = { dots: false, infinite: true, speed: 500, slidesToShow: 4, slidesToScroll: 1 }

        return (
            <div className="home-page">
                <HomeHeader />
                <Specialty settings={settings} />
                <Facility settings={settings} />
                <OutStandingDoctor settings={settings} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
