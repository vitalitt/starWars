// global
import React from 'react';
// materialUI
import RefreshIndicator from 'material-ui/RefreshIndicator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// css
import './index.css';

const style = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    },
};

const Loader = () => (
    <MuiThemeProvider className="centerCircle">
        <div>
            <RefreshIndicator size={70} left={10} top={0} status="loading" style={style.refresh} />
        </div>
    </MuiThemeProvider>
);

export default Loader;
