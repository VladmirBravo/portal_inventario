import React from 'react';
import { render } from 'react-dom';
import {
    Navbar,
    Footer,
    MenuLista
} from './componentes';

function App() {
    return (
        <div>
            <Navbar />
            <MenuLista />
            <Footer />
        </div>
    );
}

render(<App />, document.getElementById('app'));