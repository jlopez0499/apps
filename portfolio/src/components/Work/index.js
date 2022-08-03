import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useState } from 'react'
import Loader from 'react-loaders'

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return(
        <>
            <div className='container work-page'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}strArray={['R','e','s','u','m','e']} idx={15}></AnimatedLetters>
                </h1>
                <div className='line'></div>
                <ul>
                    <li>
                        <h3>Freelance Development</h3>
                        <p>Web and iOS Developer</p>
                        <p class="time">2019 - Present</p>
                    </li><br />
                    <li>
                        <h3>Pulp Studio Inc.</h3>
                        <p>Full-Stack Engineer</p>
                        <p class="time">February 2022 - Present</p>
                    </li><br />
                    <li>
                        <h3>A Couple Scratches Away</h3>
                        <p>Web Developer</p>
                        <p class="time">January 2022 - Present</p>
                    </li><br />
                    <li>
                        <h3>Stamps.com</h3>
                        <p>Senior Technical Support Specialist</p>
                        <p class="time">March 2021 - February 2022</p>
                    </li>
                </ul>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Work
