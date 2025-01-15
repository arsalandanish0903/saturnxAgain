import React from 'react'
import Button from '../../components/Buttons/Button'

function QaTesting() {
    const [accordionIndex, setAccordionIndex] = React.useState(false);
    const handleClick = () => {
        setAccordionIndex(!accordionIndex)
    }
    const testingAccordion = [
        {
            svg: (<svg width="29px" height="36px" viewBox="0 0 29 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>planning</title>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                  <g id="MKTG-2887-Service-page" transform="translate(-240.000000, -1748.000000)" stroke="#323232" stroke-width="1.5">
                    <g id="planning" transform="translate(241.000000, 1749.000000)">
                      <path d="M8.58948252,11.3473614 C8.58948252,9.26410688 10.2788729,7.57471649 12.3621274,7.57471649 C14.445382,7.57471649 16.1347724,9.26410688 16.1347724,11.3473614" id="Stroke-1"></path>
                      <polygon id="Stroke-3" points="24.8788579 5.96983333 20.0030916 9.52819203 16.4447329 4.65242572 21.3204992 1.09406703">
                      </polygon>
                      <polygon id="Stroke-5" points="7.69385661 0.400805797 0.732572192 2.93526866 6.4179481 7.69861014"></polygon>
                      <path d="M25.1887429,15.8745353 L25.1887429,16.6290643 C25.1887429,19.458548 19.1525111,23.9857219 15.3798661,26.4379411 L15.3798661,31.719644 L12.3617502,33.983231 L11.6072212,33.983231 L11.6072212,26.4379411 C7.83457627,23.9857219 1.79834438,19.458548 1.79834438,16.6290643 L1.79834438,15.8745353" id="Stroke-7"></path>
                      <path d="M7.08042455,15.8745353 L1.04419266,15.8745353 C0.627692663,15.8745353 0.289663678,15.5365063 0.289663678,15.1200063 L0.289663678,13.6109484 C0.289663678,13.1944484 0.627692663,12.8564194 1.04419266,12.8564194 L25.9436492,12.8564194 C26.3601492,12.8564194 26.6981782,13.1944484 26.6981782,13.6109484 L26.6981782,15.1200063 C26.6981782,15.5365063 26.3601492,15.8745353 25.9436492,15.8745353 L13.8711854,15.8745353" id="Stroke-9"></path>
                    </g>
                  </g>
                </g>
              </svg>),
            title: 'Planning',
            content: 'We define the scope of the testing process, set goals, and establish the testing environment.'
        },
        {
            svg: (<svg width="41px" height="37px" viewBox="0 0 41 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>designing</title>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                  <g id="MKTG-2887-Service-page" transform="translate(-234.000000, -1810.000000)" stroke="#323232" stroke-width="1.5">
                    <g id="designing" transform="translate(235.000000, 1811.500000)">
                      <path d="M5.90189,27.00161 C8.99334,31.24311 13.99899,33.99966 19.64979,33.99966 C29.03889,33.99966 36.64979,26.38876 36.64979,16.99966 L36.64979,16.14966 L38.34979,16.14966 L34.09979,10.19966 L30.69979,16.14966 L32.39979,16.14966 L32.39979,16.99966 C32.39979,20.36056 31.10014,23.41631 28.97599,25.69346" id="Stroke-1"></path>
                      <path d="M33.24962,6.99839 C30.15817,2.75689 25.15252,0.00034 19.50172,0.00034 C10.11262,0.00034 2.50172,7.61124 2.50172,17.00034 L2.50172,17.85034 L0.80172,17.85034 L5.05172,23.80034 L8.45172,17.85034 L6.75172,17.85034 L6.75172,17.00034 C6.75172,13.63944 8.05137,10.58369 10.17552,8.30654" id="Stroke-3"></path>
                      <polygon id="Stroke-5" points="26.44962 26.35 12.84962 26.35 12.84962 11.05 16.24962 7.65 26.44962 7.65"></polygon>
                      <polyline id="Stroke-7" points="17.09962 9.35 17.09962 11.9 14.54962 11.9"></polyline>
                    </g>
                  </g>
                </g>
              </svg>),
            title: 'Designing',
            content: 'We create test cases, scripts, and scenarios based on the requirements and objectives.'
        },
        {
            svg: (<svg width="32px" height="37px" viewBox="0 0 32 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Defining</title>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                  <g id="MKTG-2887-Service-page" transform="translate(-239.000000, -1872.000000)" stroke="#323232" stroke-width="1.5">
                    <g id="Defining" transform="translate(240.000000, 1873.500000)">
                      <polygon id="Stroke-1" points="14.7826087 18.4782609 8.86956522 14.7826087 14.7826087 11.0869565 20.6956522 14.7826087">
                      </polygon>
                      <polygon id="Stroke-2" points="24.3913043 27.3478261 19.9565217 24.3913043 24.3913043 21.4347826 28.826087 24.3913043">
                      </polygon>
                      <polygon id="Stroke-4" points="0.739130435 26.6086957 9.60869565 26.6086957 9.60869565 22.173913 0.739130435 22.173913">
                      </polygon>
                      <polyline id="Stroke-7" points="20.6956522 14.7826087 24.3913043 14.7826087 24.3913043 21.4347826"></polyline>
                      <polyline id="Stroke-8" points="8.86956522 14.7826087 5.17391304 14.7826087 5.17391304 21.4347826"></polyline>
                      <polyline id="Stroke-9" points="5.17391304 26.6086957 5.17391304 33.2608696 14.7826087 33.2608696 14.7826087 24.3913043 19.9565217 24.3913043">
                      </polyline>
                      <line x1="24.3913043" y1="27.3478261" x2="24.3913043" y2="34" id="Stroke-11"></line>
                      <path d="M20.6956522,4.06521739 C20.6956522,5.90195652 18.048087,7.39130435 14.7826087,7.39130435 C11.5171304,7.39130435 8.86956522,5.90195652 8.86956522,4.06521739 C8.86956522,2.22847826 11.5171304,0.739130435 14.7826087,0.739130435 C18.048087,0.739130435 20.6956522,2.22847826 20.6956522,4.06521739 Z" id="Stroke-13"></path>
                      <line x1="14.7826087" y1="7.39130435" x2="14.7826087" y2="11.0869565" id="Stroke-15"></line>
                    </g>
                  </g>
                </g>
              </svg>),
            title: 'Defining',
            content: 'We identify the testing approach, tools, and techniques to be used for the project.'
        },
        {
            svg: (<svg width="43px" height="36px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Building</title>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                  <g id="MKTG-2887-Service-page" transform="translate(-233.000000, -1934.000000)" stroke="#323232" stroke-width="1.5">
                    <g id="building" transform="translate(233.000000, 1935.500000)">
                      <path d="M24.1512737,14.3157895 C24.1512737,16.2922632 25.7537474,17.8947368 27.7302211,17.8947368 C29.7066947,17.8947368 31.3091684,16.2922632 31.3091684,14.3157895 C31.3091684,12.3393158 29.7066947,10.7368421 27.7302211,10.7368421 C25.7537474,10.7368421 24.1512737,12.3393158 24.1512737,14.3157895 Z" id="Stroke-1"></path>
                      <path d="M33.4385526,23.3981737 L36.3813421,25.9114895 L39.3259211,22.9660158 L36.8126053,20.0241211 C37.4478684,19.0166474 37.9202895,17.8991211 38.1922895,16.7019632 L42.0468158,16.3986474 L42.0468158,12.2336474 L38.1922895,11.9303316 C37.9202895,10.7331737 37.4478684,9.61564737 36.8126053,8.60817368 L39.3259211,5.66538421 L36.3813421,2.72080526 L33.4385526,5.23322632 C32.4310789,4.59885789 31.3135526,4.12643684 30.1163947,3.85443684 L29.8130789,-8.94736842e-05 L25.6480789,-8.94736842e-05 L25.3447632,3.85443684 C24.1476053,4.12643684 23.0300789,4.59885789 22.0226053,5.23322632 L19.0798158,2.72080526 L16.1352368,5.66627895 L18.6476579,8.60817368 C18.0132895,9.61564737 17.5408684,10.7340684 17.2688684,11.9303316 L15.4275,12.0752789" id="Stroke-3"></path>
                      <path d="M8.94119474,19.6842105 C6.82693158,19.6842105 5.36224737,17.9672105 5.36224737,15.8493684 L5.36224737,14.5707895 C5.36224737,12.4529474 6.82693158,10.7368421 8.94119474,10.7368421 C11.0554579,10.7368421 12.5201421,12.4529474 12.5201421,14.5707895 L12.5201421,15.8493684 C12.5201421,17.9672105 11.0554579,19.6842105 8.94119474,19.6842105 Z" id="Stroke-5"></path>
                      <path d="M0.888563158,33.1052632 C0.888563158,33.1052632 1.47551053,28.1287368 1.7833,25.9473684 C2.09108947,23.766 3.39382632,22.3684211 5.36224737,22.3684211 L7.15172105,22.3684211 L13.3978789,29.5263158 L18.7663,29.5263158 C18.7663,29.5263158 19.1662474,33.1052632 16.0820895,33.1052632 L10.7306684,33.1052632 L6.25698421,27.7368421" id="Stroke-7"></path>
                      <polyline id="Stroke-9" points="14.3096158 26.8421053 17.8885632 21.4736842 30.4148789 21.4736842 25.0464579 30.4210526 20.5727737 30.4210526">
                      </polyline>
                      <line x1="6.25698421" y1="33.1052632" x2="32.2043526" y2="33.1052632" id="Stroke-11"></line>
                    </g>
                  </g>
                </g>
              </svg>),
            title: 'Building',
            content: 'We develop test scripts, data, and environments to execute the testing process.'
        },
        {
            svg: (<svg width="41px" height="37px" viewBox="0 0 41 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Testing</title>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                  <g id="MKTG-2887-Service-page" transform="translate(-234.000000, -1996.000000)" stroke="#323232" stroke-width="1.5">
                    <g id="testing" transform="translate(235.000000, 1997.500000)">
                      <polyline id="Stroke-1" points="24.65 29.75 24.65 34 14.45 34 14.45 24.65 22.1 24.65"></polyline>
                      <polyline id="Stroke-3" points="17 28.9 19.55 31.45 25.5 24.65"></polyline>
                      <polygon id="Stroke-4" points="28.9 34 39.1 34 39.1 24.65 28.9 24.65"></polygon>
                      <polyline id="Stroke-6" points="10.2 29.75 10.2 34 0 34 0 24.65 7.65 24.65"></polyline>
                      <polyline id="Stroke-8" points="2.55 28.9 5.1 31.45 11.05 24.65"></polyline>
                      <path d="M9.35,8.5 C7.34145,8.5 5.95,6.86885 5.95,4.85775 L5.95,3.64225 C5.95,1.63115 7.34145,0 9.35,0 C11.35855,0 12.75,1.63115 12.75,3.64225 L12.75,4.85775 C12.75,6.86885 11.35855,8.5 9.35,8.5 Z" id="Stroke-9"></path>
                      <path d="M2.55,21.25 C2.55,21.25 3.1076,16.5223 3.4,14.45 C3.6924,12.3777 4.93,11.05 6.8,11.05 L8.5,11.05 L14.43385,17.85 L19.53385,17.85 C19.53385,17.85 19.9138,21.25 16.98385,21.25 L11.9,21.25 L7.65,16.15" id="Stroke-11"></path>
                      <polyline id="Stroke-13" points="15.3 15.3 18.7 10.2 29.75 10.2 24.65 18.7 21.25 18.7"></polyline>
                      <line x1="8.5" y1="21.25" x2="37.4" y2="21.25" id="Stroke-15"></line>
                    </g>
                  </g>
                </g>
              </svg>),
            title: 'Testing',
            content: 'We execute the test cases, identify defects, and report the results.'
        },
        {
            svg: (<svg width="33px" height="37px" viewBox="0 0 33 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Deployment</title>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                  <g id="MKTG-2887-Service-page" transform="translate(-238.000000, -2058.000000)" stroke="#323232" stroke-width="1.5">
                    <g id="deployment" transform="translate(239.000000, 2059.500000)">
                      <path d="M12.2978723,30.3829787 C13.6028936,30.3829787 14.4680851,29.2725532 14.4680851,27.9031489 L14.4680851,27.0755745 C14.4680851,25.7061702 13.6028936,24.5957447 12.2978723,24.5957447 C10.9928511,24.5957447 10.1276596,25.7061702 10.1276596,27.0755745 L10.1276596,27.9031489 C10.1276596,29.2725532 10.9928511,30.3829787 12.2978723,30.3829787 Z" id="Stroke-1"></path>
                      <path d="M4.34042553,31.8297872 C5.64544681,31.8297872 6.5106383,30.7193617 6.5106383,29.3499574 L6.5106383,28.522383 C6.5106383,27.1529787 5.64544681,26.0425532 4.34042553,26.0425532 C3.03540426,26.0425532 2.17021277,27.1529787 2.17021277,28.522383 L2.17021277,29.3499574 C2.17021277,30.7193617 3.03540426,31.8297872 4.34042553,31.8297872 Z" id="Stroke-3"></path>
                      <path d="M16.6382979,34 L16.6382979,32.5531915 C16.6382979,30.7605957 13.8054468,30.3829787 12.2978723,30.3829787 C10.7902979,30.3829787 7.95744681,30.7605957 7.95744681,32.5531915 L7.95744681,34" id="Stroke-5"></path>
                      <path d="M7.95780851,32.6877447 C7.01593617,32.0062979 5.36946809,31.8297872 4.34078723,31.8297872 C2.83321277,31.8297872 0.000361702128,32.2074043 0.000361702128,34" id="Stroke-7"></path>
                      <path d="M20.2553191,31.8297872 C18.9502979,31.8297872 18.0851064,30.7193617 18.0851064,29.3499574 L18.0851064,28.522383 C18.0851064,27.1529787 18.9502979,26.0425532 20.2553191,26.0425532 C21.5603404,26.0425532 22.4255319,27.1529787 22.4255319,28.522383 L22.4255319,29.3499574 C22.4255319,30.7193617 21.5603404,31.8297872 20.2553191,31.8297872 Z" id="Stroke-9"></path>
                      <path d="M16.6382979,32.6877447 C17.5794468,32.0062979 19.2266383,31.8297872 20.2553191,31.8297872 C21.7628936,31.8297872 24.5957447,32.2074043 24.5957447,34" id="Stroke-11"></path>
                      <path d="M2.89361702,0 L20.9787234,0 C22.1774043,0 23.1489362,0.971531915 23.1489362,2.17021277 L23.1489362,15.9148936 C23.1489362,17.5128936 21.8533191,18.8085106 20.2553191,18.8085106 L8.68085106,18.8085106 L5.64255319,22.8595745 C5.22587234,23.4158723 4.34042553,23.1207234 4.34042553,22.4255319 L4.34042553,18.8085106 L2.89361702,18.8085106 C1.69493617,18.8085106 0.723404255,17.8369787 0.723404255,16.6382979 L0.723404255,2.17021277 C0.723404255,0.971531915 1.69493617,0 2.89361702,0 Z" id="Stroke-13"></path>
                      <path d="M14.4680851,20.2553191 C14.4680851,21.454 15.439617,22.4255319 16.6382979,22.4255319 L23.1489362,22.4255319 L26.2168936,26.0042128 C26.6538298,26.5142128 27.4893617,26.2053191 27.4893617,25.534 L27.4893617,22.4255319 L28.9361702,22.4255319 C30.1348511,22.4255319 31.106383,21.454 31.106383,20.2553191 L31.106383,7.23404255 C31.106383,6.0353617 30.1348511,5.06382979 28.9361702,5.06382979 L24.5957447,5.06382979" id="Stroke-15"></path>
                      <path d="M14.5012894,9.38768936 C14.5012894,10.5950511 13.5218,11.5745404 12.3144383,11.5745404 C11.1070766,11.5745404 10.1275872,10.5950511 10.1275872,9.38768936 C10.1275872,8.18032766 11.1070766,7.2008383 12.3144383,7.2008383 C13.5218,7.2008383 14.5012894,8.18032766 14.5012894,9.38768936 Z" id="Stroke-17"></path>
                      <path d="M17.3782681,9.38768936 C17.3782681,8.9862 17.3269064,8.59700851 17.2386511,8.22300851 L18.659417,7.40194468 L17.2126085,4.89607234 L15.7940128,5.71496596 C15.2210766,5.17168936 14.5229915,4.76079574 13.7446085,4.5322 L13.7446085,2.89368936 L10.8509915,2.89368936 L10.8509915,4.54015745 C10.080566,4.77309362 9.38971489,5.18471064 8.82184255,5.72654043 L7.38299149,4.89607234 L5.93618298,7.40194468 L7.38588511,8.23964681 C7.3005234,8.60858298 7.25060851,8.99198723 7.25060851,9.38768936 C7.25060851,9.79351915 7.30341702,10.1863277 7.39384255,10.5646681 L5.93618298,11.4067106 L7.38299149,13.912583 L8.84426809,13.0690936 C9.4078,13.6000723 10.0899702,14.0051787 10.8509915,14.2352213 L10.8509915,15.914966 L13.7446085,15.914966 L13.7446085,14.2431787 C14.5128638,14.0174766 15.2029915,13.6130936 15.7715872,13.0806681 L17.2126085,13.912583 L18.659417,11.4067106 L17.2306936,10.5813064 C17.3232894,10.1979021 17.3782681,9.79930638 17.3782681,9.38768936 Z" id="Stroke-19"></path>
                    </g>
                  </g>
                </g>
              </svg>),
            title: 'Deployment',
            content: 'We deploy the software after successful testing and quality assurance.'
        },
        {
            svg: (<svg width="34px" height="37px" viewBox="0 0 34 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Maintenance</title>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                  <g id="MKTG-2887-Service-page" transform="translate(-239.000000, -2120.000000)" stroke="#323232" stroke-width="1.5">
                    <g id="maintenance" transform="translate(240.000000, 2121.500000)">
                      <path d="M13.7446809,17.3617021 C13.7446809,18.560383 14.7162128,19.5319149 15.9148936,19.5319149 C17.1135745,19.5319149 18.0851064,18.560383 18.0851064,17.3617021 C18.0851064,16.1630213 17.1135745,15.1914894 15.9148936,15.1914894 C14.7162128,15.1914894 13.7446809,16.1630213 13.7446809,17.3617021 Z" id="Stroke-1"></path>
                      <path d="M24.4713915,15.4281149 L23.5656894,13.0705404 L21.3180723,13.7360723 C20.9035617,13.1182851 20.3935617,12.5880298 19.8148383,12.1561574 L20.5975617,9.94398723 L18.2906255,8.9174766 L17.1715191,10.9799021 C16.462583,10.8388383 15.7276043,10.814966 14.9911787,10.9213064 L13.9813064,8.80534894 L11.6237319,9.71105106 L12.2899872,11.9586681 C11.6714766,12.3724553 11.1412213,12.8831787 10.7093489,13.4619021 L8.49717872,12.6791787 L7.47066809,14.9868383 L9.53237021,16.1059447 C9.39202979,16.8141574 9.36815745,17.5498596 9.47449787,18.2855617 L7.35854043,19.2961574 L8.26424255,21.6530085 L10.5118596,20.9874766 C10.9256468,21.6052638 11.4363702,22.1347957 12.0143702,22.5673915 L11.2323702,24.7795617 L13.5393064,25.8060723 L14.6584128,23.7436468 C15.3673489,23.8839872 16.1023277,23.908583 16.8387532,23.8022426 L17.8486255,25.9182 L20.2062,25.0124979 L19.5399447,22.7648809 C20.1584553,22.3503702 20.6887106,21.8403702 21.120583,21.2616468 L23.3327532,22.0443702 L24.3592638,19.737434 L22.2968383,18.6183277 C22.4371787,17.9101149 22.4617745,17.1744128 22.355434,16.4379872 L24.4713915,15.4281149 Z" id="Stroke-3"></path>
                      <path d="M20.9787234,3.61702128 C20.9787234,2.01902128 22.2743404,0.723404255 23.8723404,0.723404255 C25.4703404,0.723404255 26.7659574,2.01902128 26.7659574,3.61702128 C26.7659574,5.21502128 25.4703404,6.5106383 23.8723404,6.5106383 C22.2743404,6.5106383 20.9787234,5.21502128 20.9787234,3.61702128 Z" id="Stroke-5"></path>
                      <polyline id="Stroke-7" points="20.9787234 3.61702128 15.9148936 3.61702128 15.9148936 7.23404255"></polyline>
                      <polygon id="Stroke-9" points="28.212766 23.1489362 31.8297872 26.7659574 28.212766 30.3829787 24.5957447 26.7659574">
                      </polygon>
                      <polygon id="Stroke-11" points="2.89361702 29.6595745 8.68085106 33.2765957 8.68085106 26.0425532"></polygon>
                      <polygon id="Stroke-13" points="0.723404255 10.8510638 6.5106383 10.8510638 6.5106383 5.06382979 0.723404255 5.06382979">
                      </polygon>
                      <polyline id="Stroke-15" points="25.3191489 17.3617021 28.212766 17.3617021 28.212766 23.1489362">
                      </polyline>
                      <polyline id="Stroke-16" points="6.5106383 17.3617021 3.61702128 17.3617021 3.61702128 10.8510638"></polyline>
                      <polyline id="Stroke-17" points="15.9148936 27.4893617 15.9148936 30.3829787 8.68085106 30.3829787"></polyline>
                    </g>
                  </g>
                </g>
              </svg>),
            title: 'Maintenance',
            content: 'We provide ongoing support, maintenance, and updates to ensure software performance and reliability.'
        }
    ]
    return (
        <>
            <div
                className="h-[500px] bg-white bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/qaTesting.jpg')`, // Replace with your background image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl  text-white text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl mb-4">Ensuring Excellence with Expert Software QA & Testing Services</h2>
                        <p className="text-md sm:text-lg mb-4">
                            Ensure flawless software performance with our expert QA testing services. We deliver comprehensive manual and automated testing solutions to identify bugs, enhance functionality, and guarantee a seamless user experience. Trust us to optimize your software for quality and reliability.</p>
                        <Button
                            mainButton="Let's Talk"
                            btnPath="/contactus"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>
            <div className='w-full relative py-16 px-6 lg:px-0 font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    <div className='my-2 w-full flex flex-col items-center justify-center text-center'>
                        <h4 className="text-2xl lg:text-4xl mb-4 font-bold max-w-4xl">Our Streamlined Development Process</h4>
                        <p className='max-w-3xl'>Accelerate your projects with our expert development team, offering seamless collaboration, scalable solutions, and tailored results. Ensure faster delivery, consistent quality, and cost-effective outcomes to drive your business success.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20'>
                        <div className='relative flex flex-col items-center justify-center'>
                            {testingAccordion.map((accordion, index) => {
                                return (
                                    <div key={index} className='cursor-pointer'>
                                        <div onClick={handleClick}>
                                            <p>{accordion.svg}</p>
                                            <h4 className='text-xl font-bold'>{accordion.title}</h4>
                                        </div>
                                        {accordionIndex === index ? 
                                            <p>{accordion.content}</p> : null
                                        }
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <img src="/development-lifecycle.gif" alt="" className='h-full w-full object-cover'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QaTesting