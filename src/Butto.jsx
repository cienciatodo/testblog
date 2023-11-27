import { useState } from "react";
import { useMealsListConstext } from "./MaluContext";



function Butto() {
    const{ localizationData, langua, input, setInput} = useMealsListConstext();

    const { en, ru } = localizationData;


    function openInput(){
        setInput(!true);

        console.log(input);
        
    }



    return(
        <>

       


            <div>
            {langua === 'en'
            ?
            <button onClick={openInput}>{en.addNote}</button>
            :
            <button onClick={openInput}>{ru.addNote}</button> }


            </div>
            
        
        
        </>
  
    )
}

export default Butto;