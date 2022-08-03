import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact  } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't']} 
                        idx={15} />&nbsp;
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={ ['M', 'e']} 
                        idx={20} />
                </h1>
                <p>I’m a full-stack engineer from Los Angeles, CA with experience in both web and mobile development. Throughout my career I have had the privilege to work at start-ups such as Virtus Active, a Fortune 500 corporation, an architectural design studio and numerous personal projects. Alongside development I have also worked on teams focused on data science and technical support.</p>
                <p>I am great at coming up with creative solutions to any problem I encounter and I work great both individually and as a part of a team. I am a very dedicated, passionate person and do everything to the best of my abilities. When I am not working on a project, I enjoy weightlifting, outdoor activities, traveling, cooking, drinking coffee and creating digital content.</p>
                <p>I am willing to take on any project, collaborate with any developer or even just chat with someone to give guidance on how to start their career in development so reach out to me and let's get started. <br /><br />P.S. I’ll buy the first cup of coffee. </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubeSpin'>
                    <div className='face1'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face2'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face3'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face4'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face5'>
                    <FontAwesomeIcon icon={faPython} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About