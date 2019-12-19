import React, { useState, useEffect, } from "react";
import PostForm from './PostForm';
import axios from "axios";
import { List, Header, Segment, Button, Icon, } from "semantic-ui-react";
import { Link, } from 'react-router-dom';

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] =useState(false);

  useEffect( () => {
    axios.get("/api/posts")
      .then( res => {
        setPosts(res.data);
      })
  }, [posts]);

  const deletePost = (id) => { 
    axios.delete(`/api/posts/${id}`) 
 }

  const editPost = (id) => { }

  const addPost = (post) => setPosts([ ...posts, post, ]);

  const renderPosts = () => {
    return posts.map( post => (
      <Segment key={post.id}>
        <List.Description>
          { post.body }
        </List.Description>
        <br />
        <Button color="green" icon basic onClick={() => editPost(post.id)}
        >
        <Icon name="pencil" />
        </Button> 
        <Button color="red" icon basic onClick={() => deletePost(post.id)}
        >
        <Icon name="trash" />
        </Button> 
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