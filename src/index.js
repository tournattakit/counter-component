
import React from 'react';
import ReactDOM from "react-dom";
import Counter from "../dist/index";
//import Counter from "../components/counter";

ReactDOM.render(<Counter from={0} to={1000} delay={1000} />, document.getElementById('root'));