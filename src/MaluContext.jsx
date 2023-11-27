import React, { useEffect, useState } from "react";


const LocalizationData = React.createContext();

const todaysMeals =  [ 'baked Beans' , 'potatoes', 'fruits', 'vegetables'];




const MaluContext = ({children}) => {

    const[langua, setLangua] = React.useState('en');
    const [meals, setMeal] = React.useState(todaysMeals);

    const [title, setTitle] = React.useState('');
    const [text, setText] = React.useState('');
    const [tags, setTags] = React.useState('');
    const [isPublic, setIsPublic] = React.useState(false);
    const [color, setColor] = React.useState('');
    const [numero, setNumero] = React.useState('');


    //state for adding data to private or public notes

    const[addNotes, setAddNotes] = React.useState([{}]);
    const [input, setInput] = React.useState(false);

    



    //private notes
    const [privateNotes, setPrivateNotes] = React.useState([
      { color: 'lime',      isPublic: false, owner: 'Samir', tags: ['tag1'], text: 'text1', title: 'title1', id: 1 }, 
      { color: 'red',      isPublic: false, owner: 'Samirolandi', tags: ['tag10'], text: 'text1', title: 'title1', id: 2 },
      { color: 'green',      isPublic: false, owner: 'Samirara', tags: ['tag11'], text: 'text1', title: 'title1', id: 6 }     
    ]);

  //public notes
    const [publicNotes, setPublicNotes] = React.useState([
      { color: 'pink', isPublic: false, owner: 'John', tags: ['tag36'], text: 'text5', title: 'title5', id: 5 },
      {color: 'blue', isPublic: false, owner: 'carmelia', tags: ['tag9'], text: 'text7', title: 'title6', id:6} ,
      {color: 'brown', isPublic: false, owner: 'feliz', tags: ['tag03'], text: 'text55', title: 'title6', id: 7},
      
      
    ]);     

    //here you can find some translation variations

    const localizationData = {
      en: {
        notesTitle: 'Personal Notes',
        addNote: 'Add Note',
        createNote: 'Create Note',
        deleteModalText: 'Are you sure you want to delete this note?',
        Title: 'Title', 
        Text: 'Text', 
        Tags: 'Tags (separated by comma)',
        Public: 'Public Notes',
        Color: 'Color',
        Save:'Save',
        Cancel:'Cancel'
  
      },
      ru: {
        notesTitle: 'Персональные заметки',
        addNote: 'Добавить заметку',
        createNote: 'Создать заметку',
        deleteModalText: 'Вы уверены, что хотите удалить эту заметку?',
        Title: 'заголовок', 
        Text:  'Текст', 
        Tags: 'Теги (разделены запятой)',
        Public: 'публичные заметки',
        Color:  'Цвет',
        Save:'Сохранить',
        Cancel:'Отмена' 
     
      },
      
    };

    function changeRussian(){        
        setLangua('ru');
    }


    function changeEnglish(){
        setLangua('en')
    };

    const handleAddNote = (note) => {
      if(privateNotes.isPublic === false){
        setPrivateNotes([...privateNotes, addNotes]);
        setInput(false);
  
      }else{
        setPublicNotes([...publicNotes, addNotes])
        setInput(false)
      }
    
    };

    const[updateData, setUpdateData]= useState({color: undefined,
    isPublic: undefined,
    owner: undefined,
    tags: undefined,
    text: undefined,
    title: undefined,
    id: undefined, });

  const[booleanLol, setBooleanLol] = React.useState(false)






function onSave(){  

  // setBooleanLol(true);

  // setPrivateNotes((prev) => {
  //   return [...prev, lol];
  // });
  
  

  console.log(privateNotes);

}







  




    


 





    return (
        <LocalizationData.Provider  value={{ setPrivateNotes,privateNotes , localizationData, langua, changeEnglish, changeRussian, publicNotes, privateNotes, title, setTitle,text, setText,tags, setTags,isPublic, setIsPublic,color, setColor,input, setInput, onSave, numero, setNumero, updateData,setUpdateData, booleanLol, setBooleanLol, setPublicNotes}}>


            {children}


        </LocalizationData.Provider>
    )
}

export const useMealsListConstext = () => React.useContext(LocalizationData)

export default MaluContext;



/*

    function onSaave() {
      setLol((prev) => {
        return{
          ...prev,
          title: 'magica',
          text: 'love',
          tags: 'love',
          isPublic: false,
          color: 'red',
          
        }
      })
    }


*/


/*

    function onSave() {
      setLol((prev) => {
        return{
          ...prev,
          color: 'magica',
          isPublic: 'love',
          owner: 'love',
          tags: false,
          text: 'red',
          title:"maputo",
          id:25,
        }
      });

      setPrivateNotes((previ) => {
        return [...previ, lol]
      });

      console.log(privateNotes);
    }



*/

/*
   
    useEffect(() => {
      onSave();
    }, [lol]);
    
    function onSave() {
      setLol((prev) => ({
        ...prev,
        color: 'magica',
        isPublic: 'love',
        owner: 'love',
        tags: false,
        text: 'red',
        title: 'maputo',
        id: 25,
      }));
      
         // Use the updated value of `lol` here
         setPrivateNotes((previ) => [...previ, lol]);
    
         // Use the updated value of `privateNotes` here
         console.log(privateNotes);
    }
    


*/

/*
useEffect(() => {
  setLol((prev) => {
    return {
      ...prev,
      color: 'magica',
      isPublic: 'love',
      owner: 'love',
      tags: 'fala',
      text: 'red',
      title: 'maputo',
      id: 205,
    }
  }),
  console.log('renderizou estou aqui', lol);


  lol.title = 'san pierre';
  
  console.log('aqui tambem', lol);


},[booleanLol]);


*/