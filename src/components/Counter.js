import React from "react";

const buttonStyle = {
    minWidth: '64px',
    padding: '8px 0'
}

export const Counter = () => {
    const [counter, setCounter] = React.useState(1);

    React.useEffect(() => {
        console.log('Functional component did mount');

        return () => {
            console.log('Functional component went');
        }
    }, []);

    const handleButtonClick = (type = 'INCREASE') => {
        switch (type) {
            case 'INCREASE': {
                setCounter((oldCounter) => oldCounter + 1);
                break;
            }
            case 'DECREASE': {
                setCounter((oldCounter) => oldCounter > 0 ? oldCounter - 1 : oldCounter);
                break;
            }
            case 'RESET': {
                setCounter(1);
                break;
            }
            default:
                break;
        }
    }

    return (
        <div>
            <h4>{counter}</h4>
            {Boolean(counter) && <p>Counter exists</p>}
            <button
                style={buttonStyle}
                onClick={() => handleButtonClick('DECREASE')}
            >
                -
            </button>
            <button
                style={buttonStyle}
                onClick={() => handleButtonClick()}
            >
                +
            </button>
            <button
                style={buttonStyle}
                onClick={() => handleButtonClick('RESET')}
            >
                Reset
            </button>
        </div>
    );
}
