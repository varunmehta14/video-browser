import React,{useState}from 'react';
const SearchBar=({onFormSubmit})=>{
    const[term,setTerm]=useState('');//state={term:''};
    // const onInputChange=event=>{
    //     setTerm(event.target.value);//this.setState({term:event.target.value});
    // };
    const onSubmit=event=>{
       
        event.preventDefault();//prevents from reloading the website on submit
        onFormSubmit(term);// this.props.onFormSubmit(this.state.term);
        
    };
    return(
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit}className="ui form">
                <div className="field">
                  <label>Video Search</label>
                  <input type="text"
                         value={term}
                         onChange={(event)=>setTerm(event.target.value)}/>
                </div> 
            </form>
            
           
        </div>
    );
    
};

export default SearchBar;