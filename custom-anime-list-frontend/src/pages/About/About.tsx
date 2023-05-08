import * as React from 'react';
import "./about.css"
import { Button } from 'react-bootstrap';

const About = () => {
    return (
        <div className='about-main-div'>
            <div className='banner'>
                <h1 className='banner-text'>MY CUSTOM ANIME-LIST</h1>
            </div>
            <div className='hero-component'>
                <img 
                    className='about-images'
                    src={"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/178212734/original/2c899f0384894c89b41c74ad8c4a922aff5c9dcb/create-special-reader-x-anime-character-just-for-you.jpg"}
                    alt="writing image"
                />
                <div className='about-text-div'>
                    <p>
                        <b>What have you watched?</b><br />
                        Create your personalized list from thousands of titles that are present on this anime list web-site.
                    </p>
                </div>
            </div>
            <div className='hero-component'>
                <div className='about-text-div'>
                    <p>
                        <b>Need to stay up to date?</b><br />
                        Use your list to organize and track what titles you’ve completed, your current progress, what you plan to watch or read and so much more.
                    </p>
                </div>
                <img 
                    className='about-images'
                    src={"https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/02/Featured-Image-Nichijou-Magnifying-Glass-Cropped.jpg"}
                    alt="writing image"
                />
            </div>
            <div className='sing-up-info'>
                <h2>Discover more about the world of anime and manga now!</h2>
                <Button variant="primary" size='lg'>Sign up</Button>
            </div>
        </div>
    );
}
 
export default About;