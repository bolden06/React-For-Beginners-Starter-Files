import React from 'react';
import { render } from 'react-dom';
import { BroswerRouter, Match, Miss} from 'react-router'

import './css/style.css';
import App from './components/App';
import NotFound from './components/NotFound'

import StorePicker from './components/StorePicker';

const Root = () => {
    return (
        <BroswerRouter>
            <div>
                <Match exactly pattern="/" component={StorePicker} />
                <Match pattern="/store/:storeId" component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
        )
}

render(<App/>, document.querySelector('#main'));
