import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/footer';
import { Navigation } from './components/navigation';
import { Homepage } from './views/homepage';
import styles from './App.module.scss';

function App(): JSX.Element {
    return (
        <Router>
            <Navigation/>
            <div className={styles.content}>
                <Homepage/>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
