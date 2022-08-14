import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
// import Gallery from './gallery'
import Filtered from './filtered'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return(
        <>
            <div className='containerP projects-page'>
                <div className='gallery'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15}/>
                    </h1>
                    <div className='grid'>
                    <Filtered />
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Projects