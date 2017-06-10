
import React, { Component } from 'react';

import Logo from './Components/Logo';
import Graph from './Components/Graph';

class App extends Component {
    render() {
        return (
            <main>
              <Logo />
              <Graph
                depth={ 10 }
                origin="86fbb68d-53da-4452-a19c-1289646442b0" />
            </main>
        );
    }
}

export default App;
