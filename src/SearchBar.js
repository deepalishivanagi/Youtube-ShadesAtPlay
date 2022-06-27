import { useContext } from "react"
import { VideoStateContext } from "./AppProvider"

export default function SearchBar() {

    const{GetUserDataHandler}=useContext(VideoStateContext)

    return(
        <div>
         <p>Search <input type="text" onChange={(e)=>{GetUserDataHandler(e)}}></input></p>   
        </div>
    )
}