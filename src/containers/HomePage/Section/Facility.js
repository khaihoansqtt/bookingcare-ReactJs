import React, { Component } from 'react'
import Slider from 'react-slick'

import facility from '../../../assets/images/facility/bv-viet-duc.jpg'

class Facility extends Component {
    render() {
        return (
            <div className="home__section-container facility-section">
                <div className="home__section-header">
                    <span>Cơ sở y tế nổi bật</span>
                    <button>Xem thêm</button>
                </div>
                <div className="home__section-body">
                    <Slider {...this.props.settings}>
                        <div>
                            <img className="section-img" src={facility} alt="benh vien" />
                            <div className="section-title">Bệnh viện hữu nghị Việt Đức</div>
                        </div>
                        <div>
                            <img className="section-img" src={facility} alt="benh vien" />{' '}
                            <div className="section-title">Bệnh viện hữu nghị Việt Đức</div>
                        </div>
                        <div>
                            <img className="section-img" src={facility} alt="benh vien" />{' '}
                            <div className="section-title">Bệnh viện hữu nghị Việt Đức</div>
                        </div>
                        <div>
                            <img className="section-img" src={facility} alt="benh vien" />{' '}
                            <div className="section-title">Bệnh viện hữu nghị Việt Đức</div>
                        </div>
                        <div>
                            <img className="section-img" src={facility} alt="benh vien" />{' '}
                            <div className="section-title">Bệnh viện hữu nghị Việt Đức</div>
                        </div>
                        <div>
                            <img className="section-img" src={facility} alt="benh vien" />{' '}
                            <div className="section-title">Bệnh viện hữu nghị Việt Đức</div>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Facility
