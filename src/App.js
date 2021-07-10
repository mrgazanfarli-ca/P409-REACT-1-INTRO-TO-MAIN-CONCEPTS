import React from 'react';

import './App.css';
import ClassTest from "./ClassTest";
import { UserData } from "./components/UserData";
import { Counter } from "./components/Counter";
import { UsersList } from "./components/UsersList";

const usersInitialValue = [
    {
        name: 'Gazanfar',
        surname: 'Gazanfarli',
        email: 'mrgazanfarli@gmai.com'
    },
    {
        name: 'Elvin',
        surname: 'Aliyev',
        email: 'aliyeve669@gmail.com'
    },
    {
        name: 'Aytan',
        surname: 'Ayvazova',
        email: 'ayvazovaaytan@gmail.com'
    }
];

function App() {
    const user = {
        name: 'Elvin',
        surname: 'Aliyev',
        age: 73
    }

    const [users, setUsers] = React.useState(usersInitialValue);

    const handleUserDeletion = React.useCallback((email) => {
        setUsers(oldUsers => oldUsers.filter(oldUser => oldUser.email !== email));
    }, []);

    const hasElvin = React.useMemo(
        () => users.some(user => user.name.toLowerCase() === 'elvin'),
        [users]);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <ClassTest/>
                <Counter/>
                <UsersList hasElvin={hasElvin} onUserDelete={handleUserDeletion} users={users}/>
                <UserData {...user}>
                    <p>some children</p>
                </UserData>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
