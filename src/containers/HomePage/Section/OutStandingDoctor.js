import React, { Component } from 'react'
import Slider from 'react-slick'

import outStandingDoctor from '../../../assets/images/outStandingDoctor/bs-hoai-huong.jpg'

class OutStandingDoctor extends Component {
    render() {
        return (
            <div className="home__section-container outStandingDoctor-section">
                <div className="home__section-header">
                    <span>Bác sĩ nổi bật tuần qua</span>
                    <button>Xem thêm</button>
                </div>
                <div className="home__section-body">
                    <Slider {...this.props.settings}>
                        <div className="out-standing-doctor-content">
                            <div className="out-standing-doctor-border">
                                <img className="section-img out-standing-doctor-img" src={outStandingDoctor} />
                                <div className="section-title">Bác sĩ chuyên khoa II Trần Thị Hoài Thương</div>
                                <div className="section-title2">Da liễu</div>
                            </div>
                        </div>
                        <div className="out-standing-doctor-content">
                            <div className="out-standing-doctor-border">
                                <img className="section-img out-standing-doctor-img" src={outStandingDoctor} />
                                <div className="section-title">Bác sĩ chuyên khoa II Trần Thị Hoài Thương</div>
                                <div className="section-title2">Da liễu</div>
                            </div>
                        </div>
                        <div className="out-standing-doctor-content">
                            <div className="out-standing-doctor-border">
                                <img className="section-img out-standing-doctor-img" src={outStandingDoctor} />
                                <div className="section-title">Bác sĩ chuyên khoa II Trần Thị Hoài Thương</div>
                                <div className="section-title2">Da liễu</div>
                            </div>
                        </div>
                        <div className="out-standing-doctor-content">
                            <div className="out-standing-doctor-border">
                                <img className="section-img out-standing-doctor-img" src={outStandingDoctor} />
                                <div className="section-title">Bác sĩ chuyên khoa II Trần Thị Hoài Thương</div>
                                <div className="section-title2">Da liễu</div>
                            </div>
                        </div>
                        <div className="out-standing-doctor-content">
                            <div className="out-standing-doctor-border">
                                <img className="section-img out-standing-doctor-img" src={outStandingDoctor} />
                                <div className="section-title">Bác sĩ chuyên khoa II Trần Thị Hoài Thương</div>
                                <div className="section-title2">Da liễu</div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default OutStandingDoctor
