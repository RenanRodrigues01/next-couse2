import dynamic from 'next/dynamic'
import { useState } from "react"
//import YoutubeVideo from "../components/DynamicVideo"

const YoutubeVideo = dynamic(() => import('../components/DynamicVideo'));

export default function DynamicIportPage () {
    const [visble, setVisible] = useState(false)
    return(
        <div>
            <p>
                mostrar video
                <input
                    type='checkbox'
                    onChange={() => {setVisible(!visble)}}
                />
            </p>
            {visble && <YoutubeVideo /> }
        </div>
    )
}