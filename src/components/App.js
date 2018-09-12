import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Header from './Header/Header'
import Compose from './Compose/Compose'
import Post from './Post/Post'

const BASE_URL = 'https://practiceapi.devmountain.com/api'

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      userInput: '',
    }

    this.updatePost = this.updatePost.bind(this)
    this.deletePost = this.deletePost.bind(this)
    this.createPost = this.createPost.bind(this)
  }

  componentDidMount() {
    axios.get(BASE_URL + '/posts').then(response => {
      console.log('response:', response)
      this.setState({ posts: response.data })
    })
  }

  updatePost(id, text) {
    axios
      .put(`${BASE_URL}/posts?id=${id}`, { text })
      .then(response => this.setState({ posts: response.data }))
  }

  deletePost(id) {
    axios.delete(`${BASE_URL}/posts?id=${id}`).then(response => {
      this.setState({ posts: response.data })
    })
  }

  createPost(text) {
    axios.post('https://practiceapi.devmountain.com/api/posts', { text }).then(response => {
      console.log('text response', response)
      this.setState({ posts: response.data })
    })
  }

  filterPost(id, text) {
    axios
      .put(`${BASE_URL}/posts?id=${id}`, { text })
      .then(response => this.setState({ posts: response.data }))
      .then(this.filterPostFn)
  }

  // filterPostFn() {
  //   const { userInput } = this.state
  //   if (post.text.includes(userInput)) {
  //     return post.text
  //   }
  //   console.log(post)
  // }

  render() {
    const { posts } = this.state
    console.log(posts)

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">
          <Compose createPostFn={this.createPost} />
          {posts.map(post => (
            <Post
              key={post.id}
              text={post.text}
              date={post.date}
              id={post.id}
              updatePostFn={this.updatePost}
              deletePostFn={this.deletePost}
            />
          ))}
        </section>
      </div>
    )
  }
}

export default App
