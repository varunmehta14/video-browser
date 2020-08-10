import React,{useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const App=()=>{
  const[videos,setVideos]=useState([]);//state={videos:[],selectedVideo:null};
  const[selectedVideo,setSelectedVideo]=useState(null);
  
  useEffect(()=>{                            //componentDidMount(){
    onTermSubmit('flying beast');            //  this.onTermSubmit('flying beast')}
  },[]);
  const onTermSubmit=async(term)=>{
    const response=  await youtube.get('/search',{
      params:{
        q:term
      }
      
    });
    setVideos(response.data.items);            //this.setState({videos:response.data.items,
    setSelectedVideo(response.data.items[0]);  //selectedVideo:response.data.items[0]});
  };
  const onVideoSelect=(video)=>{
    setSelectedVideo(video);
  }; 
  return(
    <div className="ui container"> 
      <SearchBar onFormSubmit={onTermSubmit}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column"><VideoDetail video={selectedVideo}/></div>
          <div className="five wide column"><VideoList videos={videos}onVideoSelect={onVideoSelect}/></div>
      </div>
      </div>
    </div>
    );
    

  };
  

export default App;
