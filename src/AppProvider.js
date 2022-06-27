import { createContext, useState } from "react";
import { StaticVideosArray } from "./StaticVideosArray";


export const VideoStateContext =createContext();

export const VideoProvider =(props)=>{

    const [ShowVideoList,setShowVideoList]=useState([]);

    function GetUserDataHandler(e){
        var UserValue=e.target.value;
        var TempArray=[];

        if(UserValue=="")
        {
            setShowVideoList(StaticVideosArray);
            return;
        }
        else
        {
            for(var i=0;i<StaticVideosArray.length;i++)
            {
                var ArrayItem=StaticVideosArray[i].name;
                var sum="";
                for(var j=0;j<ArrayItem.length;j++)
                {
                    sum=sum+ArrayItem[j];
                    if(UserValue.toLowerCase() == sum.toLowerCase())
                    {
                        TempArray.push(StaticVideosArray[i]);
    
                    }
                }
               
            }
        }
       
        setShowVideoList(TempArray);
    }  


    return(
        <VideoStateContext.Provider value={{GetUserDataHandler,ShowVideoList,setShowVideoList}}>
        {props.children}
        </VideoStateContext.Provider>
    )
}