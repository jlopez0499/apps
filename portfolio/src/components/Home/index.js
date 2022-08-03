import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const who = ['I','\'','m',]
    const nameArray = [ ' J', 'u', 's', 't', 'i', 'n']
    const jobTitle1 = ['F', 'u', 'l', 'l']
    const jobTitle2 = ['S', 't', 'a', 'c', 'k']
    const jobTitle3 = [' E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _11`}>i</span>
                <span className={`${letterClass} _12`}>,</span> <br />
                <AnimatedLetters letterClass={letterClass} strArray={who} idx={13}/>&nbsp;
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobTitle1} idx={22}/>&nbsp;
                <AnimatedLetters letterClass={letterClass} strArray={jobTitle2} idx={26}/>&nbsp;
                <AnimatedLetters letterClass={letterClass} strArray={jobTitle3} idx={31}/>
                <br />
                </h1>
                <h2>Web Developer / iOS Developer / Content Creator</h2>
                <br />
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home