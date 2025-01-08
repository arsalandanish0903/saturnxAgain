import React from 'react';

const images = [
    { src: '/imageGallery4.jpg', alt: 'Gallery Image 1', text: 'The SaturnX team is dedicated to delivering innovative solutions and exceptional service. Our diverse group of professionals collaborates to empower clients with cutting-edge technology and tailored strategies, ensuring success in every project.' },
    { src: '/imageGallery2.jpg', alt: 'Gallery Image 2', text: 'At SaturnX, our mission is to empower businesses by providing innovative technology solutions that drive growth and efficiency. We strive to create a seamless digital experience, enabling our clients to achieve their goals and transform their visions into reality.' },
    { src: '/imageGallery3.jpg', alt: 'Gallery Image 3', text: 'At SaturnX, we create intuitive and high-performance mobile applications for iOS and Android. Our expert team delivers tailored solutions that enhance user engagement and drive business growth, ensuring your app stands out in a competitive market.' },
    { src: '/imageGallery1.jpg', alt: 'Gallery Image 4', text: 'our vision is to be a leader in innovative technology solutions that empower businesses to thrive in a digital world. We aim to transform ideas into impactful realities, driving progress and excellence for our clients.' },
    { src: '/collabrative1.jpg', alt: 'Gallery Image 5', text: 'Choose SaturnX for our commitment to delivering tailored, cutting-edge solutions that drive business success. Our expert team combines innovation and industry expertise to ensure your vision is realized with exceptional quality and efficiency.' },
    { src: '/imageGallery5.jpg', alt: 'Gallery Image 6', text: 'At SaturnX, we leverage the latest technologies, including AI, cloud computing, and mobile development, to create innovative solutions that meet the evolving needs of businesses. Our focus on cutting-edge tools ensures optimal performance, scalability, and security for all our projects.' },
    { src: '/imageGallery6.jpg', alt: 'Gallery Image 7', text: 'At SaturnX, our goals are to deliver exceptional technology solutions that drive client success, foster innovation, and enhance user experiences. We aim to continuously improve our services, expand our expertise, and build lasting partnerships that contribute to sustainable growth.' },
];

function ImageGallery() {
    return (
        <div className="py-16 px-6 lg:px-0 w-full relative">
            <div className='flex flex-col items-center justify-center mb-8'>
                <h4 className="text-2xl max-w-4xl font-bold text-center">
                    Experience seamless integration and unparalleled performance tailored to your needs. Innovating the future of technology, SaturnX empowers your vision with cutting-edge solutions.
                </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* First Image - 50% width */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-2 relative overflow-hidden group">
                    <img
                        src={images[0].src}
                        alt={images[0].alt}
                        className="w-full h-[300px] object-cover transition-transform duration-300 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                    <div className="absolute inset-0 flex px-8 items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="text-lg text-center">{images[0].text}</span>
                    </div>
                </div>

                {/* Second and Third Images - 25% width each */}
                {images.slice(1).map((image, index) => (
                    <div key={index} className="col-span-1 sm:col-span-1 lg:col-span-1 relative overflow-hidden group">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-[300px] object-cover transition-transform duration-300 transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                        <div className="absolute inset-0 flex px-8 items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="text-lg text-center">{image.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;