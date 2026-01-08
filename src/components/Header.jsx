import './Header.css'
import girl from '../assets/EducationGirl.png'
import women1 from '../assets/Women1.jpg'
import women2 from '../assets/women2.jpg'
import men1 from '../assets/men1.jpg'
import square from '../assets/square.png'
import notion from '../assets/notion.png'
import github from '../assets/github.png'


const Header = () => {
  return (
    <div className="HeaderContainer">
      
      {/* Left Section */}
      <div className="left">
        <div className="TextContent">
          <h1>
            Got Talent? <br />
            Meet Opportunity
          </h1>
          <p>High Education is our Standard</p>
        </div>

        <div className="ContainerSearch">
          <form className="Searchinput">
            <i className="bx bx-search"></i>

            <input 
              type="text" 
              placeholder="Search Courses"
            />

            <i className="bx bx-location"></i>
            <span>All Location</span>

            <button type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="titleSearch">
            <p>Trending Courses:</p>
            <span>Full Stack, Data Anaylsis, Machine Learning, AI, Cyber Security</span>
        </div>
    <div className="Trust">
  <p>Trusted by leading brands and startups</p>

  <div className="trustbrand">
    <div className="item">
      <img src={square} alt="Square logo" />
      <span>Square</span>
    </div>

    <div className="item">
      <img src={notion} alt="Notion logo" />
      <span>Notion</span>
    </div>

    <div className="item">
      <img src={github} alt="GitHub logo" />
      <span>GitHub</span>
    </div>
  </div>
</div>

      </div>

      {/* Right Section */}
      <div className="right">
        <div className="imgContainer">
          <img src={girl} alt="Education student illustration" />

          <div className="above">
            <i className="bx bx-notification"></i>
            <span>Job Alert Subscribe</span>
          </div>
          <div className="above1">
           
            <span>5K+ candidates getJob</span>
            <div className="imgcontainer">
                <img src={women1} alt="" />
            <img src={women2} alt="" />
            <img src={men1} alt="" />
            </div>
            
            <button>+</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header
