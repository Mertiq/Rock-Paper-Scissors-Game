import React, { useState } from 'react';
import './App.css';
import kagit from './Photos/kagit.jpg'
import tas from './Photos/tas.jpg'
import makas from './Photos/makas.jpg'

function App() {

  const [sonuc, setSonuc] = useState("")
  const [a, seta] = useState("")

  function blgsonucu(x){
    if(x === 1)
    {
      return "TAŞ"
    }
    else if (x === 2)
    {
      return "KAĞIT"
    }
    else if (x === 3)
    {
      return "MAKAS"
    }
  }

  

  function onclick(x){

    const blgsonuc = Math.floor((Math.random() * 3) + 1);

    seta(blgsonuc)
    
    console.log(blgsonuc)

    if(x ==="tas" && blgsonuc === 1)
    {
      setSonuc("BERABERE")
    }
    else if(x ==="tas" && blgsonuc === 2)
    {
      setSonuc("BİLGİSAYAR KAZANDI")
    }
    else if(x ==="tas" && blgsonuc === 3)
    {
      setSonuc("SEN KAZANDIN")
    }
    else if(x ==="kagit" && blgsonuc === 1)
    {
      setSonuc("SEN KAZANDIN")
    }
    else if(x ==="kagit" && blgsonuc === 2)
    {
      setSonuc("BERABERE")
    }
    else if(x ==="kagit" && blgsonuc === 3)
    {
      setSonuc("BİLGİSAYAR KAZANDI")
    }
    else if(x ==="makas" && blgsonuc === 1)
    {
      setSonuc("BİLGİSAYAR KAZANDI")
    }
    else if(x ==="makas" && blgsonuc === 2)
    {
      setSonuc("SEN KAZANDIN")
    }
    else if(x ==="makas" && blgsonuc === 3)
    {
      setSonuc("BERABERE")
    }
    
  } 

  return (
    <div className="genel">

      <div className="sonuc_ekrani" >

        <p className = "yazi">Bilgisayarın yaptığı: {blgsonucu(a)}</p>
        
        <p className = "yazi">Sonuc: {sonuc}</p>

      </div>

      <div className ="fotolar">
        
        <div className="ustfotolar">

          <button className="tas" onClick={() => onclick("tas")}> <img className="yuvarla" src={tas} alt=""/></button>
          
          <button className="kagit" onClick={() => onclick("kagit")}> <img className="yuvarla" src={kagit} alt=""/></button>

        </div>

        <div className="altfotolar">
        
          <button className="makas" onClick={() => onclick("makas")}> <img className="yuvarla" src={makas} alt=""/></button>

        </div>

      </div>
     
    </div>
  );
}

export default App;
