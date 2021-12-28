// A Smart Component from Framer

import Image from 'next/image'
import cocohat from '../public/cocohat.jpg'
import cocohat_2 from '../public/cocohat_2.jpg'
import cocohat_3 from '../public/cocohat_3.jpg'
import cocohat_4 from '../public/cocohat_4.jpg'
import cocohat_5 from '../public/cocohat_5.jpg'
import cocohat_6 from '../public/cocohat_6.jpg'
import cocohat_7 from '../public/cocohat_7.jpg'
import cocohat_8 from '../public/cocohat_8.jpg'

export default function Cocohat() {
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
                <p className="title">Cocohat</p>            
                <p className="englishText">COCOHAT was designed by Kim Ye-jin, inspired by Coco Chanel, a fashion designer and founder of Chanel. Coco Chanel designed the fashion philosophy that practical comfort is dignity, using minimal practical design costumes and colorful accessories. She thought that women&apos;s fashion, which was too colorful and curvy in the 1910s, was not elegant, and showed a confident female figure as the first designer to let women wear pants. The lighting was designed by applying Coco Chanel&apos;s design characteristics, design philosophy, and her confident attitude to the lighting.</p>
                <p className="koreanText">코코햇은 패션 디자이너이자 샤넬의 설립자인 코코 샤넬에게서 영감을 받아 김예진이 디자인 디자인 했다. 코코샤넬은 실용적인 편한 것이 곧 품격이라는 패션 철학을 아래, 미니멀한 실용적인 디자인의 의상과 화려한 액세서리를 사용해서 디자인 했다. 그녀는 1910년대 당대의 지나치게 화려한 장식과 몸을 옥죄었던 여성 패션들이 품격 있지 않다고 생각했고, 여성들에게 처음으로 바지를 입게 해준 디자이너로 자신감 있는 당당한 여성상을 보여주었다. 이 조명은 코코샤넬의 디자인 특징과 디자인 철학, 그리고 그녀의 자신감 있는 태도를 조명에 적용시켜 디자인 됐다.
                </p>
                <Image src={cocohat} alt="01" />
                <Image src={cocohat_2} alt="02" />
                <Image src={cocohat_3} alt="03" />
                <Image src={cocohat_4} alt="04" />
                <Image src={cocohat_5} alt="05" />
                <Image src={cocohat_6} alt="06" />
                <Image src={cocohat_7} alt="07" />
                <Image src={cocohat_8} alt="08" />

            </div>
        
        </>
    )
}