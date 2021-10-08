import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer';
import { Navigation } from './components/navigation';
import { Homepage } from './views/Homepage';

function App(): JSX.Element {
    return (
        <Router>
            <Navigation/>
            <Homepage/>
            <Footer/>
        </Router>
    );
}

export default App;
