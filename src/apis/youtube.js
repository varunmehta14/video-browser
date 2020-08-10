import axios from 'axios';
const KEY='AIzaSyDJLHuxIk0mLDDOOMQRGm0PDkl9NNQC6QI';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
        
    }
});
