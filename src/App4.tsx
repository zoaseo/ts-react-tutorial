import React from 'react';
import ReducerSample2 from './ReducerSample2';
import { SampleProvider } from './SampleContext';

const App4 = () => {
    return (
        <div>
            <SampleProvider>
                <ReducerSample2/>
            </SampleProvider>
        </div>
    );
};

export default App4;