import './Banner.css';
import scribbleArrow from '../assets/scribble.png';

const Banner = () => {
  return (
    <div className="BannerPadding">
      <div className="BannerContainer">
        <div className="Content">
          <span>Become an Educational Person</span>
          <h4>You Can Join with SKILLNEST as a Professional Student</h4>

          {/* Scribble arrow pointing to button */}
         
        </div>
 
        <div className="bannerButton">
           <div className='arrowarea'>
            <img src={scribbleArrow} alt="Scribble Arrow" className="scribbleArrow" />
            </div> 
          <button>
            Join Now
            {/* optional small arrow next to button */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
