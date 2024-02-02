import React from 'react'
import './Card.css'
import profileImg from '../../assets/profile.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Card = () => {
    return (
        <>
            <div className="container">

                <div className="firstRow">
                    <div className="version-1">
                        <div className="version-content">
                            <div className="image">
                                <img src={profileImg} alt="profile Image" />
                            </div>
                            <div className="infos">
                                <div className="info">
                                    <h1>Khalfi Aymen</h1>
                                    <p>Full Stack Web Developer</p>
                                    <h6>WebSite</h6>
                                    <div className="buttons">
                                        <button>
                                            <i class="fa-solid fa-envelope"></i>
                                            Email
                                        </button>
                                        <button>
                                            <i class="fa-brands fa-linkedin"></i>
                                            Linked In
                                        </button>
                                    </div>
                                </div>
                                <div className="about">
                                    <div>
                                        <h1>About</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum illo quas quasi nisi porro incidunt voluptatem necessitatibus vitae impedit tempore, aut, labore cum. Officiis incidunt commodi cum voluptatem quaerat.</p>
                                    </div>
                                    <div>
                                        <h1>Interests</h1>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro inventore quod delectus, optio laudantium reprehenderit facere alias amet exercitationem officia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-container">
                            <div className="contact">
                                <i class="fa-brands fa-square-twitter"></i>
                                <i class="fa-brands fa-square-facebook"></i>
                                <i class="fa-brands fa-square-instagram"></i>
                                <i class="fa-brands fa-square-github"></i>
                            </div>
                        </div>
                    </div>
                    <div className="version-2">
                        <div className="version-content">
                            <div className="image">
                                <img src={profileImg} alt="profile Image" />
                            </div>
                            <div className="infos">
                                <div className="info">
                                    <h1>Khalfi Aymen</h1>
                                    <p>Full Stack Web Developer</p>
                                    <h6>WebSite</h6>
                                    <div className="buttons">
                                        <button>
                                            <i class="fa-solid fa-envelope"></i>
                                            Email
                                        </button>
                                    </div>
                                </div>
                                <div className="about">
                                    <div>
                                        <h1>About</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum illo quas quasi nisi porro incidunt voluptatem necessitatibus vitae impedit tempore, aut, labore cum. Officiis incidunt commodi cum voluptatem quaerat.</p>
                                    </div>
                                    <div>
                                        <h1>Interests</h1>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro inventore quod delectus, optio laudantium reprehenderit facere alias amet exercitationem officia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-container">
                            <div className="contact">
                                <i class="fa-brands fa-square-twitter"></i>
                                <i class="fa-brands fa-square-facebook"></i>
                                <i class="fa-brands fa-square-instagram"></i>
                                <i class="fa-brands fa-square-github"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card