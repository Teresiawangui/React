import './index.css'
import Logo from '../logo.svg'
const About = ()=>{
    return(
        <div>
            <p className="about">I am learning ReactJS which is a JavaScript frontEnd Library</p>
            <img src= {Logo} alt='logo'/>
        </div>
    )
}
export default About;