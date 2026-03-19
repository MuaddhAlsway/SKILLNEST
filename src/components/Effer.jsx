import './Effer.css'
import img from '../assets/img.jpg'
import img1 from '../assets/img1.jpg'

const Effer = () => {
  return (
    <div className='efforcontainer'>
        <div className="EfferContainer">
            <div className="RightSide">
                <div className="img1">
                    <img src={img} alt="" />
                    
                </div>
                <div className="img2">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="leftside">
                <span>WHAT WE OFFER</span>
                <h2>Distant Learning</h2>
                <p>
                    Our Platform is know for the high-Quality education programs. We works with the best teachers who know how to engage students in the learning activites
                </p>
                <button>
                    READ MORE
                </button>
            </div>
        </div>
    </div>
  )
}
export default Effer