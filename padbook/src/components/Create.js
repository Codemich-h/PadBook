import React, { useState} from "react";
import axios from "axios";



export default function Create(){
    const [appName, setAppName] = useState('');
    const [password, setPassword] = useState('false');

    const postData = (e) => {
        e.preventDefault();
        axios.post('https://636b165cb10125b78feaf5a0.mockapi.io/fakeData', {
            appName: appName,
            password: password,
        });
    };
        return(
            <div>
            <form className="ui form">
            <div className="field">
            <h1 className="ui header">Save Password</h1>
            <div>
                <button className="ui secondary button" type="">Show All</button>
            </div>
            <div>
                <button className="ui secondary button" type="">Specific Password</button>
            </div>
            <div className="field">
                <input type="text" name="app-name" placeholder="App Name" onChange={(e) => setAppName(e.target.value)} />
            </div>
            <div className="field">
                <input type="password"  name="password" placeholder="Password" onChange={(e) => setPassword(e.target.validity)} />
            </div>
            </div>
            <button className="ui primary button" type="submit" onClick={postData}>Save</button>
        </form>
            </div>
        );
    }

