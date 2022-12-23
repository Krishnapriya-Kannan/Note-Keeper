import './App.css';
import React, { useState } from 'react';
import Header from './component/Header';
function App() {
  const [data,setData] = useState({title:'',notes:''});
  const [store,setStore]= useState([]);
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleDelete=(ind)=>{
    var newstore= store;
     newstore.splice(ind,1);
     setStore([...newstore]);
     console.log(store);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newstore = store;
    newstore.unshift({notes:data.notes,title:data.title})
    setStore([...newstore]);
    console.log(store);
    console.log(data);
  }

  return (
    <div >
    <Header/>
      <div className="App">
        <input  style={{width:'500px',height:'30px'}}name='title'  placeholder='Title'onChange={handleChange}></input><br/>
      <textarea style={{width:'500px',height:'200px'}} name='notes' placeholder='Take a note...' onChange={handleChange}/> <br/>
      <button type='submit'style={{color:'white',position:'absolute',marginLeft:'150px',marginTop:'-35px'}} id ='add' onClick={handleSubmit}>Add</button>
  
    </div>
    {store.map((store,ind)=>{
          return(
        <div key={ind} className='res' style={{ width:'200px', height:'200px'}}>
          <div style={{paddingLeft:'10px'}}>
          <br/> <b> {store.title}</b><br/>
        <p>  {store.notes}</p>
          
          <button type='submit' style={{position:'absolute',border:'none',marginLeft:'100px'}} id='delete' onClick={()=>handleDelete(ind)}>DELETE</button>
          </div>
        </div>
          )
        })}
           </div>
   
  );
}

export default App;