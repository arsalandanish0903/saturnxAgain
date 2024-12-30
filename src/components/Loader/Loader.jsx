import React from 'react'
import "./Loader.css"
function Loader() {
    return (
        <>
            <div className='h-screen w-full flex items-center justify-center'>
                <div id="page">
                    <div id="loader">
                        <div id="ring"></div>
                        <div id="ring"></div>
                        <div id="ring"></div>
                        <div id="ring"></div>
                        <div id="h3">loading</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader