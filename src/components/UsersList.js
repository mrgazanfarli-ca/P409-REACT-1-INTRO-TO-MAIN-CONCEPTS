import React from 'react';

export const UsersList = ({ users, onUserDelete = [], hasElvin }) => {
    return (
        <>
            <ul>
                {users.map(({ name, surname, email }, index) => (
                    <React.Fragment key={email}>
                        <li style={{ textAlign: 'left' }}>
                            {index + 1}. {name} {surname} (<a href={`mailto:${email}`}>{email}</a>)
                        </li>
                        <button onClick={() => onUserDelete(email)}>Delete</button>
                    </React.Fragment>
                ))}
            </ul>
            {hasElvin && <span>We have at least one Elvin</span>}
        </>
    );
}
