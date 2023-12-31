import { useEffect } from "react"


const useTitle = title =>{
    useEffect(() =>{
         document.title = `Kids Store | ${title} `;
    },[title])
}

export default useTitle;