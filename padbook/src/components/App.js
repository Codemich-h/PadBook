import React from "react";


class App extends React.Component{
    render () {
        return (
            <div className="input-field ui container">
                <form className="ui form">
                    <div className="field">
                    <h1 className="ui header">Save Password</h1>
                    <div>
                        <button className="ui button" type="">Show All</button>
                    </div>
                    <div>
                        <button className="ui button" type="">Specific Password</button>
                    </div>
                    <div className="field">
                        <input type="text" name="first-name" placeholder="App Name" />
                    </div>
                    <div className="field">
                        <input type="text" name="first-name" placeholder="Password Input" />
                    </div>
                    </div>
                    <button className="ui button" type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default App;
