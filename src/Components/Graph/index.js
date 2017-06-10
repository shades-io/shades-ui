
import React, { Component } from 'react';
import { connect } from 'react-refetch';
import styled, { css } from 'styled-components';
import Network from 'react-graph-vis';
import { FoldingCube } from 'better-react-spinkit';

import config from '../../config.json';
import options from './config/options';
import { dataModelToVisModel } from './utils/dataMapper';

const api = ({ origin, depth }) => ({ 
    graphFetch: `${ config.apiUrl }/graphlib/custom/viewer?origin=${ origin }&depth=${ depth }`
});

const style = {
    width: '100vw',
    height: '100vh'
};

const fullPage = css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Spinner = styled(FoldingCube)`
    ${ fullPage }
`;

const Error = styled.div`
    ${ fullPage }
    color: crimson;
`;

class Graph extends Component {
    render ({ graphFetch } = this.props) {

        if (graphFetch.pending) {
            return (
                <Spinner size={ 50 } color="white" />
            );
        } 

        else if (graphFetch.rejected) {
            return (
                <Error>{ graphFetch.reason }</Error>
            );
        } 

        else if (graphFetch.fulfilled) {
            const graph = dataModelToVisModel(graphFetch.value);
            return (
                <Network
                    style={ style }
                    graph={ graph }
                    options={ options } />
            );
        }
    }
}

export default connect(api)(Graph);
