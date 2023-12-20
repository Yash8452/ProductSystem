import React from 'react'
import Layout from '../components/layout/Layout'

const About = () => {
    return (
        <Layout>
            <div className="responsive-container-block bigContainer">
                <div className="responsive-container-block Container">
                    <img className="mainImg" alt='aout' src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg" />
                    <div className="allText aboveText">
                        <p className="text-blk headingText">
                            Our Mission
                        </p>
                        <p className="text-blk subHeadingText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className="text-blk description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
                        </p>
                        <button className="explore">
                            Explore
                        </button>
                    </div>
                </div>
             
            </div>

        </Layout>

    )
}

export default About