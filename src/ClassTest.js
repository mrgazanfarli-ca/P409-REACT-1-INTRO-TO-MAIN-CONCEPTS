import React from "react";

class ClassTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: '', surname: 'Aliyev' };
    }

    componentDidMount() {
        console.log('Class based component did mount');
    }

    componentWillUnmount() {
        console.log('Component went');
    }

    render() {
        // this.setState({ name: 'Gazanfar' });

        return (
            <p>it is class test component</p>
        )
    }
}

export default ClassTest;
