import React, { Component } from 'react'

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({
                posts: data
            }))
    }

    //Build linking to an express server - not used
    // componentDidMount() {
    //     fetch("http://localhost:3002/posts")
    //         .then(res => res.json())
    //         .then(data => this.setState({
    //             posts: data
    //         }));
    // }

    render() {
        const posts = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>Title: {post.title}</h3>
                <p>Post: {post.body}</p>
            </div>
        ));
        return (
            <div>
                <h2>Posts</h2>
                {posts}
            </div>
        )
    }
}
