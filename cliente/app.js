import React from 'react';
import { render } from 'react-dom';
import {
    Navbar,
    Footer
} from './componentes';

function App() {
    return (
        <div>
            <Navbar />
            <Footer/>
        </div>
    );
}

render(<App />, document.getElementById('app'));