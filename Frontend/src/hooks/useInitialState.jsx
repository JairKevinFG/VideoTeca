import {useEffect,useState} from 'react'


const useInitialState = (API) => {
    const [videos, setVideos] = useState({"mylist": [], "trends": [],"originals": [] })

    useEffect(()=> {
        fetch(API)
            .then(response => response.json())
            .then(data  => {  return setVideos(data)})
        console.log(videos)
    }, [])

    return videos;
}


export default useInitialState;