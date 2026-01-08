import category from '../assets/categories1.png'
import './SectionCategories.css'
const SectionCategories = () => {
  return (
    <div className='categoriesDiv'>
        <div className="sectionItem">
            <div className="title">
                <h4>For Collage</h4>
                <p>Find Proffesional standard across at the skills</p>
                <button>Subscibe Now</button>
            </div>
            <div className="imgRight">
              <img src={category} alt="" />
            </div>
        </div>
           <div className="sectioncardItem">
            <div className="title">
                <h4>For Graduate</h4>
                <p>Find Proffesional standard across at the skills</p>
                <button>Subscibe Now</button>
            </div>
            <div className="imgRight">
              <img src={category} alt="" />
            </div>
        </div>
    </div>
  )
}
export default SectionCategories