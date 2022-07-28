import React from 'react';
import Greetings from './components/Greetings';
import UserList from './components/UserList';

const App2 = () => {
    return (
        <div>
            <Greetings name="Green" mark="hihi"/>
            <UserList/>
        </div>
    );
};

export default App2;