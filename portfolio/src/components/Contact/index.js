import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
    }, []);
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_qhsco7p',
                'template_4ob8i5p',
                refForm.current,
                'WvuvZveMlzW98puTO'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }
    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
                    idx={15}/>&nbsp;
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['M', 'e']}
                    idx={22}/>
                </h1>
                <p>Feel free to reach out to me for any type of development including new projects, design inqueries, updates, maintenance, or even just to grab a cup of coffee and get to know better and learn from each other. </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li className="half">
                                <input type="text" name="email" placeholder="email@email.com" required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="Send" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Justin Lopez,
                <br />
                Los Angeles, CA
                <br />
                United States
                <br />
                <span>justin@elvtstudios.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[34.0488, -118.2518]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[34.0488, -118.2518]}>
                        <Popup>Justin</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        
        <Loader type="pacman" />
        </>
    )
}

export default Contact