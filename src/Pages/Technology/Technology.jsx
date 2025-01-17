import React from 'react';
// import { FaRobot, FaBlockchain, FaCloud, FaSatellite, FaNetworkWired } from 'react-icons/fa';
import Button from '../../components/Buttons/Button';
import CuttingEdgeTechnology from '../../components/CuttingEdgeTechnology/CuttingEdgeTechnology';
import ContactUs from '../ContactUs/ContactUs';

function Technology() {
    return (
        <>
            {/* Hero Section */}
            <div
                className="h-[500px] bg-white bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/technologyBanner.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    <div className="relative z-10 max-w-3xl text-center sm:text-left">
                        <h2 className="text-2xl lg:text-4xl text-white mb-4 font-bold max-w-4xl">
                        Cutting-Edge Technologies
                        </h2>
                        <p className="text-md sm:text-lg text-white mb-6">
                        At SaturnX Digital Solution Company, we harness a wide range of advanced technologies to provide world-class digital solutions. Whether it's software development, automation, or performance optimization, our expertise spans across the latest tools and platforms.
                        </p>
                        <Button
                            mainButton="Let's Talk"
                            btnPath="/contactus"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>
            <CuttingEdgeTechnology />
            {/* Main Content */}
            <div className='relative w-full py-16 px-6 lg:px-0 font-poppins'>
                <div className="container mx-auto max-w-[1140px]">
                    {/* Introduction */}
                    <header className="text-center my-8">
                        <h4 className="text-4xl font-bold text-gray-800">
                            Explore the World of Technology
                        </h4>
                        <p className="text-lg text-gray-600 mt-4">
                            Dive into the latest trends and innovations driving the future.
                        </p>
                    </header>

                    {/* Cards Section */}
                    <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 my-12">
                        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="70">
                                    <rect width="80" height="70" fill="#C4C4C4"></rect>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M42.0774 10.3803C42.0774 7.26604 42.3519 1 34.3253 1C27.9298 1 22.1158 7.88826 21.922 11.9437C17.1001 12.5909 12.5202 17.342 13.1559 23.4095C8.57283 25.6733 5.24872 37.7676 11.2287 43.5037C10.1419 48.4361 13.4861 59.7363 23.4724 58.8451C25.9034 72.0198 42.0774 71.6258 42.0774 61.9719V54.155" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M32.7748 21.324C27.1359 21.324 21.9218 20.4375 21.9218 11.9437" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M22.4724 32.0755C25.0834 33.7983 29.5021 33.1167 31.8742 30.6012C33.6262 28.7455 35.496 25.8001 37.4263 26.0143H42.0775H62.233" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M34.3254 54.4161C35.4649 51.7271 38.2014 51.0282 42.0775 51.0282H62.233" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M25.7332 49.9987C23.1347 49.5876 20.8416 47.1174 20.8416 45.0663" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M23.4724 58.8451C23.4724 52.8339 26.8539 45.0671 35.5161 45.0671" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M17.5812 27.4241C20.282 27.4241 22.4728 29.3518 22.4728 32.0752C22.4728 34.2233 21.1115 36.3307 19.2122 37.0077" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M51.3799 13.5071H42.0774C37.8618 13.5071 33.7144 12.8583 32.2555 9.22026" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M42.0774 16.6338V26.0141" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M42.0774 30.7043V47.9015" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M42.0774 38.5212H51.3799" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M45.1782 63.5353H51.3798" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.5354 26.0141C71.5354 28.6046 69.4532 30.7043 66.8841 30.7043C64.3151 30.7043 62.2328 28.6046 62.2328 26.0141C62.2328 23.4236 64.3151 21.324 66.8841 21.324C69.4532 21.324 71.5354 23.4236 71.5354 26.0141Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.6826 13.5071C60.6826 16.0976 58.6004 18.1972 56.0313 18.1972C53.4623 18.1972 51.3801 16.0976 51.3801 13.5071C51.3801 10.9165 53.4623 8.81692 56.0313 8.81692C58.6004 8.81692 60.6826 10.9165 60.6826 13.5071Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.6826 38.5212C60.6826 41.1117 58.6004 43.2113 56.0313 43.2113C53.4623 43.2113 51.3801 41.1117 51.3801 38.5212C51.3801 35.9306 53.4623 33.831 56.0313 33.831C58.6004 33.831 60.6826 35.9306 60.6826 38.5212Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.6826 63.5353C60.6826 66.1258 58.6004 68.2254 56.0313 68.2254C53.4623 68.2254 51.3801 66.1258 51.3801 63.5353C51.3801 60.9448 53.4623 58.8451 56.0313 58.8451C58.6004 58.8451 60.6826 60.9448 60.6826 63.5353Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.5354 51.0282C71.5354 53.6188 69.4532 55.7184 66.8841 55.7184C64.3151 55.7184 62.2328 53.6188 62.2328 51.0282C62.2328 48.4377 64.3151 46.3381 66.8841 46.3381C69.4532 46.3381 71.5354 48.4377 71.5354 51.0282Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        

                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Artificial Intelligence</h3>
                            <p className="text-gray-600">
                                Discover how AI is transforming industries with smarter solutions and advanced analytics.
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="70">
                                    <rect width="80" height="70" fill="#C4C4C4"></rect>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M46.1898 62.4671C46.1898 65.9487 43.3912 68.7715 39.9395 68.7715C36.4877 68.7715 33.6891 65.9487 33.6891 62.4671C33.6891 58.9856 36.4877 56.1628 39.9395 56.1628C43.3912 56.1628 46.1898 58.9856 46.1898 62.4671Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M46.1898 30.9455C46.1898 34.4271 43.3912 37.2499 39.9395 37.2499C36.4877 37.2499 33.6891 34.4271 33.6891 30.9455C33.6891 27.464 36.4877 24.6412 39.9395 24.6412C43.3912 24.6412 46.1898 27.464 46.1898 30.9455Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.689 7.30432C33.689 10.7859 30.8904 13.6086 27.4387 13.6086C23.9869 13.6086 21.1883 10.7859 21.1883 7.30432C21.1883 3.82276 23.9869 1 27.4387 1C30.8904 1 33.689 3.82276 33.689 7.30432Z" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M39.9394 53.0107V37.2498" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M35.2517 21.489L30.564 13.6086" stroke="#323232" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50.8774 41.9781C50.8774 45.4597 53.676 48.2824 57.1277 48.2824C60.5795 48.2824 63.3781 45.4597 63.3781 41.9781C63.3781 38.4965 60.5795 35.6738 57.1277 35.6738C53.676 35.6738 50.8774 38.4965 50.8774 41.9781Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M46.1897 7.30432C46.1897 10.7859 48.9883 13.6086 52.44 13.6086C55.8918 13.6086 58.6904 10.7859 58.6904 7.30432C58.6904 3.82276 55.8918 1 52.44 1C48.9883 1 46.1897 3.82276 46.1897 7.30432Z" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M63.3783 32.5216L66.5035 27.7934" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M47.7523 54.5867L53.2666 46.7063" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M75.879 21.489C75.879 24.9706 73.0804 27.7934 69.6286 27.7934C66.1769 27.7934 63.3783 24.9706 63.3783 21.489C63.3783 18.0075 66.1769 15.1847 69.6286 15.1847C73.0804 15.1847 75.879 18.0075 75.879 21.489Z" stroke="#323232" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0012 41.9781C29.0012 45.4597 26.2027 48.2824 22.7509 48.2824C19.2992 48.2824 16.5006 45.4597 16.5006 41.9781C16.5006 38.4965 19.2992 35.6738 22.7509 35.6738C26.2027 35.6738 29.0012 38.4965 29.0012 41.9781Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M16.5006 32.5216L13.3754 27.7934" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M32.1264 54.5867L26.612 46.7063" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 21.489C4 24.9706 6.79859 27.7934 10.2503 27.7934C13.7021 27.7934 16.5007 24.9706 16.5007 21.489C16.5007 18.0075 13.7021 15.1847 10.2503 15.1847C6.79859 15.1847 4 18.0075 4 21.489Z" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M44.6271 21.489L49.3149 13.6086" stroke="#323232" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Blockchain</h3>
                            <p className="text-gray-600">
                                Understand the power of decentralized solutions and secure digital ledgers.
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="70">
                                    <rect width="80" height="70" fill="#C4C4C4"></rect>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M23.8724 33.766C26.34 33.766 28.3405 31.7655 28.3405 29.2979C28.3405 26.8302 26.34 24.8298 23.8724 24.8298C21.4047 24.8298 19.4043 26.8302 19.4043 29.2979C19.4043 31.7655 21.4047 33.766 23.8724 33.766Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M53.6596 36.7447C56.1273 36.7447 58.1277 34.7443 58.1277 32.2766C58.1277 29.8089 56.1273 27.8085 53.6596 27.8085C51.192 27.8085 49.1915 29.8089 49.1915 32.2766C49.1915 34.7443 51.192 36.7447 53.6596 36.7447Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M53.6596 51.6383C56.1273 51.6383 58.1277 49.6379 58.1277 47.1702C58.1277 44.7026 56.1273 42.7021 53.6596 42.7021C51.192 42.7021 49.1915 44.7026 49.1915 47.1702C49.1915 49.6379 51.192 51.6383 53.6596 51.6383Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M38.766 27.8085C41.2337 27.8085 43.2341 25.8081 43.2341 23.3404C43.2341 20.8728 41.2337 18.8723 38.766 18.8723C36.2983 18.8723 34.2979 20.8728 34.2979 23.3404C34.2979 25.8081 36.2983 27.8085 38.766 27.8085Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M38.766 27.8085V71" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M50.6808 35.2553L44.7234 41.2128V50.1489" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M26.8511 32.2766L32.8085 38.234V47.1702" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M50.6808 51.6383L44.7234 57.5957V62.0638" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M62.5957 41.2128H64.0851C69.8489 41.2128 74.5106 36.5511 74.5106 30.7872C74.5106 25.0234 69.8489 20.3617 64.0851 20.3617C62.983 20.3617 61.9106 20.5404 60.9128 20.8532C61.0319 20.2128 61.1064 19.5574 61.1064 18.8723C61.1064 13.1085 56.4447 8.44681 50.6808 8.44681C48.0745 8.44681 45.7064 9.41489 43.8745 10.9936C41.834 5.17021 36.3234 1 29.8149 1C21.5936 1 14.9213 7.67234 14.9213 15.8936C14.9213 17.4574 15.1745 18.9766 15.6213 20.3915C10.2447 20.8085 6 25.3064 6 30.7872C6 36.5511 10.6617 41.2128 16.4255 41.2128H28.3404" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M43.9043 10.9787C44.2915 12.066 44.5447 13.2128 44.6639 14.4043" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M60.9127 20.8532C60.6744 22.0745 60.2276 23.2213 59.617 24.234" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M15.6213 20.3915C16.917 20.2872 18.2277 20.4362 19.4936 20.8234" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M32.8085 50.1489V53.1277" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M32.8085 56.1064V59.0851" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M44.7234 65.0426V68.0213" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M32.8085 62.0638V65.0426" stroke="#2A82F2" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Cloud Computing</h3>
                            <p className="text-gray-600">
                                Explore scalable solutions that drive efficiency and innovation.
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <svg width="89" height="72" viewBox="0 0 89 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.8378 65.1081V67.2162C38.8378 69.2973 37.1351 71 35.054 71H4.78378C2.7027 71 1 69.2973 1 67.2162V4.78378C1 2.7027 2.7027 1 4.78378 1H35.054C37.1351 1 38.8378 2.7027 38.8378 4.78378V9" stroke="#323232" stroke-linejoin="round"></path>
                                <path d="M13.9999 67H26.9999" stroke="#323232"></path>
                                <path d="M65.9999 67H71.9999" stroke="#323232"></path>
                                <path d="M50.1891 65.5V67.2162C50.1891 69.2973 51.8918 71 53.9729 71H84.2432C86.3243 71 88.027 69.2973 88.027 67.2162V4.78378C88.027 2.7027 86.3243 1 84.2432 1H53.9729C51.8918 1 50.1891 2.7027 50.1891 4.78378V9" stroke="#323232" stroke-linejoin="round"></path>
                                <path d="M74.4808 37H52.8711" stroke="#2A82F2" stroke-linejoin="round"></path>
                                <path d="M65.4839 46L74.4839 37L65.4839 28" stroke="#2A82F2" stroke-linejoin="round"></path>
                                <path d="M46.4054 36.9458H50.1892" stroke="#2A82F2" stroke-linejoin="round"></path>
                                <path d="M14.5483 37.1289L34.8709 37.1289" stroke="#2A82F2" stroke-linejoin="round"></path>
                                <path d="M44.5001 11.0161L44.5001 31.4968" stroke="#2A82F2" stroke-linejoin="round"></path>
                                <path d="M44.5001 62.4839L44.5001 42.0032" stroke="#2A82F2" stroke-linejoin="round"></path>
                                <path d="M23.5161 46L14.5161 37L23.5161 28" stroke="#2A82F2" stroke-linejoin="round"></path>
                                <path d="M35.5 20.0161L44.5 11.0161L53.5 20.0161" stroke="#2A82F2" stroke-linejoin="round"></path>
                                <path d="M53.5 53.4839L44.5 62.4839L35.5 53.4839" stroke="#2A82F2" stroke-linejoin="round"></path>
                                <path d="M42.6215 36.9458H38.8377" stroke="#2A82F2" stroke-linejoin="round"></path>
                                <path d="M11.9999 1L12.9472 2.89443C13.2859 3.572 13.9785 4 14.736 4H25.2639C26.0214 4 26.7139 3.572 27.0527 2.89443L27.9999 1" stroke="#323232"></path>
                                <path d="M64 1L68.1546 4.77696C68.9175 5.47045 70.0825 5.47045 70.8453 4.77696L75 1" stroke="#323232"></path>
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Quantum Computing</h3>
                            <p className="text-gray-600">
                                Discover the next frontier in computing with quantum algorithms and cryptography.
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="70">
                                    <rect width="80" height="70" fill="#C4C4C4"></rect>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M42.9535 10.4884V2.5814H30.3023V9.73563C27.9872 10.3334 25.8033 11.2443 23.7949 12.4303L18.736 7.37144L9.79005 16.3174L14.8489 21.3763C13.6629 23.3847 12.752 25.5686 12.1542 27.8837H5V40.5349H12.1542C12.752 42.85 13.6629 45.034 14.8489 47.0423L9.79005 52.1012L18.736 61.0472L23.7949 55.9883C25.8033 57.1743 27.9872 58.0852 30.3023 58.683V65.8372H42.9535V57.9302" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M42.9535 10.4884V2.5814H30.3023V9.73563C27.9872 10.3334 25.8033 11.2443 23.7949 12.4303L18.736 7.37144L9.79005 16.3174L14.8489 21.3763C13.6629 23.3847 12.752 25.5686 12.1542 27.8837H5V40.5349H12.1542C12.752 42.85 13.6629 45.034 14.8489 47.0423L9.79005 52.1012L18.736 61.0472L23.7949 55.9883C25.8033 57.1743 27.9872 58.0852 30.3023 58.683V65.8372H42.9535V57.9302" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M46.1163 16.814H47.6977L55.6046 8.90698" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M55.6047 61.093L46.1163 51.6047H36.6279C27.0209 51.6047 19.2326 43.8163 19.2326 34.2093C19.2326 24.6023 27.0209 16.814 36.6279 16.814" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M38.2093 42.1163H36.6279C32.2617 42.1163 28.7209 38.5755 28.7209 34.2093C28.7209 29.8431 32.2617 26.3023 36.6279 26.3023H49.2791L55.6047 19.9767H63.5116" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M63.5116 50.0233H57.186L49.2791 42.1163H47.6977" stroke="#323232" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.5116 5.74419C63.5116 8.36456 61.3878 10.4884 58.7674 10.4884C56.1471 10.4884 54.0233 8.36456 54.0233 5.74419C54.0233 3.12381 56.1471 1 58.7674 1C61.3878 1 63.5116 3.12381 63.5116 5.74419Z" stroke="#323232" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M73 19.9767C73 22.5971 70.8762 24.7209 68.2558 24.7209C65.6354 24.7209 63.5116 22.5971 63.5116 19.9767C63.5116 17.3564 65.6354 15.2326 68.2558 15.2326C70.8762 15.2326 73 17.3564 73 19.9767Z" stroke="#323232" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M73 34.2093C73 36.8297 70.8762 38.9535 68.2558 38.9535C65.6354 38.9535 63.5116 36.8297 63.5116 34.2093C63.5116 31.5889 65.6354 29.4651 68.2558 29.4651C70.8762 29.4651 73 31.5889 73 34.2093Z" stroke="#323232" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M73 50.0233C73 52.6436 70.8762 54.7674 68.2558 54.7674C65.6354 54.7674 63.5116 52.6436 63.5116 50.0233C63.5116 47.4029 65.6354 45.2791 68.2558 45.2791C70.8762 45.2791 73 47.4029 73 50.0233Z" stroke="#323232" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.5116 64.2558C63.5116 66.8762 61.3878 69 58.7674 69C56.1471 69 54.0233 66.8762 54.0233 64.2558C54.0233 61.6354 56.1471 59.5116 58.7674 59.5116C61.3878 59.5116 63.5116 61.6354 63.5116 64.2558Z" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M47.6977 34.2093H61.9302" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M35.0465 34.2093H38.2093" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M41.3721 34.2093H44.5349" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M41.3721 42.1163H44.5349" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M39.7907 16.814H42.9535" stroke="#323232" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Internet of Things (IoT)</h3>
                            <p className="text-gray-600">
                                See how connected devices are creating smarter ecosystems.
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="70">
                                    <rect width="80" height="70" fill="#C4C4C4"></rect>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M13.7302 17.2161H20.217L26.7038 26.9463H31.5689" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M13.7302 35.055H38.0558" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M13.7302 17.2175C13.7302 19.9744 11.622 22.0826 8.86512 22.0826C6.10822 22.0826 4 19.9744 4 17.2175C4 14.4606 6.10822 12.3524 8.86512 12.3524C11.622 12.3524 13.7302 14.4606 13.7302 17.2175Z" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M13.7302 35.0561C13.7302 37.813 11.622 39.9212 8.86512 39.9212C6.10822 39.9212 4 37.813 4 35.0561C4 32.2992 6.10822 30.191 8.86512 30.191C11.622 30.191 13.7302 32.2992 13.7302 35.0561Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M26.7039 9.10901L33.1907 18.8392H41.2992" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M28.3255 5.86512C28.3255 8.62201 26.2173 10.7302 23.4604 10.7302C20.7035 10.7302 18.5953 8.62201 18.5953 5.86512C18.5953 3.10822 20.7035 1 23.4604 1C26.2173 1 28.3255 3.10822 28.3255 5.86512Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M13.7302 52.895C13.7302 50.1381 11.622 48.0299 8.86512 48.0299C6.10822 48.0299 4 50.1381 4 52.895C4 55.6519 6.10822 57.7601 8.86512 57.7601C11.622 57.7601 13.7302 55.6519 13.7302 52.895Z" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M26.7039 61.0032L33.1907 51.273H41.2992" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M28.3255 64.2471C28.3255 61.4902 26.2173 59.382 23.4604 59.382C20.7035 59.382 18.5953 61.4902 18.5953 64.2471C18.5953 67.004 20.7035 69.1122 23.4604 69.1122C26.2173 69.1122 28.3255 67.004 28.3255 64.2471Z" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M41.2993 35.055H38.0559" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M13.7302 52.8953H20.217L26.7038 43.165H57.5162V47.868L76.1658 35.2187L57.5162 21.9207V26.948H41.2992" stroke="#323232" stroke-linejoin="round"></path>
                                    <path d="M51.0293 35.055H54.2727" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M44.5426 35.055H47.786" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M44.5426 18.8389H47.786" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M44.5426 51.273H47.786" stroke="#2A82F2" stroke-linejoin="round"></path>
                                    <path d="M38.0558 26.9479H34.8124" stroke="#323232" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Cybersecurity</h3>
                            <p className="text-gray-600">
                                Safeguard your data and systems with the latest in cybersecurity technologies.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <div className='relative py-16 px-6 lg:px-0 w-full bg-gray-200 font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <h4 className="text-2xl lg:text-4xl font-bold text-gray-800 max-w-4xl mb-4">Why Stay Updated?</h4>
                        <p className="text-gray-700 mb-6 max-w-4xl">
                            The tech landscape evolves rapidly. Staying updated ensures you remain competitive and ready for emerging opportunities. Embrace the change, adopt innovations, and lead the future. In a world where technology is constantly advancing, those who adapt will thrive. Here’s why you should stay ahead of the curve:
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 border bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <img src="/innovotiveDerives.jpg" alt="Innovation" className="w-full h-56 object-cover mb-4 rounded-lg" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation Drives Growth</h3>
                            <p className="text-gray-600">
                                Embracing new technologies opens the door to innovative solutions, increasing productivity and growth for businesses.
                            </p>
                        </div>

                        <div className="p-6 border bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <img src="/emergingNewOportunities.jpg" alt="Opportunities" className="w-full h-56 object-cover mb-4 rounded-lg" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Emerging Opportunities</h3>
                            <p className="text-gray-600">
                                By staying updated, you’re ready to seize new opportunities, whether it’s for career advancement or launching new products.
                            </p>
                        </div>

                        <div className="p-6 border bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <img src="/maintainCompetitve.jpg" alt="Competitiveness" className="w-full h-56 object-cover mb-4 rounded-lg" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Maintain Competitiveness</h3>
                            <p className="text-gray-600">
                                Keep up with trends to ensure you’re always ahead of the competition, making your offerings more relevant and appealing.
                            </p>
                        </div>

                        <div className="p-6 border bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <img src="/adoptTheBestTechnology.jpg" alt="Technology Adoption" className="w-full h-56 object-cover mb-4 rounded-lg" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Adopt the Best Technologies</h3>
                            <p className="text-gray-600">
                                Keeping up with new technology allows you to integrate the most efficient and effective tools, maximizing your potential.
                            </p>
                        </div>

                        <div className="p-6 border bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <img src="/safeTheFuture.jpg" alt="Future" className="w-full h-56 object-cover mb-4 rounded-lg" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Shape the Future</h3>
                            <p className="text-gray-600">
                                Stay at the forefront of emerging trends and become a thought leader by shaping the future of technology.
                            </p>
                        </div>

                        <div className="p-6 border bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <img src="/globalSoftware.jpg" alt="Connection" className="w-full h-56 object-cover mb-4 rounded-lg" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Connectivity</h3>
                            <p className="text-gray-600">
                                The interconnected world makes staying updated essential to communicate and collaborate with global networks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactUs />
        </>
    );
}

export default Technology;
