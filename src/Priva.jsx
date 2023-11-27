import { useContext } from "react";
import { useMealsListConstext } from "./MaluContext";
import { useState } from "react";

function Priva(){

    const{privateNotes, setPrivateNotes, localizationData, langua} = useMealsListConstext();

    const{en, ru} = localizationData;
 



   
  function onDelete(index){
    let filteredNotes = privateNotes.filter((data, i) => i !== index);
  setPrivateNotes(filteredNotes);
  }
  






    return(
        <>

        {privateNotes.length <= 0 ? "at the moment you don't have any Personal notes" : <h2>{langua === 'en' ? en.notesTitle : ru.notesTiltle}</h2>}

        {privateNotes.map((val, idx) => {
            return(
            <div key={val.id +33} style={{backgroundColor: val.color}}>
                
                <div>
                    <h3>{val.title}</h3>
                    
                    <p>--</p>
    
                    <p>{val.text}</p>
    
                    <p>--</p>
    
                    <h4>written by:{val.owner}</h4>                
                    <h6>post number: {idx}</h6>
                 
                </div>
                <button onClick={() => {onDelete(idx)}}>Delete</button>
                <button>Edit</button>
                <button>view more</button>
            </div>
            )
        })}



     
        
        </>
    )
}

export default Priva;



// ...prev,
// color: 'magica',
// isPublic: 'love',
// owner: 'love',
// tags: false,
// text: 'red',
// title:"maputo",
// id:25,