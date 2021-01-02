import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Routes from './routes'
import Theme from "./themes";
import RTL from "./components/RTL";

function App() {
    return (
        <Theme>
            <RTL>
                <Router>
                    {/*<Header/>*/}
                    <Routes/>
                </Router>
            </RTL>
        </Theme>
    )
}

export default App;

// <div>
//     {page === 0 ? (
//         <div>
//             <Home setPage={setPage}/>
//         </div>
//     ) : page === 1 ? (
//         <div>
//             <Main setPage={setPage}/>
//         </div>
//     ) : (
//         <div>404</div>
//     )}
//     <div>Footer</div>
// </div>