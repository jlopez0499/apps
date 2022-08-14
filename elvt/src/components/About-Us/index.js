import './index.scss';
import headshot from '../../assets/media/headshot.png';
import avatar from '../../assets/media/profile.png';
import job from '../../assets/media/job.jpg';
const About = () =>{
    return(
        <div className='about-page'>
            <h1>About Us</h1>
            <p>Tempus imperdiet nulla malesuada pellentesque. </p>
            <div className='call-2-action'>
                <div className='cta-header'>
                    <h2>Changing the creative works industry one project at a time.</h2>
                </div>
                <div className='cta-body'>
                    <p>Donec massa sapien faucibus et molestie ac feugiat sed lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Purus semper eget duis at tellus. Commodo sed egestas egestas fringilla. Mattis rhoncus urna neque viverra justo. </p>
                </div>
            </div>
            <div className='team'>
                <h2>Our Team</h2>
                <p>Quis ipsum suspendisse ultrices gravida dictum. Et odio pellentesque diam volutpat commodo.</p>
                <div className='grid'>
                    <div className='grid-item'>
                        <img src={headshot} alt='headshot'/>
                        <h3>Justin Lopez</h3>
                        <p>Founder / CTO</p>
                    </div>
                    <div className='grid-item'>
                        <img src={avatar} alt='headshot'/>
                        <h3>Jessica Lemus</h3>
                        <p>Vice President of Marketing / Brand Manager</p>
                    </div>
                    <div className='grid-item'>
                        <img src={avatar} alt='headshot'/>
                        <h3>John Smith</h3>
                        <p>Content Creator</p>
                    </div>
                    <div className='grid-item'>
                        <img src={avatar} alt='headshot'/>
                        <h3>Jane Smith</h3>
                        <p>COO</p>
                    </div>
                    <div className='grid-item'>
                        <img src={avatar} alt='headshot'/>
                        <h3>Justin Lopez</h3>
                        <p>Founder / CTO</p>
                    </div>
                    <div className='grid-item'>
                        <img src={avatar} alt='headshot'/>
                        <h3>Justin Lopez</h3>
                        <p>Founder / CTO</p>
                    </div>
                </div>
            </div>
            <div className='work-opportunity'>
                <div className='work-header'>
                    <h2>Looking for a new opportunity to express your creativity?</h2>
                    <p>Donec massa sapien faucibus et molestie ac feugiat sed lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Purus semper eget duis at tellus. Commodo sed egestas egestas fringilla. Mattis rhoncus urna neque viverra justo. </p>
                    <button>Open Positions</button>
                </div>
                <div className='work-body'>
                    <img src={job} alt='job-search'/>
                </div>
            </div>
        </div>
    )
}

export default About;