import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.jpg'
import thumbnail2 from '../../assets/thumbnail2.jpg'
import thumbnail3 from '../../assets/thumbnail3.jpg'
import thumbnail4 from '../../assets/thumbnail4.jpg'
import thumbnail5 from '../../assets/thumbnail5.jpg'
import thumbnail6 from '../../assets/thumbnail6.jpg'
import thumbnail7 from '../../assets/thumbnail7.jpg'
import thumbnail8 from '../../assets/thumbnail8.jpg'
import thumbnail9 from '../../assets/thumbnail9.jpg'
import thumbnail10 from '../../assets/thumbnail10.jpg'
import thumbnail11 from '../../assets/thumbnail11.jpg'
import thumbnail12 from '../../assets/thumbnail12.jpg'
import thumbnail13 from '../../assets/thumbnail13.jpg'
import thumbnail14 from '../../assets/thumbnail14.jpg'
import thumbnail15 from '../../assets/thumbnail15.jpg'
import thumbnail16 from '../../assets/thumbnail16.jpg'
import { Link } from 'react-router-dom'

function Feed() {
  return (
    <div className="feed">
      <Link to={`/video/23/65743`} className='card'>
        <img src={thumbnail1} alt=''/>
        <h2>What a Machine it is!!!</h2>
        <h3>Auto-Mad</h3>
        <p>55k views &bull; 3 days ago</p>
      </Link>
      <div className='card'>
        <img src={thumbnail2} alt=''/>
        <h2>My Daily Companians</h2>
        <h3>TechCraft</h3>
        <p>5k views &bull; 10 days ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail3} alt=''/>
        <h2>New Ride</h2>
        <h3>Rider</h3>
        <p>150k views &bull; 4 months ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail4} alt=''/>
        <h2>Our Version of "Chayya Chayya"</h2>
        <h3>D-Squad</h3>
        <p>7k views &bull; 2 days ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail5} alt=''/>
        <h2>How to treat patients </h2>
        <h3>Dr.sed</h3>
        <p>10k views &bull; 5 days ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail6} alt=''/>
        <h2>Last party i attended</h2>
        <h3>Chillax</h3>
        <p>604k views &bull; 3 days ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail7} alt=''/>
        <h2>My New Game Setup</h2>
        <h3>Gammygames</h3>
        <p>100k views &bull; 15 days ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail8} alt=''/>
        <h2>4 BHK home with cheap rate </h2>
        <h3>Perfect Home</h3>
        <p>20k views &bull; 2 days ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail15} alt=''/>
        <h2>Teach kids - Early age</h2>
        <h3>ParentWorld</h3>
        <p>90k views &bull; 8 days ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail16} alt=''/>
        <h2>Let's See How things will be!</h2>
        <h3>GoWhere</h3>
        <p>55k views &bull; 12 days ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail14} alt=''/>
        <h2>My Screen Time</h2>
        <h3>Gretobi</h3>
        <p>1k views &bull; 1 days ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail13} alt=''/>
        <h2>Wall Painting within 2 hours!</h2>
        <h3>ArtCart</h3>
        <p>7k views &bull; 2 days ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail12} alt=''/>
        <h2>Latest News around us</h2>
        <h3>Neebee</h3>
        <p>10k views &bull; 2 days ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail11} alt=''/>
        <h2>Practise Session..</h2>
        <h3>Raaga</h3>
        <p>64k views &bull; 19 days ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail10} alt=''/>
        <h2>Day20 Home Workout Challenge</h2>
        <h3>FitGet</h3>
        <p>100k views &bull; 3 days ago</p>
      </div>
      <div className='card'>
        <img src={thumbnail9} alt=''/>
        <h2>Tried this item first time...</h2>
        <h3>Foodyzz</h3>
        <p>98k views &bull; 2 months ago</p>
      </div>
    </div>
  )
}

export default Feed