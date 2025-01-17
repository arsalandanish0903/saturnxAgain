import React from 'react'
import Button from '../../components/Buttons/Button'
import CustomMadeIt from '../../components/CustomMadeIt/CustomMadeIt'
import { FaArrowDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function TravelandHospitality() {
    const hospitalityIcons = [
        {
            svg: (<svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </svg>),
            title: 'Cloud Technologies',
        },
        {
            svg: (<svg width="89" height="72" viewBox="0 0 89 72" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </svg>),
            title: 'Native and Cross-Platform Mobile App Development',
        },
        {
            svg: (<svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </svg>),
            title: 'Legacy System Transformation',
        },
        {
            svg: (<svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </svg>),
            title: 'Interet Of Things (IoT)',
        },
        {
            svg: (<svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </svg>),
            title: 'Artificial Intelligence  & Machine Learning',
        },
        {
            svg: (<svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </svg>),
            title: 'Blockchain',
        }

    ]
    return (
        <>
            <div
                className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/travel&hospitality.jpg')`, // Replace with your background image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl  text-white  sm:text-left">
                        <h2 className="text-xl sm:text-4xl mb-4">Your Trusted Digital Provider for Travel and Hospitality Industries</h2>
                        <p className="text-md sm:text-lg mb-4">
                            At SaturnX Digital Solutions, we specialize in delivering cutting-edge digital solutions tailored to the unique needs of the travel and hospitality industries. As a leading digital provider, we are dedicated to helping businesses in these dynamic sectors thrive in a competitive market by leveraging advanced technologies and innovative strategies.
                        </p>
                        <Button
                            mainButton="Talk To Us"
                            btnPath="/contactus"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>
            <div className="py-16 px-6 lg:px-0 relative w-full font-poppins">
                <div className="container mx-auto max-w-[1140px]">
                    <div className="my-2 w-full flex flex-col items-center justify-center text-center">
                        <h4 className="text-xl lg:text-4xl mb-4 font-bold max-w-4xl">
                            Why Choose SaturnX Digital Solutions for Your Travel and Hospitality Needs?
                        </h4>
                        <div className="text-left mt-6 space-y-6 text-gray-700 leading-relaxed">
                            <div>
                                <h5 className="text-xl font-semibold mb-2 text-black">1. <span className="text-black">Industry Expertise</span>:</h5>
                                <p>
                                    With years of experience servi text-blackng the <span className="text-black">travel and hospitality industries</span>, we understand the specific challenges and opportunities your business faces. From boosting online visibility to enhancing guest experiences, we have the know-how to elevate your brand.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-xl font-semibold mb-2 text-black">2. <span className="text-black">Customized Solutions</span>:</h5>
                                <p>
                                    Our team crafts personalized digital strategies that align with your business goals. Whether you're a boutique hotel, a global travel agency, or a luxury resort, we’ll develop a plan to meet your unique requirements.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-xl font-semibold mb-2 text-black">3. <span className="text-black">Comprehensive Services</span>:</h5>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        <span className="font-semibold">Website Design & Development:</span> Create a user-friendly, visually stunning website optimized for conversions.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Search Engine Optimization (SEO):</span> Improve your online visibility and attract more customers searching for travel and hospitality services.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Social Media Marketing:</span> Engage with your audience and build your brand presence on platforms like Instagram, Facebook, and LinkedIn.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Content Marketing:</span> Share compelling stories and valuable content to captivate and inform your audience.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Analytics and Reporting:</span> Track your digital performance and refine strategies with our detailed insights.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-xl font-semibold mb-2 text-black">4. <span className="text-black">Technology Integration</span>:</h5>
                                <p>
                                    Seamlessly integrate booking engines, customer relationship management (CRM) systems, and other tools to streamline operations and improve customer satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16 px-6 bg-gray-200 lg:px-0 relative w-full font-poppins">
                <div className="container mx-auto max-w-[1140px]">
                    <div className="my-2 w-full flex flex-col items-center justify-center text-center">
                        <h4 className="text-2xl lg:text-4xl mb-4 font-bold max-w-4xl">
                            How We Empower the Travel and Hospitality Industries
                        </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {/* Card 1 */}
                        <div className="shadow-lg bg-white rounded-lg p-6 text-center">
                            <img
                                src="/guestExperinece.jpg" // Replace with actual image URL
                                alt="Enhanced Guest Experiences"
                                className="w-full h-40 object-cover mb-4 rounded-md"
                            />
                            <h5 className="text-xl font-semibold mb-2">Enhanced Guest Experiences</h5>
                            <p className="text-gray-700">
                                Engage your customers with interactive and personalized online experiences that encourage bookings and foster loyalty.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="shadow-lg bg-white rounded-lg p-6 text-center">
                            <img
                                src="/optimize.jpg" // Replace with actual image URL
                                alt="Optimized Digital Presence"
                                className="w-full h-40 object-cover mb-4 rounded-md"
                            />
                            <h5 className="text-xl font-semibold mb-2">Optimized Digital Presence</h5>
                            <p className="text-gray-700">
                                Ensure your business ranks high in search results and reaches potential travelers with targeted campaigns.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="shadow-lg bg-white rounded-lg p-6 text-center">
                            <img
                                src="/streamline.jpg" // Replace with actual image URL
                                alt="Streamlined Operations"
                                className="w-full h-40 object-cover mb-4 rounded-md"
                            />
                            <h5 className="text-xl font-semibold mb-2">Streamlined Operations</h5>
                            <p className="text-gray-700">
                                Implement cutting-edge technologies to automate processes, reduce costs, and enhance efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-16 px-6 lg:px-0 relative w-full font-poppins'>
                <div className="container mx-auto max-w-[1140px]">
                    <div className="grid lg:grid-cols-4 grid-cols-2 lg:grid-rows-1 gap-8 items-center justify-center">
                        <div className="flex flex-col items-center justify-center text-center">
                            <svg fill="none" height="41" viewBox="0 0 60 41" width="60" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#2981F1" strokeLinecap="round" strokeWidth="2">
                                    <path d="m29.9355 16.0967v-1.0442c0-2.9564-2.5916-5.2461-10.0645-5.2461s-10.06454 2.2897-10.06454 5.2461v1.0442"></path>
                                    <path d="m29.9355 16.0967v-1.0442c0-2.9564 2.5916-5.2461 10.0645-5.2461s10.0645 2.2897 10.0645 5.2461v1.0442"></path>
                                    <path d="m58.871 26.1612v-2.5161c0-2.7804-2.252-5.0323-5.0323-5.0323h-23.9032-23.90324c-2.78032 0-5.03226 2.2519-5.03226 5.0323v2.5161c0 1.3839 1.13226 2.5161 2.51613 2.5161h52.83867c1.3839 0 2.5162-1.1322 2.5162-2.5161z"></path>
                                    <path d="m55.0968 16.0968v-9.56132c0-1.06935-.6668-2.03806-1.6858-2.37774-5.1707-1.71097-13.7633-3.15774-23.4755-3.15774-9.7123 0-18.3048 1.44677-23.47549 3.15774-1.01904.33968-1.68581 1.30839-1.68581 2.37774v9.56132"></path>
                                    <path d="m56.3548 28.6775c1.3839 0 2.5162 1.1322 2.5162 2.5161v3.7742h-57.871v-3.7742c0-1.3839 1.13226-2.5161 2.51613-2.5161"></path>
                                    <path d="m3.51614 34.9678v5.0322"></path>
                                    <path d="m56.3549 34.9678v5.0322"></path>
                                </g>
                            </svg>
                            <p className='text-gray-600 mt-2 font-bold'>HOTEL</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <svg fill="none" height="49" viewBox="0 0 49 49" width="49" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#2981F1" stroke-linecap="round" stroke-width="2">
                                    <path d="m33.6957 47.9998c7.9 0 14.3043-6.4043 14.3043-14.3043 0-7.9001-6.4043-14.3044-14.3043-14.3044-7.9001 0-14.3044 6.4043-14.3044 14.3044 0 7.9 6.4043 14.3043 14.3044 14.3043z"></path>
                                    <path d="m30.6304 36.7611c0 1.1239.9196 2.0434 2.0435 2.0434h2.0435c1.1239 0 2.0435-.9195 2.0435-2.0434v-.5722c0-.8787-.562-1.6654-1.3998-1.9413l-3.3309-1.1137c-.8378-.2759-1.3998-1.0626-1.3998-1.9413v-.562c0-1.1239.9196-2.0434 2.0435-2.0434h2.0435c1.1239 0 2.0435.9195 2.0435 2.0434"></path>
                                    <path d="m33.6956 28.5869v-3.0652"></path>
                                    <path d="m33.6956 38.8042v3.0652"></path>
                                    <path d="m24.5 33.6958h2.0435"></path>
                                    <path d="m40.8478 33.6958h2.0435"></path>
                                    <path d="m17.3478 37.6702c-9.19563-1.0115-16.3478-8.8074-16.3478-18.2789 0-10.15608 8.23522-18.3913 18.3913-18.3913 9.4715 0 17.2674 7.15217 18.2789 16.3478"></path>
                                    <path d="m17.358 31.4784c-5.8034-.9604-10.22757-6.0078-10.22757-12.0872 0-6.7741 5.48677-12.26083 12.26087-12.26083 6.0793 0 11.1165 4.41393 12.0872 10.21743"></path>
                                    <path d="m19.3913 1v6.13043"></path>
                                    <path d="m32.398 6.38452-4.3321 4.33218"></path>
                                    <path d="m6.38456 32.3978 4.33214-4.3321"></path>
                                    <path d="m1 19.3911h6.13043"></path>
                                    <path d="m6.38456 6.38452 4.33214 4.33218"></path>
                                    <path d="m10.2876 40.8479 1.41 2.7383c1.2976 2.5134 4.3833 3.5147 6.8967 2.2171l1.8187-.94"></path>
                                    <path d="m8.97978 44.9859 1.30782-4.138 4.1381 1.3283"></path>
                                    <path d="m44.4341 17.4704.5518-3.0142c.5006-2.7791-1.3385-5.43562-4.1074-5.93627l-2.0129-.36783"></path>
                                    <path d="m48 15.0078-3.5659 2.4624-2.4624-3.5556"></path>
                                </g>
                            </svg>
                            <p className='text-gray-600 uppercase font-bold mt-2'>Entertainment</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <svg fill="none" height="41" viewBox="0 0 63 41" width="63" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#2981F1" stroke-linecap="round" stroke-width="2">
                                    <path d="m54 1v9.1"></path>
                                    <path d="m57.9 1v9.1"></path>
                                    <path d="m61.8 1v13c0 2.769-2.509 3.575-3.9 3.9l1.3 19.5c0 1.118-.325 2.6-3.25 2.6s-3.25-1.482-3.25-2.6l1.3-19.5c-1.391-.325-3.9-1.131-3.9-3.9v-13"></path>
                                    <path d="m3.469 7.68195c-.494 2.96405-1.469 14.11805-1.469 14.11805l2.6 2.6v13c0 1.352.988 2.6 2.6 2.6s2.6-1.092 2.6-2.444v-34.60605s0-1.625-1.95-1.625-3.861 3.25-4.381 6.357z"></path>
                                    <path d="m29.95 36.1001c8.9746 0 16.25-7.2754 16.25-16.25s-7.2754-16.25-16.25-16.25-16.25 7.2754-16.25 16.25 7.2754 16.25 16.25 16.25z"></path>
                                    <path d="m38.543 12.895c1.534 1.898 2.457 4.316 2.457 6.955 0 6.097-4.953 11.05-11.05 11.05-2.704 0-5.174-.962-7.098-2.574"></path>
                                </g>
                            </svg>
                            <p className='text-gray-600 uppercase font-bold mt-2'>Resturants</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <svg fill="none" height="51" viewBox="0 0 42 51" width="42" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#2981F1" stroke-linecap="round" stroke-width="2">
                                    <path d="m34.9379 21.0869c3.7505-3.7499 3.5907-9.9903-.3567-13.93834-3.9475-3.94804-10.1879-4.10866-13.9383-.35876-3.7505 3.7499-3.5907 9.9903.3568 13.9383 3.9474 3.9481 10.1878 4.1087 13.9382.3588z"></path>
                                    <path d="m34.9351 21.088c-1.6443 1.6443-6.1662-.2214-10.1188-4.174-3.9421-3.9422-5.8183-8.47453-4.174-10.11883"></path>
                                    <path d="m25.2168 22.8583-14.1979 13.0596c-1.66537 1.5283-4.23722 1.4756-5.82882-.1265-1.60215-1.6022-1.65485-4.174-.12649-5.8289l12.99631-14.2506"></path>
                                    <path d="m5.19008 35.802-2.89861 3.0672c-1.971051 2.087-1.644298 5.4283.69567 7.0937 1.74971 1.2543 4.1213 1.1594 5.77614-.2108l19.54192-16.2533c1.5073-1.3176 3.7418-1.3703 5.3018-.1159 2.1924 1.7497 2.0343 5.1331-.3057 6.672-3.6575 2.4138-18.53 13.945-18.53 13.945"></path>
                                </g>
                            </svg>
                            <p className='text-gray-600 uppercase font-bold mt-2'>Events</p>
                        </div>
                    </div>
                </div>
            </div>
            <CustomMadeIt />
            <div className='relative py-16 font-poppins px-6 lg:px-0 w-full'>
                <div className='container mx-auto max-w-[1140px]'>
                    <h4 className="text-2xl md:text-4xl text-center font-bold uppercase text-gray-800 tracking-wide mb-12">TECHNOLOGY EXPERTISE FOR TRAVEL <span className='block'>SOFTWARE SOLUTIONS</span></h4>
                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-4'>
                        {hospitalityIcons.map((icon, index) => (
                            <div key={index} className='flex flex-col items-center text-center'>
                                <p className='mb-4'>{icon.svg}</p>
                                <p className='text-gray-600 uppercase text-md'>{icon.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative py-16 px-6 lg:px-0 w-full bg-white">
                <div className="container mx-auto max-w-[1140px]">
                    <h4 className="text-xl md:text-4xl text-center font-bold uppercase text-gray-800 tracking-wide mb-8">
                        Workshop Process for Hospitality
                        <span className="block">Technology Solutions</span>
                    </h4>
                    <p className="text-center text-lg text-gray-700 mb-12">
                        For every hospitality solution, the SaturnX team employs a data-driven, scalable approach tailored to meet our clients' unique technology needs. Our innovative technical design workshop transforms initial concepts into a visionary solution architecture, ensuring a seamless and impactful implementation that elevates guest experiences and drives operational excellence.
                    </p>
                    <div className="grid relative py-16 lg:grid-cols-10 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-12 items-center">
                        {/* Left Side: Content */}
                        <div className="col-span-1 lg:col-span-3 space-y-6 shadow-md rounded-lg p-6">
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <span className="text-white p-2 rounded-full bg-[#2981F1] mr-4">
                                        <IoIosArrowDown size={15} />
                                    </span>
                                    <p className="text-gray-700 text-md">A shared understanding of project objectives</p>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-white p-2 rounded-full bg-[#2981F1] mr-4">
                                        <IoIosArrowDown size={15} />
                                    </span>
                                    <p className="text-gray-700 text-md">A clear product strategy and development roadmap</p>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-white p-2 rounded-full bg-[#2981F1] mr-4">
                                        <IoIosArrowDown size={15} />
                                    </span>
                                    <p className="text-gray-700 text-md">A project plan that includes risks and budgets</p>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-white p-2 rounded-full bg-[#2981F1] mr-4">
                                        <IoIosArrowDown size={15} />
                                    </span>
                                    <p className="text-gray-700 text-md">An initial vision of the architecture of the project</p>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-white p-2 rounded-full bg-[#2981F1] mr-4">
                                        <IoIosArrowDown size={15} />
                                    </span>
                                    <p className="text-gray-700 text-md">A transformation of business requirements into functional</p>
                                </li>
                            </ul>
                        </div>

                        {/* Right Side: Image */}
                        <div className="col-span-1 lg:col-span-7 relative">
                            {/* Decorative SVG */}
                            <svg
                                className="absolute right-6 top-0 transform translate-x-4 -translate-y-4"
                                width="36"
                                height="81"
                                viewBox="0 0 36 81"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.6631 51.5263V81M22.105 45.2105V70.4737M28.2255 54.0527L34.768 55.7369V45.2106L26.326 36.7895C26.326 36.7895 26.326 18.2632 26.326 15.7369C26.326 13.2105 23.7934 4.78948 17.884 1C11.9746 4.78948 9.44201 13.2105 9.44201 15.7369C9.44201 18.2632 9.44201 36.7895 9.44201 36.7895L1 45.2106V55.7369L7.33151 54.0527M17.8841 15.7368V19.9474"
                                    stroke="#1476F2"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>

                            {/* Image */}
                            <img
                                src="/workshophospitality.svg"
                                alt="Workshop Process"
                                className="w-full h-full object-cover relative rounded-lg mt-16"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 px-6 lg:px-0 bg-gray-100 text-center font-poppins">
                <div className="container mx-auto max-w-[800px]">
                    <h4 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                        Partner with SaturnX Digital Solutions Today
                    </h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        The <span className="text-black">travel and hospitality industries</span> demand innovation, creativity, and reliability.
                        At <span className="text-black font-semibold">SaturnX Digital Solutions</span>, we provide the tools and expertise you need to
                        stand out and succeed in this competitive landscape.
                    </p>
                </div>
            </div>


        </>
    )
}

export default TravelandHospitality