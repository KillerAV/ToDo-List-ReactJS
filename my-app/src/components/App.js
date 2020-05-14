import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Main from './Main';

class App extends React.Component {
    render(){
        return (
            <div>
                <NavBar />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;