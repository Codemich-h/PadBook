import React, { useEffect,  useState} from "react";
import axios from "axios";




export default function Create(){
    const [appsName, setAppName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        getData();
    }, [])
   
    const postData = (e) => {
        e.preventDefault();
        axios.post(`https://636b165cb10125b78feaf5a0.mockapi.io/fakeData`,{
            appsName: appsName,
            password: password,
        });          
    };

    const getData = () => {
        axios.get('https://636b165cb10125b78feaf5a0.mockapi.io/fakeData')
        .then((response)  => {
            setPassword(response.data)
        });
    }

    const appName = (e) => {
        setAppName(e.target.value)
    }

    const appPassword = (e) => {
        setPassword(e.target.value)
    }
        return(
            <div className="ui segment">
            <form className="ui form">
            <div className="field" >
            <h1 className="ui center aligned header">Save Password</h1>
            
            <div className="field">
                <input type="text" value={appsName} name="app-name" placeholder="App Name" onChange={appName} />
            </div>
            <div className="field">
                <input type="password" name="password" placeholder="Password" onChange={appPassword} />   
            </div>
            </div>
            <div className="ui buttons">
            <div>
                 <button className="ui primary button" type="submit" onClick={(e) => postData(e)}>Save</button>
            </div> 
            <div>
                 <button className="ui button" type="submit" onClick={(e) => getData(e)}>Show Password</button>
            </div>
            <div className="or"></div>
            <div>
                 <button className="ui positive button" type="submit" onClick={getData}>Hide Password</button>
            </div> 
            </div>
        </form>
        <ul>
            {password.length > 0 && password.map(({id, password}) => 
            <li key={id}>
                <h3>{password}</h3>
            </li>)}
            
          </ul>
        
        </div>
        );
    }

