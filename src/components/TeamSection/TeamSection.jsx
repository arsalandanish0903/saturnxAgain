import React from 'react';
import './TeamSection.css'

function TeamSection() {
    return (
        <div className="py-16 px-6 lg:px-0 w-full relative bg-gray-200">
            <div className='container mx-auto max-w-[1140px]'>
                <h4 className="text-black text-xl md:text-4xl xl:text-4xl font-semibold max-w-5xl mx-auto mb-16 leading-snug text-center">Our Teams</h4>
                <div className='grid grid-cols-1  lg:grid-cols-4 gap-4 items-center justify-items-center'>
                    <div className="profile-card">
                        <div className="img">
                            <img src="/swapnilsarwe.jpg" alt="Swapnil" />
                        </div>
                        <div className="caption">
                            <h3>Swapnil Sarwe</h3>
                            <p>Senior PHP Developer</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="/danish.jpg" alt="Danish" />
                        </div>
                        <div className="caption">
                            <h3>Arsalan Danish</h3>
                            <p>Front End Developer</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="/prajyot.png" alt="Tom Cruise" />
                        </div>
                        <div className="caption">
                            <h3>Tom Cruise</h3>
                            <p>Full Stack Developer</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg" alt="Tom Cruise" />
                        </div>
                        <div className="caption">
                            <h3>Tom Cruise</h3>
                            <p>Full Stack Developer</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamSection;
