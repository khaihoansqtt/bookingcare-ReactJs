import React, { Component } from 'react'
import Slider from 'react-slick'

import './Specialty.scss'
import specialty from '../../../assets/images/specialty/co-xuong-khop.jpg'

class Specialty extends Component {
    render() {
        return (
            <div className="home__section-container specialty-section">
                <div className="home__section-header">
                    <span>Chuyên khoa phổ biến</span>
                    <button>Xem thêm</button>
                </div>
                <div className="home__section-body">
                    <Slider {...this.props.settings}>
                        <div>
                            <img className="section-img" src={specialty} alt="chuyen khoa" />
                            <div className="section-title">Cơ Xương Khớp</div>
                        </div>
                        <div>
                            <img className="section-img" src={specialty} alt="chuyen khoa" />
                            <div className="section-title">Cơ Xương Khớp</div>
                        </div>
                        <div>
                            <img className="section-img" src={specialty} alt="chuyen khoa" />
                            <div className="section-title">Cơ Xương Khớp</div>
                        </div>
                        <div>
                            <img className="section-img" src={specialty} alt="chuyen khoa" />
                            <div className="section-title">Cơ Xương Khớp</div>
                        </div>
                        <div>
                            <img className="section-img" src={specialty} alt="chuyen khoa" />
                            <div className="section-title">Cơ Xương Khớp</div>
                        </div>
                        <div>
                            <img className="section-img" src={specialty} alt="chuyen khoa" />
                            <div className="section-title">Cơ Xương Khớp</div>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Specialty
