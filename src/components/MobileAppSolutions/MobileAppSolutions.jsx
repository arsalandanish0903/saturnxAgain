import React from 'react'

function MobileAppSolutions() {
    const mobileAppSolutionsCard = [
        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" height="55" viewBox="0 0 39 55" width="39" class="offer-image replaced-svg"><path d="m29.824 44.66v10.34m-20.648-10.34v10.34m24.089-18.383c0 1.503-.36 4.56-1.147 5.745-.79 1.184-4.589 4.595-4.589 4.595-1.5421 1.4796-3.5979 2.3033-5.735 2.298h-4.588c-2.1371.0053-4.1929-.8184-5.735-2.298 0 0-3.8-3.41-4.589-4.595s-1.147-4.242-1.147-5.745m33.265-12.637h-39m12.618-16.086v-5.745c-5.449 1.819-9.178 5.695-9.178 11.49v4.595l-2.294 1.149v2.298m25.236-13.787v-5.745c5.449 1.819 9.177 5.695 9.177 11.49v4.595l2.294 1.149v2.298m-21.793-10.341v-10.34h6.882v10.34z" stroke="#494946" stroke-linejoin="round"></path><path d="m33.3 26.376h2.21v5.795c-1.59 1.525-2.505 2.313-2.746 2.366-1.705.376-4.206.84-7.502 1.392-.9147.0019-1.8154-.225-2.62-.66l-1.346-.733c-.536-.292-1.185-.808-1.787-.816-.635-.007-1.223.508-1.788.816l-1.345.733c-.8046.4352-1.7053.6621-2.62.66-3.296-.55-5.80301-1.014-7.52001-1.392-.23-.05-1.195-.839-2.897-2.366v-5.814h2.335" stroke="#1476f2"></path></svg>),
            title: 'Construction',
            description: 'Optimize project management, streamline communication, and enhance collaboration with custom construction management software.'
        },
        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" height="45" viewBox="0 0 54 45" width="54" class="offer-image replaced-svg"><g stroke-linejoin="round"><path d="m50.033 19.105c.171-.658.305-1.325.404-2.003.61-4.179-.109-9.92798-4.495-13.46898-4.909-3.963002-14.447-3.986002-18.942 3.652-4.497-7.638002-14.033-7.615002-18.94302-3.652-4.385 3.54-5.104 9.28998-4.494 13.46998.1535 1.0627.39944 2.11.735 3.13m3.752 6.792c3.64802 4.721 8.96702 11.035 18.95002 16.975 5.719-7.638 15.844-12.164 19.783-18.105" stroke="#323232"></path><path d="m0 23.632h12.375l3.375 2.263 5.625-15.842 2.25 22.631 5.625-12.447 2.25 4.526 3.375-2.263h19.125" stroke="#1476f2"></path></g></svg>),
            title: 'Healthcare',
            description: 'Enhance patient care, improve workflows, and drive operational efficiency with tailored healthcare software solutions.'
        },
        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" height="56" viewBox="0 0 54 56" width="54" class="offer-image replaced-svg"><clipPath id="a"><path d="m0 0h54v56h-54z"></path></clipPath><g clip-path="url(#a)"><path d="m7.043 55v-2.935c0-.972.79-1.76 1.761-1.76h8.805c.3084.0001.6138-.0605.8987-.1784.2849-.118.5438-.2909.7619-.509.218-.2181.391-.477.5089-.7619.118-.2849.1786-.5903.1785-.8987v-.587c-.0001-.2312.0453-.4602.1337-.6738.0884-.2137.218-.4078.3814-.5713.1635-.1636.3575-.2933.5711-.3818s.4426-.1341.6738-.1341h.587c.3084.0001.6138-.0605.8987-.1784.2849-.118.5438-.2909.7619-.509.218-.2181.391-.477.5089-.7619.118-.2849.1786-.5903.1785-.8987v-1.174c.0001-.3084-.0605-.6137-.1785-.8987-.1179-.2849-.2909-.5438-.5089-.7619-.2181-.218-.477-.391-.7619-.5089-.2849-.118-.5903-.1786-.8987-.1785h-7.043c-.972 0-1.761.789-1.761 1.761 0 .4668-.1854.9145-.5155 1.2445-.3301.3301-.7777.5155-1.2445.5155h-8.219m24.653 11.74v-3.522c-.0001-.3084.0605-.6137.1785-.8987.1179-.2849.2909-.5438.5089-.7619.2181-.218.477-.391.7619-.5089.2849-.118.5903-.1786.8987-.1785h8.217c.6226 0 1.2197-.2473 1.6599-.6876.4403-.4402.6876-1.0373.6876-1.6599s-.2473-1.2197-.6876-1.6599c-.4402-.4403-1.0373-.6876-1.6599-.6876h-1.174c-.6227 0-1.22-.2474-1.6603-.6877s-.6877-1.0376-.6877-1.6603.2474-1.2199.6877-1.6603c.4403-.4403 1.0376-.6877 1.6603-.6877h10.565" stroke="#323232" stroke-linejoin="round"></path><path clip-rule="evenodd" d="m1.17401 55c0-14.263 11.56299-25.826 25.82599-25.826s25.826 11.563 25.826 25.826z" fill-rule="evenodd" stroke="#323232"></path><path clip-rule="evenodd" d="m30.522 8.043.03-1.173-4.727-5.87h-3.522l2.348 5.87v1.173zm14.087 4.697c.0003-.3085-.0603-.614-.1782-.899-.1179-.2851-.2908-.5441-.5089-.7622-.218-.2182-.477-.3912-.762-.5092-.285-.1181-.5904-.1787-.8989-.1786h-26.342c-.128 0-4.18-3.521-4.18-3.521h-2.34801l1.12301 4.714c-.65801.347-1.12301.695-1.12301 1.314 0 1.858 4.16401 2.189 5.35501 2.189h9.906v2.348l-3.522 7.043h3.522l5.87-5.87 2.267-3.521h9.472c.3084.0001.6138-.0605.8987-.1785.2849-.1179.5438-.2909.7619-.5089.218-.2181.391-.477.5089-.7619.118-.2849.1786-.5903.1785-.8987z" fill-rule="evenodd" stroke="#1476f2"></path><path d="m0 31.774c4.98249-5.5209 11.5382-9.3811 18.783-11.06m15.26-.251c7.5857 1.4948 14.4971 5.3695 19.73 11.061" stroke="#323232"></path></g></svg>),
            title: 'Logistics & Automation',
            description: 'Streamline supply chain operations, enhance inventory management, and drive growth with custom logistics software.'
        },
        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" height="56" viewBox="0 0 49 56" width="49" class="offer-image replaced-svg"><g stroke-width=".771429"><path clip-rule="evenodd" d="m24.4978 1c-2.2827 3.08004-17.51737 9.394-23.4978 9.394v22.3106c0 10.4895 22.1791 21.9643 23.4849 22.2954 1.3046-.3311 23.4849-12.6079 23.4849-21.1211v-23.4849c-6.5241 0-21.1881-6.31396-23.472-9.394z" fill-rule="evenodd" stroke="#505050"></path><g stroke="#3f7fe7"><path clip-rule="evenodd" d="m37.4016 38.5604h-25.8334c-.6482 0-1.1742-.5261-1.1742-1.1743v-16.4394c0-.6482.526-1.1742 1.1742-1.1742h25.8334c.6493 0 1.1742.526 1.1742 1.1742v16.4394c0 .6482-.5249 1.1743-1.1742 1.1743z" fill-rule="evenodd"></path><path d="m20.9622 19.7724v-3.5227c0-.6482.526-1.1743 1.1742-1.1743h4.697c.6493 0 1.1742.5261 1.1742 1.1743v3.5227"></path><path d="m22.1364 29.1664v2.3485c0 .6482.5261 1.1742 1.1743 1.1742h2.3484c.6494 0 1.1743-.526 1.1743-1.1742v-2.3485"></path><path d="m38.5758 26.8179c0 1.2964-6.3092 2.3485-14.0909 2.3485s-14.0909-1.0521-14.0909-2.3485"></path></g></g></svg>),
            title: 'Education',
            description: 'Empower educators, engage students, and drive learning outcomes with custom education software solutions.'
        },
        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" height="56" viewBox="0 0 54 56" width="54" class="offer-image replaced-svg"><clipPath id="a"><path d="m0 0h54v56h-54z"></path></clipPath><g clip-path="url(#a)"><path d="m7.043 55v-2.935c0-.972.79-1.76 1.761-1.76h8.805c.3084.0001.6138-.0605.8987-.1784.2849-.118.5438-.2909.7619-.509.218-.2181.391-.477.5089-.7619.118-.2849.1786-.5903.1785-.8987v-.587c-.0001-.2312.0453-.4602.1337-.6738.0884-.2137.218-.4078.3814-.5713.1635-.1636.3575-.2933.5711-.3818s.4426-.1341.6738-.1341h.587c.3084.0001.6138-.0605.8987-.1784.2849-.118.5438-.2909.7619-.509.218-.2181.391-.477.5089-.7619.118-.2849.1786-.5903.1785-.8987v-1.174c.0001-.3084-.0605-.6137-.1785-.8987-.1179-.2849-.2909-.5438-.5089-.7619-.2181-.218-.477-.391-.7619-.5089-.2849-.118-.5903-.1786-.8987-.1785h-7.043c-.972 0-1.761.789-1.761 1.761 0 .4668-.1854.9145-.5155 1.2445-.3301.3301-.7777.5155-1.2445.5155h-8.219m24.653 11.74v-3.522c-.0001-.3084.0605-.6137.1785-.8987.1179-.2849.2909-.5438.5089-.7619.2181-.218.477-.391.7619-.5089.2849-.118.5903-.1786.8987-.1785h8.217c.6226 0 1.2197-.2473 1.6599-.6876.4403-.4402.6876-1.0373.6876-1.6599s-.2473-1.2197-.6876-1.6599c-.4402-.4403-1.0373-.6876-1.6599-.6876h-1.174c-.6227 0-1.22-.2474-1.6603-.6877s-.6877-1.0376-.6877-1.6603.2474-1.2199.6877-1.6603c.4403-.4403 1.0376-.6877 1.6603-.6877h10.565" stroke="#323232" stroke-linejoin="round"></path><path clip-rule="evenodd" d="m1.17401 55c0-14.263 11.56299-25.826 25.82599-25.826s25.826 11.563 25.826 25.826z" fill-rule="evenodd" stroke="#323232"></path><path clip-rule="evenodd" d="m30.522 8.043.03-1.173-4.727-5.87h-3.522l2.348 5.87v1.173zm14.087 4.697c.0003-.3085-.0603-.614-.1782-.899-.1179-.2851-.2908-.5441-.5089-.7622-.218-.2182-.477-.3912-.762-.5092-.285-.1181-.5904-.1787-.8989-.1786h-26.342c-.128 0-4.18-3.521-4.18-3.521h-2.34801l1.12301 4.714c-.65801.347-1.12301.695-1.12301 1.314 0 1.858 4.16401 2.189 5.35501 2.189h9.906v2.348l-3.522 7.043h3.522l5.87-5.87 2.267-3.521h9.472c.3084.0001.6138-.0605.8987-.1785.2849-.1179.5438-.2909.7619-.5089.218-.2181.391-.477.5089-.7619.118-.2849.1786-.5903.1785-.8987z" fill-rule="evenodd" stroke="#1476f2"></path><path d="m0 31.774c4.98249-5.5209 11.5382-9.3811 18.783-11.06m15.26-.251c7.5857 1.4948 14.4971 5.3695 19.73 11.061" stroke="#323232"></path></g></svg>),
            title: 'Travel & Hospitality',
            description: 'Deliver exceptional guest experiences, optimize bookings, and drive growth with custom travel and hospitality software.'
        },
        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" height="56" viewBox="0 0 40 56" width="40" class="offer-image replaced-svg"><path d="m17.625 51.478h4.75m13.063 3.522h-30.877c-1.966 0-3.561-1.577-3.561-3.522v-46.956c0-1.945 1.595-3.522 3.563-3.522h30.875c1.966 0 3.562 1.577 3.562 3.522v46.956c0 1.945-1.595 3.522-3.563 3.522zm-16.625-50.478h5.937zm-4.75 0h2.374zm-13.063 43.435h38zm0-39.914h38z" stroke="#323232"></path><g stroke="#1476f2"><path d="m12.875 19.783h19.779c.796 0 1.366.758 1.138 1.51l-2.85 9.392c-.075.243-.2261.4555-.4309.6062-.2049.1507-.4528.2316-.7071.2308h-15.742"></path><path d="m29.5 36.217h-13.063c-.55 0-1.03-.652-1.187-1.174l-5.93799-17.608h-4.75m9.50099 22.305h2.374m10.688 0h2.375"></path></g></svg>),
            title: 'Retail & Ecommerce',
            description: 'Boost sales, drive customer engagement, and optimize operations with custom retail and ecommerce software.'
        },
    ]
    return (
        <>
            <div className='bg-gray-200 relative w-full py-16 px-6 lg:px-0 font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    <div className='my-2 w-full flex flex-col items-center justify-center text-center'>
                        <h4 className="text-2xl lg:text-4xl mb-4 font-bold max-w-4xl">MOBILE APP SOLUTIONS FOR VERTICALS</h4>
                        <p className='max-w-3xl'>Explore tailored mobile app solutions designed to meet the unique needs of diverse industries. From healthcare to retail, our apps enhance efficiency, drive engagement, and deliver exceptional user experiences.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 mt-10'>
                        {mobileAppSolutionsCard.map((card, index) => {
                            return (
                                <div key={index} className='flex items-center gap-4 bg-white p-6 border border-gray-200'>
                                    <div className='relative'>
                                        <p className=''>{card.svg}</p>
                                    </div>
                                    <div className='relative'>
                                        <h2 className='font-bold text-lg tracking-wide'>{card.title}</h2>
                                        <p className='text-sm tracking-wide'>{card.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileAppSolutions