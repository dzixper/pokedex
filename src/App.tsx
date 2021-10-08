import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/footer';
import { Navigation } from './components/navigation';
import { Homepage } from './views/homepage';

function App(): JSX.Element {
    return (
        <Router>
            <Navigation/>
            <div className='content'>
                <Homepage/>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
