import React, { useState, } from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";

const PostForm = (props) => {
    const [body, setBody] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("/api/posts", { body, })
        .then(res => {
          props.add(res.data);
          props.toggleForm();
        })
    };
  
  return (
      <>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="2">
            <Form.TextArea
              label="Body"
              placeholder="what's on your mind?"
              name="body"
              required
              onChange={(e) => setBody(e.target.value)}
              value={body}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
        <br />
      </>
    );
  };

  export default PostForm;