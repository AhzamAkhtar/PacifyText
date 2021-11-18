//TEXT TUTILSW WEBSITE
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Textform from './Textform';
import Aboutus from "./Aboutus"
import Alert from "./Alert"
ReactDOM.render(
  <><App />
  <Alert/> 
  <Textform heading="ENTER THE TEXT TO ANALYZE"  />
  <div className="container">
  <h2 >ABOUT US</h2>
  <Aboutus/>
  </div>
  </>,
  document.getElementById('root')
);

//GOOGLE KEEP CLONE

/*import React from "react";
import ReactDom from "react-dom";
import Aop from "./Aop"

ReactDom.render(<Aop/>,document.getElementById("root"))*/