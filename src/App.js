import { useState } from 'react';

function App() {
  //stan w którym rpzetrzymuję liczby
  const [value, setValue] = useState("");
  console.log('value:', value)
  const [border, setBorder] = useState("");
console.log('border',border)
  

  function handleSubmit(e) {
    e.preventDefault();
    const valueArray = [...value].reverse();
    console.log(valueArray);

    if (valueArray.length == 1) {
      if(valueArray[0] == 1){
        setBorder({borderTop: 'solid black 1px'})

      }
    } else if (valueArray.length == 2) {
    } else if (valueArray.length == 3) {
    } else if (valueArray.length == 4) {

    }
  }

 


  //funckja pobierająca dane do state'u
  //i skracająca je gdyby uzytkownik chciał wpisać większą liczbę
  function handleChange(e) {
    setValue(e.target.value); 

    if (e.target.value.length > 4) {
      setValue(e.target.value.slice(0, 4));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Translate your numbers into runes!</h1>
      </header>
      <form 
        className="App-form"
        onSubmit={handleSubmit}
      >
        <p>enter a number from 0 to 9999</p>
        <input
          type='number'
          className="App-form_input"
          aria-label="enter a number"
          min='1'
          max='9999'
          value={value}
          onChange={handleChange}
        />
        <button>start</button>
      </form>
      <section className="App-image">
        <div className='big-square'>
          <div className={`small-square `}  />
          <div className={`small-square `} style={border}/>
          <div className={`small-square `} style={{}}/>
          <div className={`small-square `} style={{}}/>
          <div className={`small-square `} style={{}}/>
          <div className={`small-square `} style={{}}/>
        </div>
      </section>
    </div>
  );
}

export default App;
