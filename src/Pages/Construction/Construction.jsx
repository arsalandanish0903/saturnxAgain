
import React from 'react'
import Button from '../../components/Buttons/Button'
import ContactUs from '../../Pages/ContactUs/ContactUs'

function Construction() {
  const aboutConstruction = [
    {
      svg: (<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path d="M6.1731 0.768878L5.02192 3.37721L7.79137 4.05451" stroke="#2A82F2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M13.9545 11.9072C13.9545 13.2629 12.8554 14.3617 11.5004 14.3617C10.1444 14.3617 9.04541 13.2628 9.04541 11.9072C9.04541 10.5516 10.1444 9.45264 11.5004 9.45264C12.8554 9.45264 13.9545 10.5515 13.9545 11.9072Z" stroke="#323232"></path>
        <path d="M10.2511 5.9672C10.2511 5.93391 10.2782 5.90723 10.3108 5.90723H12.6892C12.7219 5.90723 12.7489 5.93391 12.7489 5.96719C12.7489 7.64347 14.5639 8.69387 16.0166 7.85461C16.045 7.8382 16.0814 7.84794 16.0977 7.87635L17.2872 9.93795C17.3038 9.9666 17.294 10.0032 17.2653 10.0198C15.8128 10.8589 15.8128 12.9556 17.2653 13.7947C17.294 13.8112 17.3038 13.8479 17.2872 13.8765L16.0977 15.9381C16.0814 15.9665 16.045 15.9763 16.0166 15.9599C14.5639 15.1206 12.7489 16.171 12.7489 17.8473C12.7489 17.8805 12.7219 17.9072 12.6892 17.9072H10.3108C10.2782 17.9072 10.2511 17.8805 10.2511 17.8473C10.2511 16.171 8.43609 15.1206 6.98339 15.9599C6.95498 15.9763 6.91865 15.9665 6.90225 15.9381L5.71276 13.8765C5.69622 13.8479 5.70604 13.8112 5.73469 13.7947C7.18719 12.9556 7.18717 10.8589 5.73469 10.0198L5.48457 10.4527L5.73469 10.0198C5.70604 10.0032 5.69622 9.9666 5.71276 9.93795L6.90225 7.87636C6.91865 7.84794 6.95498 7.83821 6.98339 7.85462C8.4361 8.69388 10.2511 7.64349 10.2511 5.9672Z" stroke="#323232"></path>
        <path d="M6.08938 2.9107C8.03013 1.79949 10.277 1.32787 12.5058 1.56387C14.7347 1.79987 16.8302 2.73129 18.4901 4.22375C20.15 5.71622 21.2884 7.69255 21.7411 9.86759C22.1938 12.0426 21.9374 14.3039 21.0088 16.3252C20.0803 18.3465 18.5276 20.0233 16.5748 21.1137C14.6221 22.204 12.3702 22.6515 10.144 22.3916C7.91791 22.1317 5.83267 21.1779 4.18918 19.6677C2.54568 18.1575 1.42892 16.1691 1 13.9893" stroke="#2A82F2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>),
      text: 'Enterprise Resource Planning (ERP)'
    },
    {
      svg: (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.73862 6.73908V1.99995C5.73862 1.44767 6.18634 0.999952 6.73862 0.999952H19.1299M11.4778 15.3478H20.043C20.5953 15.3478 21.043 14.9001 21.043 14.3478V6.26082" stroke="#323232"></path>
        <path d="M10.5215 7.37683L13.7737 10.5652L21.9997 1.95654" stroke="#2A82F2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M0.5 21.2174C0.5 19.8367 1.61929 18.7174 3 18.7174H8.47826C9.85897 18.7174 10.9783 19.8367 10.9783 21.2174V22.5H0.5V21.2174Z" stroke="#2A82F2"></path>
        <circle cx="5.84514" cy="13.1159" r="3.50725" stroke="#2A82F2" stroke-linecap="round" stroke-linejoin="round"></circle>
      </svg>),
      text: 'Project management',
    },
    {
      svg: (<svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1" fill="white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9514 1.66652V0.999851C13.9514 0.447567 13.5036 -0.000148773 12.9514 -0.000148773H1C0.447715 -0.000148773 0 0.447567 0 0.999851V15.6665C0 16.2188 0.447715 16.6665 1 16.6665H2.16048"></path>
        </mask>
        <path d="M12.9514 1.66652V0.999851H14.9514V1.66652H12.9514ZM12.9514 0.999851H1V-1.00015H12.9514V0.999851ZM1 0.999851V15.6665H-1V0.999851H1ZM1 15.6665H2.16048V17.6665H1V15.6665ZM1 15.6665L1 15.6665V17.6665C-0.104571 17.6665 -1 16.7711 -1 15.6665H1ZM1 0.999851H1H-1C-1 -0.104719 -0.10457 -1.00015 1 -1.00015V0.999851ZM12.9514 0.999851V-1.00015C14.0559 -1.00015 14.9514 -0.104717 14.9514 0.999851H12.9514Z" fill="#323232" mask="url(#path-1-inside-1)"></path>
        <mask id="path-3-inside-2" fill="white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1706 11.6667V4.33335C17.1706 3.78106 16.7229 3.33335 16.1706 3.33335H4.21924C3.66695 3.33335 3.21924 3.78106 3.21924 4.33335V19C3.21924 19.5523 3.66695 20 4.21924 20H10.7456"></path>
        </mask>
        <path d="M16.1706 11.6667V4.33335H18.1706V11.6667H16.1706ZM16.1706 4.33335H4.21924V2.33335H16.1706V4.33335ZM4.21924 4.33335V19H2.21924V4.33335H4.21924ZM4.21924 19H10.7456V21H4.21924V19ZM4.21924 19V19V21C3.11467 21 2.21924 20.1046 2.21924 19H4.21924ZM4.21924 4.33335H4.21924H2.21924C2.21924 3.22878 3.11467 2.33335 4.21924 2.33335V4.33335ZM16.1706 4.33335V2.33335C17.2752 2.33335 18.1706 3.22878 18.1706 4.33335H16.1706Z" fill="#323232" mask="url(#path-3-inside-2)"></path>
        <path d="M11.2681 15.9971L14.3087 18.99L21.9999 10.9092" stroke="#2A82F2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M6.97607 7.87891H13.4149" stroke="#323232" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M6.97559 10.9091H13.4144" stroke="#323232" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>),
      text: 'Inspection Management',
    },
    {
      svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
        <path d="M6.38916 13.778C6.38916 12.3972 7.50845 11.278 8.88916 11.278H15.1114C16.4921 11.278 17.6114 12.3972 17.6114 13.778V20.0557H6.38916V13.778Z" stroke="#2A82F2"></path>
        <circle cx="12.0002" cy="4.66679" r="3.66667" stroke="#2A82F2" stroke-linecap="round" stroke-linejoin="round"></circle>
        <path d="M4.66667 10.778H4C2.34315 10.778 1 12.1211 1 13.778V19.3335H4.66667" stroke="#323232"></path>
        <path d="M19.3333 10.778H20C21.6569 10.778 23 12.1211 23 13.778V19.3335H19.3333" stroke="#323232"></path>
        <path d="M5.88878 8.33347C4.53875 8.33347 3.44434 7.23905 3.44434 5.88902C3.44434 4.539 4.53875 3.44458 5.88878 3.44458" stroke="#323232" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M18.1112 8.33347C19.4612 8.33347 20.5557 7.23905 20.5557 5.88902C20.5557 4.539 19.4612 3.44458 18.1112 3.44458" stroke="#323232" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>),
      text: 'Project Onboarding and Training'
    },
    {
      svg: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.53613 1.46362H21V12.5654H18.7921V13.5654H21H22V12.5654V1.46362V0.463623H21H9.53613H8.53613V1.46362V3.73901H9.53613V1.46362Z" fill="#323232"></path>
        <path d="M5 8.63086V6.8459C5 6.08249 5.61887 5.46362 6.38228 5.46362H15.6177C16.3811 5.46362 17 6.08249 17 6.8459V16.0813C17 16.8448 16.3811 17.4636 15.6177 17.4636H13.8659" stroke="#2A82F2"></path>
        <path d="M8.5 15.9636C8.5 17.0683 7.60443 17.9636 6.50034 17.9636C5.39548 17.9636 4.5 17.0682 4.5 15.9636C4.5 14.8591 5.39548 13.9636 6.50034 13.9636C7.60443 13.9636 8.5 14.859 8.5 15.9636Z" stroke="#323232"></path>
        <path d="M5.25114 10.0236C5.25114 9.99031 5.27818 9.96362 5.31084 9.96362H7.6892C7.72185 9.96362 7.74889 9.99031 7.74889 10.0236C7.74889 11.6999 9.56391 12.7503 11.0166 11.911C11.045 11.8946 11.0814 11.9043 11.0977 11.9327L12.2872 13.9943C12.3038 14.023 12.294 14.0596 12.2653 14.0762C10.8128 14.9153 10.8128 17.0119 12.2653 17.8511C12.294 17.8676 12.3038 17.9043 12.2872 17.9329L11.0977 19.9945C11.0814 20.0229 11.045 20.0327 11.0166 20.0163C9.56392 19.177 7.74889 20.2274 7.74889 21.9037C7.74889 21.9369 7.72186 21.9636 7.6892 21.9636H5.31083C5.27817 21.9636 5.25114 21.9369 5.25114 21.9037C5.25114 20.2274 3.43609 19.177 1.98339 20.0163C1.95498 20.0327 1.91865 20.0229 1.90225 19.9945L0.712757 17.9329C0.696223 17.9043 0.706039 17.8676 0.734687 17.8511C2.18719 17.012 2.18717 14.9153 0.734689 14.0762L0.484566 14.5091L0.734688 14.0762C0.706037 14.0596 0.696222 14.023 0.712756 13.9943L1.90225 11.9328C1.91865 11.9043 1.95498 11.8946 1.98339 11.911C3.4361 12.7503 5.25114 11.6999 5.25114 10.0236Z" stroke="#323232"></path>
      </svg>),
      text: 'Construction Integrations'
    }
  ]
  return (
    <>
      <div
        className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
        style={{
          backgroundImage: `url('/constructionMain.jpg')`, // Replace with your background image URL
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
          {/* Content */}
          <div className="relative z-10 max-w-3xl  text-white text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl mb-4"> Revolutionizing the Construction Industry with Digital Solutions</h2>
            <p className="text-md sm:text-lg mb-4">
              Welcome to SaturnX Digital Solution Company, your trusted construction company digital provider! In today’s fast-paced world, the construction industry is undergoing a digital transformation, and we’re here to help your business thrive.
            </p>
            <Button
              mainButton="Contact Us"
              btnPath="/contactus"
              className="mt-4"
            />
          </div>
        </div>
      </div>
      <div className='relative pt-16 px-6 lg:px-0 font-poppins'>
        <div className='container mx-auto max-w-[1140px]'>
          <h4 className="text-xl text-center font-bold leading-snug tracking-wide  sm:text-4xl mb-4">Why Choose SaturnX Digital Solution Company?</h4>
          <p className='text-center'>As a leader in digital technology, we specialize in offering innovative solutions tailored to the construction sector. Our expertise ensures your company stays ahead of the competition with cutting-edge tools and strategies.</p>
          <div className='grid lg:grid-cols-2 grid-cols-1 items-center my-8 gap-4'>
            <div className='relative'>
              {aboutConstruction.map((item, index) => (
                <div key={index} className='flex gap-6 mb-8'>
                  <span>{item.svg}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div>
              <img src="/constructionAbout.jpg" alt=""
                className='rounded-md'
              />
            </div>
          </div>

        </div>
        <div className='py-16 px-6 lg:px-0 font-poppins relative bg-gray-200 w-full'>
          <div className='container mx-auto max-w-[1140px]'>
            <div className='grid lg:grid-cols-2 grid-cols-1  my-8 gap-4'>
              <div className='relative'>
                <img src="/erpsoftware.jpg" alt=""
                  className='rounded-md shadow-sm'
                />
              </div>
              <div className='relative flex flex-col items-center'>
                <div className='flex items-center gap-4 mb-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 23 23" fill="none">
                    <path d="M6.1731 0.768878L5.02192 3.37721L7.79137 4.05451" stroke="#2A82F2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M13.9545 11.9072C13.9545 13.2629 12.8554 14.3617 11.5004 14.3617C10.1444 14.3617 9.04541 13.2628 9.04541 11.9072C9.04541 10.5516 10.1444 9.45264 11.5004 9.45264C12.8554 9.45264 13.9545 10.5515 13.9545 11.9072Z" stroke="#323232"></path>
                    <path d="M10.2511 5.9672C10.2511 5.93391 10.2782 5.90723 10.3108 5.90723H12.6892C12.7219 5.90723 12.7489 5.93391 12.7489 5.96719C12.7489 7.64347 14.5639 8.69387 16.0166 7.85461C16.045 7.8382 16.0814 7.84794 16.0977 7.87635L17.2872 9.93795C17.3038 9.9666 17.294 10.0032 17.2653 10.0198C15.8128 10.8589 15.8128 12.9556 17.2653 13.7947C17.294 13.8112 17.3038 13.8479 17.2872 13.8765L16.0977 15.9381C16.0814 15.9665 16.045 15.9763 16.0166 15.9599C14.5639 15.1206 12.7489 16.171 12.7489 17.8473C12.7489 17.8805 12.7219 17.9072 12.6892 17.9072H10.3108C10.2782 17.9072 10.2511 17.8805 10.2511 17.8473C10.2511 16.171 8.43609 15.1206 6.98339 15.9599C6.95498 15.9763 6.91865 15.9665 6.90225 15.9381L5.71276 13.8765C5.69622 13.8479 5.70604 13.8112 5.73469 13.7947C7.18719 12.9556 7.18717 10.8589 5.73469 10.0198L5.48457 10.4527L5.73469 10.0198C5.70604 10.0032 5.69622 9.9666 5.71276 9.93795L6.90225 7.87636C6.91865 7.84794 6.95498 7.83821 6.98339 7.85462C8.4361 8.69388 10.2511 7.64349 10.2511 5.9672Z" stroke="#323232"></path>
                    <path d="M6.08938 2.9107C8.03013 1.79949 10.277 1.32787 12.5058 1.56387C14.7347 1.79987 16.8302 2.73129 18.4901 4.22375C20.15 5.71622 21.2884 7.69255 21.7411 9.86759C22.1938 12.0426 21.9374 14.3039 21.0088 16.3252C20.0803 18.3465 18.5276 20.0233 16.5748 21.1137C14.6221 22.204 12.3702 22.6515 10.144 22.3916C7.91791 22.1317 5.83267 21.1779 4.18918 19.6677C2.54568 18.1575 1.42892 16.1691 1 13.9893" stroke="#2A82F2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <h4 className=' text-lg'>Revolutionizing the Construction Industry with Digital Solutions                  </h4>
                </div>
                <div className='ml-12'>
                  <ul className='m-0 p-0 flex flex-col gap-4'>
                    <li>
                      <strong>Custom Digital Platforms:</strong> From project management software to workflow automation, we provide customized platforms that enhance efficiency.
                    </li>
                    <li>
                      <strong>Real-Time Collaboration Tools: </strong> Keep your team connected on-site and off-site with our advanced communication solutions.
                    </li>
                    <li>
                      <strong>AI-Driven Insights: </strong> Leverage data to predict project outcomes, optimize resources, and reduce costs.
                    </li>
                    <li>
                      <strong>SEO and Digital Marketing: </strong> Boost your online presence with targeted strategies designed to attract clients and investors.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 items-center my-16 gap-4'>
              <div className='relative flex flex-col'>
                <div className='flex items-center gap-4 mb-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 22 23" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.53613 1.46362H21V12.5654H18.7921V13.5654H21H22V12.5654V1.46362V0.463623H21H9.53613H8.53613V1.46362V3.73901H9.53613V1.46362Z" fill="#323232"></path>
                    <path d="M5 8.63086V6.8459C5 6.08249 5.61887 5.46362 6.38228 5.46362H15.6177C16.3811 5.46362 17 6.08249 17 6.8459V16.0813C17 16.8448 16.3811 17.4636 15.6177 17.4636H13.8659" stroke="#2A82F2"></path>
                    <path d="M8.5 15.9636C8.5 17.0683 7.60443 17.9636 6.50034 17.9636C5.39548 17.9636 4.5 17.0682 4.5 15.9636C4.5 14.8591 5.39548 13.9636 6.50034 13.9636C7.60443 13.9636 8.5 14.859 8.5 15.9636Z" stroke="#323232"></path>
                    <path d="M5.25114 10.0236C5.25114 9.99031 5.27818 9.96362 5.31084 9.96362H7.6892C7.72185 9.96362 7.74889 9.99031 7.74889 10.0236C7.74889 11.6999 9.56391 12.7503 11.0166 11.911C11.045 11.8946 11.0814 11.9043 11.0977 11.9327L12.2872 13.9943C12.3038 14.023 12.294 14.0596 12.2653 14.0762C10.8128 14.9153 10.8128 17.0119 12.2653 17.8511C12.294 17.8676 12.3038 17.9043 12.2872 17.9329L11.0977 19.9945C11.0814 20.0229 11.045 20.0327 11.0166 20.0163C9.56392 19.177 7.74889 20.2274 7.74889 21.9037C7.74889 21.9369 7.72186 21.9636 7.6892 21.9636H5.31083C5.27817 21.9636 5.25114 21.9369 5.25114 21.9037C5.25114 20.2274 3.43609 19.177 1.98339 20.0163C1.95498 20.0327 1.91865 20.0229 1.90225 19.9945L0.712757 17.9329C0.696223 17.9043 0.706039 17.8676 0.734687 17.8511C2.18719 17.012 2.18717 14.9153 0.734689 14.0762L0.484566 14.5091L0.734688 14.0762C0.706037 14.0596 0.696222 14.023 0.712756 13.9943L1.90225 11.9328C1.91865 11.9043 1.95498 11.8946 1.98339 11.911C3.4361 12.7503 5.25114 11.6999 5.25114 10.0236Z" stroke="#323232"></path>
                  </svg>
                  <h4 className='text-lg'>Benefits of Partnering with a Digital Provider for Construction Companies                    </h4>
                </div>
                <div className='ml-12'>
                  <p className='mb-4'>Partnering with SaturnX Digital Solution Company ensures:                    </p>
                  <ul className='m-0 p-0 flex flex-col gap-4'>
                    <li>
                      <strong>Streamlined Operations:</strong>  Save time with tools that automate repetitive tasks.
                    </li>
                    <li>
                      <strong>Improved Accuracy: </strong>Reduce human error with data-driven project management.
                    </li>
                    <li>
                      <strong>Enhanced Customer Experience: </strong>Impress clients with transparent and real-time updates.
                    </li>
                    <li>
                      <strong>Increased ROI: </strong> Our digital strategies help maximize profits on every project.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='relative'>
                <img src="/constructionIntegration.jpg" alt=""
                  className='rounded-md shadow-sm'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-full px-6 lg:px-0 py-16 font-poppins'>
        <div className='container mx-auto max-w-[1140px]'>
          <div className='my-2 w-full flex flex-col items-center justify-center text-center'>
            <h4 className="text-2xl lg:text-4xl mb-4 font-bold max-w-4xl">Our Services for Construction Companies</h4>
            <p className='max-w-3xl'>We understand the unique challenges of the construction industry. Here’s how we help: </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-center gap-4">
                <img src="/webDevelopment.svg" alt="" />
                <div>
                  <span className="font-semibold">Website Development & SEO:</span>
                  Build a powerful online presence with an SEO-friendly website designed to showcase your projects and expertise.
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img src="/mobileApp.svg" alt="" />
                <div>
                  <span className="font-semibold">Mobile App Solutions:</span>
                  Provide on-the-go access to project updates, resource tracking, and team communication.
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img src="/aiandpersonalize.svg" alt="" />
                <div>
                  <span className="font-semibold">Cloud-Based Solutions:</span>
                  Centralize your data with secure and scalable cloud storage.
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img src="/socialmediafeature.svg" alt="" />
                <div>
                  <span className="font-semibold">Digital Marketing Campaigns:</span>
                  Reach potential clients with targeted ads and social media strategies.
                </div>
              </li>
            </ul>
          </div>


        </div>
      </div>


      <ContactUs />
    </>
  )
}

export default Construction