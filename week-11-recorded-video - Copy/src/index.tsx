import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import el from './higher-order-components/with-hoc-demo';

ReactDOM.render( el, document.getElementById( 'root' ) );

// setTimeout(() => {
//     ReactDOM.render( <div>That's All Folks !!!</div>, document.getElementById( 'root' ) );
// }, 10000);