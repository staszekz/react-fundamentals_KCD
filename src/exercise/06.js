// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const [isError, setIsError] = React.useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    console.dir(e.target)
    console.log(e.target)
    onSubmitUsername(e.target.elements.myInput.value)
    // onSubmitUsername(e.target[0].value)
  }

  const handleChange = e => {
    // const value = e.target.value
    const {value} = e.target
    console.log(value)
    setIsError(
      value === value.toLowerCase() ? null : 'Username must be lower case',
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="myInput">Username:</label>
        <input onChange={handleChange} id="myInput" type="text" />
      </div>
      <div role={'alert'} style={{color: 'red'}}>
        {isError}
      </div>
      <button type="submit" disabled={!!isError}>
        Submit
      </button>
    </form>
  )
}

// function UsernameForm({onSubmitUsername}) {
//   // 🐨 add a submit event handler here (`handleSubmit`).
//   // 💰 Make sure to accept the `event` as an argument and call
//   // `event.preventDefault()` to prevent the default behavior of form submit
//   // events (which refreshes the page).
//   // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//   //
//   // 🐨 get the value from the username input (using whichever method
//   // you prefer from the options mentioned in the instructions)
//   // 💰 For example: event.target.elements[0].value
//   // 🐨 Call `onSubmitUsername` with the value of the input

//   // 🐨 add the onSubmit handler to the <form> below

//   // 🐨 make sure to associate the label to the input.
//   // to do so, set the value of 'htmlFor' prop of the label to the id of input
//   const inputRef = React.useRef()

//   const handleSubmit = e => {
//     e.preventDefault()
//     console.dir(inputRef)
//     console.log(inputRef)
//     onSubmitUsername(inputRef.current.value)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input ref={inputRef} type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }
function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
