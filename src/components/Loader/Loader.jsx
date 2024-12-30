import React from 'react'
import "./Loader.css"
function Loader() {
    return (
        <>
            <div className='h-screen w-full flex items-center justify-center'>
                <div class="loader">
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                </div>
            </div>
        </>
    )
}

export default Loader