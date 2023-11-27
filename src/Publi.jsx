import { useContext } from "react";
import { useMealsListConstext } from "./MaluContext";
import { useState } from "react";


function Publi(){

    const{publicNotes, setPublicNotes, localizationData, langua} = useMealsListConstext();

    const{en, ru} = localizationData;


    function onDelete(index){
        let filteredNotes = publicNotes.filter((data, i) => i !== index);
      setPublicNotes(filteredNotes);
      }
      
    
    



    return(
        <>
        {publicNotes.length <= 0 ? "at the moment you don't have any Personal notes" : <h2>{langua === 'en' ? en.Public : ru.Public}</h2>}

        {publicNotes.map((val, idx) => {
            return(
                <div key={val.id} style={{backgroundColor: val.color}}>
                
                <div>
                    <h3>{val.title}</h3>
                    
                    <p>--</p>

                    <p>{val.text}</p>

                    <p>--</p>

                 

                    <h4>written by:{val.owner}</h4>

                    <h6>post number: {idx}</h6>
                    <button onClick={() => {onDelete(idx)}}>Delete</button>
                    <button>Edit</button>
                    <button>view more</button>
                </div>
            </div>
            )
        })}



        </>
    )
};


export default Publi;