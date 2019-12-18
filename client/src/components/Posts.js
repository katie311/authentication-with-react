import React, { useState, useEffect, } from "react";
import PostForm from './PostForm';
import axios from "axios";
import { List, Header, Segment, Button, } from "semantic-ui-react";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] =useState(false);

  useEffect( () => {
    axios.get("/api/posts")
      .then( res => {
        setPosts(res.data);
      })
  }, [])

  const addPost = (post) => {setPosts([ ...posts, post, ])};

  const renderPosts = () => {
    return posts.map( post => (
      <Segment key={post.id}>
        {/* <List.Header as="h3">{post.title}</List.Header> */}
        <List.Description>
          { post.body }
        </List.Description>
      </Segment>
    ))
  }

  return (
    <>
        <br />
      <Header as="h1">My Posts</Header>
      <br />
      { showForm && <PostForm toggleForm={setShowForm} add={addPost} /> }
      <Button onClick={() => setShowForm(!showForm)}>
          { showForm ? 'Close Form' : 'Write Post' }
      </Button>
      <br />
      <List>
        { renderPosts() }
      </List>
    </>
  )
}

export default Posts;