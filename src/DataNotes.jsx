import { useContext } from "react";
import { useMealsListConstext } from "./MaluContext";
import { useState , useEffect} from "react";

function DataNotes(){

    const{privateNotes, localizationData, langua, title, setTitle,text, setText,tags, setTags,isPublic, setIsPublic,color, setColor, input, setInput, lol, setLol, numero, setNumero, setUpdateData, updateData, setPrivateNotes, booleanLol, setBooleanLol, publicNotes, setPublicNotes} = useMealsListConstext();

    const{en, ru} = localizationData;

        function reset(e){
            e.preventDefault()
            setTitle('');
            setColor('');
            setTags('');
            setText('')
            setIsPublic(false);
            setInput(false);
            console.log(input);
        };


        useEffect(() => {
            setUpdateData((prev) => {
              return {
                ...prev,
                color: color,
                isPublic: isPublic,
                owner: 'loveiuo',
                tags: tags,
                text: text,
                title:title,
                id:26,
              }
            })
          },[booleanLol]);



useEffect(() => {
    if(isPublic === false){
        setPrivateNotes([...privateNotes, updateData]);
    }else{
        setPublicNotes([...publicNotes, updateData]);
    }
  
}, [updateData]);

const [refresh, setRefresh] = useState(false)

useEffect((e) => {
   
    setTitle('');
    setColor('');
    setTags('');
    setText('')
  
    setInput(true);
}, [refresh])


function onSave(e){
    setBooleanLol(!booleanLol);
    setRefresh(!refresh)


}




      
/*

 function onSave(){
        setUpdateData((prev) => {
            return{
              ...prev,
              color: color,
              isPublic: isPublic,
              owner: 'love',
              tags: tags,
              text: text,
              title:title,
              id:25,
            }
          });

          setPrivateNotes([...privateNotes, updateData]);

          console.log(privateNotes);

       }




*/
      










    return(


        <>

        {input === false?
         <div>
            
            <h3>{langua === 'en'? en.createNote : ru.createNote }</h3>
            <p >{console.log(updateData)}</p>

            <label>{langua === 'en' ? en.Title : ru.Title}:</label>
            <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>


            <label>{langua === 'en' ? en.Text : ru.Text}:</label>
            <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} />


            <label>{langua === 'en' ? en.Tags : ru.Tags}:</label>
            <input type="text" value={tags} onChange={(e) => {setTags(e.target.value)}}/>


            <label>{langua === 'en' ? en.Public : ru.Public}:</label>
            <input type="checkbox"            
             value={isPublic} 
             onChange={(e) => {
                setIsPublic(e.target.checked);
                console.log(e.target.checked, 'cima');
                
                }} />

                {console.log(isPublic, 'baixo')}


            <label>{langua === 'en' ? en.Color : ru.Color}:</label>
            <input type="text"  value={color} onChange={(e) => {setColor(e.target.value)}}/>

            <br/>
         
            <button onClick={onSave}>{langua === 'en' ? en.Save : ru.Save}</button>
            <button  onClick={reset}>{langua === 'en' ? en.Cancel : ru.Cancel}</button>
            
      
        </div>
        : null}



        
        
        
        </>

       
)
       
          

        
      
        
    
}

export default DataNotes;

/*
  <form>
            <h3>{langua === 'en'? en.createNote : ru.createNote }</h3>

            <label>{langua === 'en' ? en.Title : ru.Title}:</label>
            <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>


            <label>{langua === 'en' ? en.Text : ru.Text}:</label>
            <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} />


            <label>{langua === 'en' ? en.Tags : ru.Tags}:</label>
            <input type="text" value={tags} onChange={(e) => {setTags(e.target.value)}}/>


            <label>{langua === 'en' ? en.Public : ru.Public}:</label>
            <input type="checkbox" checked={isPublic}   onClick={(e) => {setIsPublic(e.target.value)}} value={isPublic} onChange={(e) => {setIsPublic(e.target.value)}} />


            <label>{langua === 'en' ? en.Color : ru.Color}:</label>
            <input type="text"  value={color} onChange={(e) => {setColor(e.target.value)}}/>


            <br/>
            <button>{langua === 'en' ? en.Save : ru.Save}</button>
            <button  onClick={can}>{langua === 'en' ? en.Cancel : ru.Cancel}</button>
        </form>

*/