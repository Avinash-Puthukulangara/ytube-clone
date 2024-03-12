import React from 'react'
import './Recommended.css'
import thumbnail17 from '../../assets/thumbnail17.jpg'
import thumbnail2 from '../../assets/thumbnail2.jpg'
import thumbnail3 from '../../assets/thumbnail3.jpg'
import thumbnail18 from '../../assets/thumbnail18.jpg'
import thumbnail5 from '../../assets/thumbnail5.jpg'
import thumbnail6 from '../../assets/thumbnail6.jpg'
import thumbnail7 from '../../assets/thumbnail7.jpg'
import thumbnail8 from '../../assets/thumbnail8.jpg'
import thumbnail4 from '../../assets/thumbnail16.jpg'

const Recommended = () => {
  return (
    <div className='recommended'>
        <div className="side-video-list">
            <img src={thumbnail17} alt=''/>
            <div className="vid-info">
                <h4>Unboxing! My New Iphone</h4>
                <p>Unboxing guy</p>
                <p>198k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail8} alt=''/>
            <div className="vid-info">
                <h4>4 BHK home with cheap rate</h4>
                <p>Perfect Home</p>
                <p>20k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail7} alt=''/>
            <div className="vid-info">
                <h4>My New Game Setup</h4>
                <p>Gammygames</p>
                <p>100k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail6} alt=''/>
            <div className="vid-info">
                <h4>Last party i attended</h4>
                <p>Chillax</p>
                <p>604k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail5} alt=''/>
            <div className="vid-info">
                <h4>How to treat patients</h4>
                <p>Dr.sed</p>
                <p>10k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail18} alt=''/>
            <div className="vid-info">
                <h4>First Climb at the top</h4>
                <p>WandeRoR</p>
                <p>198k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail3} alt=''/>
            <div className="vid-info">
                <h4>New Ride</h4>
                <p>Rider</p>
                <p>150k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail2} alt=''/>
            <div className="vid-info">
                <h4>My Daily Companions</h4>
                <p>TechCraft</p>
                <p>5k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail4} alt=''/>
            <div className="vid-info">
                <h4>Let's See How things will be!</h4>
                <p>GoWhere</p>
                <p>55k Views</p>
            </div>
        </div>
    </div>
  )
}

export default Recommended