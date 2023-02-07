import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Slider from 'react-slick'

import * as actions from '../../../store/actions'

class OutStandingDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topDoctors: [],
        }
    }

    componentDidMount() {
        this.props.getTopDoctors(5)
        console.log(this.props)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.topDoctors !== this.props.topDoctors) {
            this.setState({
                topDoctors: this.props.topDoctors,
            })
        }
    }

    handleRedirect = (doctor) => {
        this.props.history.push(`/detail-doctor/${doctor.id}`)
    }

    render() {
        const { topDoctors } = this.state
        console.log(topDoctors)
        const { language } = this.props
        return (
            <div className="home__section-container outStandingDoctor-section">
                <div className="home__section-header">
                    <span>Bác sĩ nổi bật tuần qua</span>
                    <button>Xem thêm</button>
                </div>
                <div className="home__section-body">
                    <Slider {...this.props.settings}>
                        {topDoctors &&
                            topDoctors.length > 0 &&
                            topDoctors.map((item, index) => {
                                const b64 = new Buffer(item.image, 'base64').toString('binary')

                                return (
                                    <div
                                        key={index}
                                        className="out-standing-doctor-content"
                                        onClick={() => this.handleRedirect(item)}
                                    >
                                        <div className="out-standing-doctor-border">
                                            <div className="custom-image">
                                                <img
                                                    className="section-img out-standing-doctor-img"
                                                    src={b64}
                                                    alt="bac si"
                                                />
                                            </div>
                                            <div className="section-title">
                                                {language === 'vi'
                                                    ? `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`
                                                    : `${item.positionData.valueEn}, ${item.lastName} ${item.firstName}`}
                                            </div>
                                            <div className="section-title2">Da liễu</div>
                                        </div>
                                    </div>
                                )
                            })}
                    </Slider>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topDoctors: state.admin.topDoctors,
        language: state.app.language,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTopDoctors: (limit) => dispatch(actions.getTopDoctors(limit)),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor))
