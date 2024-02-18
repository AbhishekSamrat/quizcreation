import {useState,useEffect} from 'react';
import './App.css';

function App() {
const [input,setinput] = useState("")
const[inputarr,setinputarr] =useState([])
const[editinput,seteditinput] = useState("")
const[editinputarr,seteditinputarr] = useState([])


const handlequiz = () =>{
  if(input.trim  !== ""){
    setinputarr([...inputarr,input])
  }
  setinput("")
}

useEffect(() =>{

},[setinputarr])
const handleupdate = () =>{
  const finalquiz = [...inputarr] 
  finalquiz[editinputarr] = editinput
  setinputarr(finalquiz)
  seteditinputarr(null)
  seteditinput("")
}
const handleeditquiz = (el,index) =>{
seteditinputarr(index)
seteditinput(el)

}
const handledel =(index)=>{
const updatequiz = inputarr.filter((_,i) => i !== index )
setinputarr(updatequiz)
}

const strtquiz = () =>{


}

const allquiz = () =>{

  inputarr.map((el,index) =>{
<ul>
<li>{el}</li>
</ul>

  })
}
  return (
    <div className="App">
    <h1>Create Your quiz </h1>
      <input type='text' value={input} placeholder='add your quiz' onChange={(el) =>setinput(el.target.value)}></input>
      <button onClick={handlequiz}>Add quiz</button>

      {
        inputarr.map((el,index) =>{
          return(

            <ul>
          
            <li>
            {
              editinputarr === index ?(
                <>
                (
                  <input type='text' value={editinput}  onChange={(el) =>seteditinput(el.target.value)}></input> <button onClick={handleupdate}>Update</button>
                  
                </>
                 )
              :
              (
                <>
                <h4>select the correct answer</h4>
                <strong>{el}</strong><br></br>

                <input type='radio' name='quiz'></input>html
                <input type='radio' name='quiz'></input>css
                <input type='radio' name='quiz'></input>js
                <input type='radio' name='quiz'></input>none of these
                <button onClick={()=>handleeditquiz(el,index)}>Edit</button>
                </>
            
              )
            }
          
      
           
            <button onClick={()=>handledel(index)}>Delete</button>
            <button onClick={strtquiz}>Start Quiz</button>
            <button onClick={allquiz}>View All Quiz</button>
            
            </li>
            </ul>
          )
         
        })
      }
    </div>
  );
}

export default App;
