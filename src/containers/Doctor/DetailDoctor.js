import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userServices } from '../../services/'

import * as actions from '../../store/actions'
import HomeHeader from '../HomePage/HomeHeader'

import './DetailDoctor.scss'

class DetailDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailDoctor: {},
        }
    }
    async componentDidMount() {
        // if (this.props.match && this.props.match.params && this.props.match.params.id) {
        let doctorId = this.props.match.params.id
        let res = await userServices.getDetailDoctor(doctorId)
        if (res && res.errCode === 0) {
            this.setState({
                detailDoctor: res.data,
            })
        }
        // }
    }

    render() {
        const { language } = this.props
        const { detailDoctor } = this.state
        console.log(language)
        let doctorName = ''
        if (detailDoctor && detailDoctor.positionData) {
            doctorName =
                language === 'vi'
                    ? `${detailDoctor.positionData.valueVi} ${detailDoctor.lastName} ${detailDoctor.firstName}`
                    : `${detailDoctor.positionData.valueEn} ${detailDoctor.lastName} ${detailDoctor.firstName}`
        }
        return (
            <div className="detail-doctor">
                <HomeHeader isShowBanner={false} />
                <div className="detail-doctor-container">
                    <div className="doctor-overview">
                        <div
                            className="doctor-img"
                            style={{ backgroundImage: `url(${detailDoctor && detailDoctor.image})` }}
                        ></div>
                        <div className="doctor-info">
                            <div className="doctor-info-header">{doctorName}</div>
                            <div className="doctor-info-description">
                                {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.description}
                            </div>
                        </div>
                    </div>
                    <div
                        className="detail-doctor-info"
                        dangerouslySetInnerHTML={{
                            __html: detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.contentHTML,
                        }}
                    ></div>
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
        processLogout: () => dispatch(actions.processLogout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor)
