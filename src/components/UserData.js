export const UserData = ({ name, surname, age, children }) => (
    <div>
        <p>The user is {name} {surname} and {age} years old</p>
        {children}
    </div>
);
