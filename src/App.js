import './App.css';
import {BrowserRouter} from "react-router-dom";
import BookComponent from './components/BookComponent';
import NavBar from './components/NavBar';
import React, {Fragment} from 'react';

// function App() {
class App extends React.Component {
  render (){
    return (
        <BrowserRouter>
        <Fragment>
          <div className="container-fluid">
            <NavBar />
            <BookComponent />
          </div>
        </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
