import React from "react";
//react dom empuja lo que hacemos con react hacia el navegador
import ReactDOM  from 'react-dom';
import HelloWorld from "./components/HelloWorld";

ReactDOM.render(<HelloWorld /> , document.querySelector('#app'));



