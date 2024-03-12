import React from 'react'
import './Playvideo.css'
import video1 from '../../assets/video111.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/user5.jpg'
import user_profile from '../../assets/user_profile.jpg'

const Playvideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls autoPlay muted></video>
      <h3>What a Machine it is!!!</h3>
      <div className="play-video-info">
        <p>55k Views &bull; 3 days ago</p>
        <div>
            <span><img src={like} alt=''/>6k</span>
            <span><img src={dislike} alt=''/>5</span>
            <span><img src={share} alt=''/>Share</span>
            <span><img src={save} alt=''/>Save</span>
        </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt=''/>
            <div>
                <p>Auto-Mad</p>
                <span>810k Subscribers</span>
            </div>
            <button>Subscribed</button>
        </div>
        <div className="vid-description">
            <p>All New Audi RS5.</p>
            <p>Let's checkout Audi's design brilliance and all new V6 engine.
                #Audirs5#fast#car#audi
            </p>
            <hr />
            <h4>90 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Sooraj Madhav<span>1 day ago</span></h3>
                    <p>Wow just loved it.</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>14</span>
                        <img src={dislike} alt=''/>
                        <span>1</span>
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Ramees<span>1 day ago</span></h3>
                    <p>My dream car.One day it will be mine🤩</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>10</span>
                        <img src={dislike} alt=''/>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Tony Mathew<span>1 day ago</span></h3>
                    <p>Audi fans like here</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>300</span>
                        <img src={dislike} alt=''/>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Sasikumar<span>1 day ago</span></h3>
                    <p>How about its top speed?</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>3</span>
                        <img src={dislike} alt=''/>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Susan<span>1 day ago</span></h3>
                    <p>Best Review i have ever seen</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span></span>
                        <img src={dislike} alt=''/>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Playvideo