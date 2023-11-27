import { useEffect, useState } from "react";
import { useMealsListConstext } from "./MaluContext";


function Locale(){


    const{privateNotes, localizationData, langua, changeEnglish, changeRussian, onSave, lol} = useMealsListConstext();

  

    let [{color, isPublic, owner, tags, text, title, id}] = privateNotes;
    const { en, ru } = localizationData;

    



    return(
        <>

        <p>
            <button  onClick={changeEnglish}>
                en
            </button>

            <button onClick={changeRussian}>
                ru 
            </button>

      


          
        </p>

        </>
    )
}

export default Locale;