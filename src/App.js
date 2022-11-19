import { useState } from 'react';


function App() {
  const [value, setValue] = useState("");
  console.log('value:', value)

  function handleSubmit(e) {
      e.preventDefault();
      
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
          <div className='small-square small_1'/>
          <div className='small-square small_2'/>
          <div className='small-square small_3'/>
          <div className='small-square small_4'/>
          <div className='small-square small_5'/>
          <div className='small-square small_6'/>
        </div>
      </section>
    </div>
  );
}

export default App;
