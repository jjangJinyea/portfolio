// A Smart Component from Framer

import Image from 'next/image'
import cocohat from '../public/cocohat.jpg'

export default function Works() {
    return (
        <>
            <head>
            <meta name="viewport" content="decice-width, intial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"  />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
            </head>
            
            <div className="header">
                <p className="logo">YJ</p>
                <p className="category">Works</p>
                <object data="/ham.svg" type="image/svg+xml" />
            </div>

            <div className="works">              
                <p></p>
                <Image src={cocohat} alt="01" />
                <p></p>
            </div>
        
        </>
    )
}