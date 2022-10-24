import React from 'react';
import * as reactDom from 'react-dom/client';

class GreetingForm extends React.Component {
    render(){
        return (<span class="inline_elements">
            <p onClick={logIn} class="inline_text">Sign Up</p>
            <p onClick={signUp} class="inline_text">Log In</p>
        </span>);
    }
}

class LogInForm extends React.Component {
    render(){
        return (<div id="cred" hidden={true}>
            <div>
                <input type="text" class="cred_inp" placeholder='username'></input>
            </div>
            <div>
                <input type="password" class="cred_inp" placeholder='password'></input>
            </div>
            <div id="submit_button_div">
                <input type="submit" 
                class="cred_inp" 
                value="Submit" 
                id="submit_button" onClick={goToMain}></input>
            </div>
        </div>);
    }
}

class GreetTitle extends React.Component {
    render(){
        return (<div id="gt" hidden={false}>
            <p>The Lambda</p>
            <div>new era of communication</div>
        </div>);
    }
}

class App extends React.Component {
    render(){
        return (<div>
            <GreetingForm />
            <GreetTitle />
            <LogInForm />
        </div>)
    }
}

function logIn(){
    document.getElementById('cred').hidden = false;
    document.getElementById('gt').hidden = true;
}

function signUp(){
    document.getElementById('cred').hidden = false;
    document.getElementById('gt').hidden = true;
}

function goToMain(){
    let currentUrl = document.location.href;
    let followUrl = currentUrl + 'main.html';
    window.open(followUrl, '_self');
}

reactDom.createRoot(document.getElementById('root')).render(<App />);