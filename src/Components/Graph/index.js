
import React, { Component } from 'react';
import Network from 'react-graph-vis';

import data from './data/mockData.json';
import options from './config/options';
import { dataModelToVisModel } from './utils/dataMapper';

const graph = dataModelToVisModel(data);

const style = {
    width: '100vw',
    height: '100vh'
};

export default class Graph extends Component {
    render () {
        return (
            <Network
                style={ style }
                graph={ graph }
                options={ options } />
        );
    }
}
