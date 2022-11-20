import { useState,useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

function App() {
  //stan w którym rpzetrzymuję liczby
  const [value, setValue] = useState("");

  //tu wrzucam do arraya zeby można było zrobić reverse 
  //dzięki temu liczby zawsze będą w porządku
  const valueArray = [...value].reverse();

  //tutaj mam obiekt na przypisanie wartości do danej klasy
  const borderArray = { 
    borderTR: valueArray[0],
    borderTL: valueArray[1],
    borderBL: valueArray[2],
    borderBR: valueArray[3]
  }

  //funckja pobierająca dane do state'u
  //i skracająca je gdyby uzytkownik chciał wpisać większą liczbę
  const handleChange = (e) => {
    setValue(e.target.value); 

    if (e.target.value.length > 4) {
      setValue(e.target.value.slice(0, 4));
    }
  }
 
  //tworze obraz z dom do pobrania w pdf, użyłam do tego paczki html-to-image
  const image = useRef();

  const makePicture = useCallback(() => {
    if (image.current === null) {
      return
    }

    toPng(image.current, { cacheBust: true, backgroundColor: 'white' })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'your-rune.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [image])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Translate your numbers into the runes!</h1>
      </header>
      <section className="app-form">
        <p>enter a number from 0 to 9999</p>
        <input
          type='number'
          className="app-form_input"
          aria-label="enter a number"
          min='1'
          max='9999'
          value={value}
          onChange={handleChange}
        />
      </section>
      <section className="app-image">
        <div ref={image} className='big-square'>
          <div className='medium-square_left'>
            <div className={`small-square top_${borderArray.borderTL}`} />
            <div className='small-square' />
            <div className={`small-square bottom_${borderArray.borderBR}`} />
          </div>
          <div className='medium-square_right'>
            <div className={`small-square top_${borderArray.borderTR}`} />
            <div className='small-square' />
            <div className={`small-square bottom_${borderArray.borderBL}`} />
          </div>
        </div>
      </section>
      <button className='download-btn' onClick={makePicture}>Download</button>
    </div>
  );
}

export default App;