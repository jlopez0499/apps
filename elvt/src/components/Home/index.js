import './index.scss';

const Home = () => {
    return(
        <div className='home-page'>
            <div className='hero'>
                <div className='text-box'>
                    <h1>ELVT Studios</h1>
                    <h2>Digital Product and Media Studio</h2>
                </div>
            </div>
            <div className='services'>
                <h1>Services</h1>
                <p>We provide the following digital products and services to elevate your brand or company to the next level.</p>
                <div className='grid'>
                    <div className='grid-item'>
                        <img src='https://raw.githubusercontent.com/jlopez0499/imgLibrary/884e7a7cb22afe66fa79251b14215dc7f31314cd/desktop.svg' alt='desktop'/>
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                    <div className='grid-item'>
                        <img src='https://raw.githubusercontent.com/jlopez0499/imgLibrary/884e7a7cb22afe66fa79251b14215dc7f31314cd/mobile.svg' alt='cellphone'/>
                        <h2>Mobile App Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                    <div className='grid-item'>
                        <img src='https://raw.githubusercontent.com/jlopez0499/imgLibrary/884e7a7cb22afe66fa79251b14215dc7f31314cd/graphic.svg' alt='paintbrush'/>
                        <h2>Graphic Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                    <div className='grid-item'>
                        <img src='https://raw.githubusercontent.com/jlopez0499/imgLibrary/884e7a7cb22afe66fa79251b14215dc7f31314cd/photo.svg' alt='camera'/>
                        <h2>Photography</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                    <div className='grid-item'>
                        <img src='https://raw.githubusercontent.com/jlopez0499/imgLibrary/884e7a7cb22afe66fa79251b14215dc7f31314cd/video.svg' alt='video'/>
                        <h2>Videography</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                </div>
            </div>
            <div className='partners'>
                <h1>Companies We Have Partnered With</h1>
                <p>Ultrices dui sapien eget mi proin sed. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
            <div className='process'>
                <div className='split-process-image'>
                    {/* <img src='https://github.com/jlopez0499/imgLibrary/blob/master/desk.jpg?raw=true' alt='desk'/> */}
                </div>
                <div className='split-process-text'>
                    <h1>How We Work</h1>
                    <div className='text-row'>
                        <div className='step-header'><img src='https://raw.githubusercontent.com/jlopez0499/imgLibrary/f31c8d1490c1bbce0d316fd63f992a67aac60250/research.svg' alt='research'/><h2>Research</h2></div>
                        <p>Condimentum vitae sapien pellentesque habitant morbi. Nisl pretium fusce id velit ut tortor pretium viverra. Vitae justo eget magna fermentum iaculis eu.</p>
                    </div>
                    <div className='text-row'>
                        <div className='step-header'><img src='https://raw.githubusercontent.com/jlopez0499/imgLibrary/f31c8d1490c1bbce0d316fd63f992a67aac60250/plan.svg' alt='plan'/><h2>Plan</h2></div>
                        <p>Condimentum vitae sapien pellentesque habitant morbi. Nisl pretium fusce id velit ut tortor pretium viverra. Vitae justo eget magna fermentum iaculis eu.</p>
                    </div>
                    <div className='text-row'>
                        <div className='step-header'><img src='https://raw.githubusercontent.com/jlopez0499/imgLibrary/f31c8d1490c1bbce0d316fd63f992a67aac60250/execute.svg' alt='execute'/><h2>Execute</h2></div>
                        <p>Condimentum vitae sapien pellentesque habitant morbi. Nisl pretium fusce id velit ut tortor pretium viverra. Vitae justo eget magna fermentum iaculis eu.</p>
                    </div>
                    <div className='text-row'>
                        <div className='step-header'><img src='https://raw.githubusercontent.com/jlopez0499/imgLibrary/f31c8d1490c1bbce0d316fd63f992a67aac60250/deliver.svg' alt='deliver'/><h2>Deliver</h2></div>
                        <p>Condimentum vitae sapien pellentesque habitant morbi. Nisl pretium fusce id velit ut tortor pretium viverra. Vitae justo eget magna fermentum iaculis eu.</p>
                    </div>
                </div>
            </div>
            <div className='previous-work'>
               <h1>Some of Our Previous Projects</h1>
               <div className='project-gallery'>
                <div className='gallery-section'></div>
                <div className='gallery-section'></div>
                <div className='gallery-section'></div>
               </div>
            </div>
            <div className='about-elvt'>
                <div className='image'><img src='https://github.com/jlopez0499/imgLibrary/blob/master/team.jpg?raw=true' alt='team'/></div>
                <div className='text-box'>
                    <h2>Designed and Developed by A Professional, Dedicated Team of Developers.</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Vitae auctor eu augue ut lectus arcu bibendum at. Leo urna molestie at elementum eu. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Morbi tristique senectus et netus et malesuada fames.</p>
                    <button>About Us</button>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Home