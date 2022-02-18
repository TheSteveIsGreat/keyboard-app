import {useState} from 'react'
const MessageBasic = ()=>{
 
    const [message, setMessage] = useState('')
    const handleClicked = (char) => {
        console.log(`${char} clicked`)
        setMessage(message + char)
    }

    const getAlphabet = () => {
        let arr = []
        for (let i = 97; i <= 122; ++i) {
            arr.push(String.fromCharCode(i));
        }
        return arr;
      }

      const renderKeyboard = () => {
          let alp = getAlphabet()

          let jsx = alp.map(char => {
              return <button key={char} onClick={() => handleClicked(char)}>{char}</button>
          })
          return jsx
      }

    return (
       <div>
           <h1>Keyboard App</h1>
           <p>{message}</p>
           {renderKeyboard()}
       </div> 
    )
}

export default MessageBasic