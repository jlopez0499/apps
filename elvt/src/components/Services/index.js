import './index.scss';
import React from 'react';

// import web from '../../assets/media/webdevelopment.png';
// import graphic from '../../assets/media/graphic (1).png';
// import mobile from '../../assets/media/mobile.png';
const servicesList = [{title: 'Web Design & Development', src:'https://github.com/jlopez0499/imgLibrary/blob/master/webdevelopment.png?raw=true', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.'},
                        {title: 'Mobile Design & Development', src:'https://github.com/jlopez0499/imgLibrary/blob/master/mobile.png?raw=true', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.'},
                        {title: 'Graphic Design', src:'https://github.com/jlopez0499/imgLibrary/blob/master/graphic%20(1).png?raw=true', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.'},
                        {title: 'Photography', src:'https://github.com/jlopez0499/imgLibrary/blob/master/photo.png?raw=true', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.'},
                        {title: 'Videography', src:'https://github.com/jlopez0499/imgLibrary/blob/master/video%20(1).png?raw=true', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.'},
                    ];


const Services = () => {
    return(
        <div className='services-page'>
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            {/* <div class="cards">
                <div class="card">
                    <div class="container">
                        <img src={web} alt="las vegas" />
                    </div>
                    <div class="details">
                        <h3>Web Design & Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <img src={graphic} alt="New York" />
                    </div>
                    <div class="details">
                        <h3>Graphic Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <img src={mobile} alt="Singapore" />
                    </div>
                    <div class="details">
                        <h3>Mobile Design & Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    </div>
                </div>
            </div> */}
            <div className='cards'>
            {servicesList.map(({ title, src, description }) => (
                <div class="card">
                    <div class="container">
                        <img src={src} alt={title} />
                    </div>
                    <div class="details">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            ))};
            </div>
        </div>
    )
}



export default Services;