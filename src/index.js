import React from 'react';
import * as reactDom from 'react-dom/client';

class Button extends React.Component {
    render(){
        return (<button>Btn</button>);
    }
}
reactDom.createRoot(document.getElementById('root')).render(<Button />);