import React, { Component } from 'react'

export class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
         users: [],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) =>
            this.setState({
                users: data,
                })
            );
    }

    //Build linking to an express server - not used
    //     componentDidMount() {
    //         fetch("http://localhost:3002/users")
    //             .then(res => res.json())
    //             .then(data => this.setState({
    //                 users: data
    //             })
    //             )
    // }

    render() {
     const usernames = this.state.users.map((user) => (
        <div key={user.id}>
        <h3>Name: {user.name}</h3>
        <p>Username: {user.username}</p>
        </div>
    ));
    return (
        <div>
        <h2>List of Users</h2>
        {usernames}
        </div>
    );
    }
}

export default Users
