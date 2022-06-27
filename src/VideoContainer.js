import { useContext, useEffect } from "react"
import { VideoStateContext } from "./AppProvider"


export default function VideoContainer()
{
    const {ShowVideoList} =useContext(VideoStateContext);

    
    return(

        <div className="Video-Container-flex">
           
            {ShowVideoList.map((item)=>{
                return( <div className="Container-flex-item">
                    <iframe width="300" height="200" src={item.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>)
            })
        }
        </div>
    )
}