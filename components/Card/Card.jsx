import Image from 'next/image'
import React from 'react'

function Card(props) {
    
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img className="w-full" src={props.img} alt="Sunset in the mountains"/> */}
            <div className="w-full p-4">
            <Image
                src={props?.productImages[0]}
                alt="featured Tattoo Sleeves"
            //    width={100}
            //    height={100}
                fill
                className='relative'
            />
            </div>
            
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props?.title}</div>
                <p className="text-gray-700 text-base">
                    {props?.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}

export default Card