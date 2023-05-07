import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBBtn
} from 'mdb-react-ui-kit';
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaGoogle,
    FaHome,
    FaQuestion
} from 'react-icons/fa';



const Footer = () => {
    return (
        <div className="bg-dark text-center text-white" style={{ width: "100vw" }}>
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/FantomFromUA" role="button">
                        <FaGithub />
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/erik-toronyi-7b3320245/" role="button">
                        <FaLinkedin />
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/fantom7_777/" role="button">
                        <FaInstagram />
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
                        <FaHome />
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="/about" role="button">
                        <FaQuestion />
                    </a>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: "grey" }}>
                © 2023 My Custom ANIME-LIST
            </div>
        </div>
    );
}

export default Footer;