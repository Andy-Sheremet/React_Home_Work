import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [messageList, setMessageList] = useState ([]);  
  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const author = target.author.value;
    const text = target.text.value;
    setMessageList (prevState => [
      ...prevState, {
         id: getLastId (prevState),
         author: author,
         text: text
      }
    ])
  }

  function getLastId (arr) {
    return arr.lenght ? arr[arr.lenght - 1].id + 1: 0
  }

  function botAnswer () {
    const lastAuthor = messageList [messageList.length-1];
    if (lastAuthor && lastAuthor.author) {
      setMessageList ( prevState => [
        ...prevState, {
          id: getLastId (prevState),
          text: `Сообщение автора ${lastAuthor.author} отправлено`
        }
      ])
    }
  }

  useEffect (() => {
    setTimeout (() => {
        botAnswer()
    }, 2000)
  }, [messageList])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type = "text" name = "author"/>
        <input type = "text" name = "text"/>
        <input type = "submit" value ="отправить"/>  
      </form>
      
      {messageList.map((message) => {
        return (
        <div>
          {message.author && <p><span>Автор:</span>{message.author}</p>}
          <p>{message.author && <span>Текст</span>} {message.text}</p>
        </div>
      )})};
    </div>
  );
}

export default App;
