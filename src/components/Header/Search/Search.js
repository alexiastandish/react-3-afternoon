import React, { Component } from 'react'
import './Search.css'
import SearchIcon from 'react-icons/lib/md/search'

export default class Search extends Component {
  constructor() {
    super()

    this.state = {
      userInput: '',
    }
  }

  // filterPost() {
  //   console.log(this.state.text)
  //   const { text, userInput } = this.state
  //   const {  filterPostFn, posts } = this.props
  //   const newFilter = []

  //   filterPostFn(){
  //     newFilter = posts.map((text)=>{
  //       if (text.includes(userInput)){
  //         newFilter.push(posts.text)
  //       }
  //     })
  //   }
  //   console.log(text)
  // }

  render() {
    const { filterPostFn } = this.props
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input
            placeholder="Search Your Feed"
            type="text"
            onChange={event => filterPostFn(event.target.value)}
          />
          <SearchIcon id="Search__icon" />
        </div>
      </section>
    )
  }
}
