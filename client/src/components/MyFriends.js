import React from 'react';
import axios from 'axios';
import { Header, Card, Divider, Image, Button, Icon } from 'semantic-ui-react';

class MyFriends extends React.Component {
  state = { friends: [], };

  componentDidMount() {
    axios.get('/api/my_friends')
      .then( res => this.setState({ friends: res.data, }) );
  }

  removeFriend = (id) => {
    axios.delete(`/api/remove/${id}`)
    debugger
    // const { friends, } = this.state;
    // this.setState({ friends: friends.filter( f => f.id !== id ), });
  }

  render() {
    const { friends, } = this.state;
    return (
      <div>
        <br />
          <Header as='h1'>My Friends</Header>
        <br />
      <Card.Group itemsPerRow={4}>
        { friends.map( friend =>
          <Card key={friend.id}>
            <Image src={friend.avatar} />
            <Card.Content>
              <Card.Header>
                { friend.name }
              </Card.Header>
              <Card.Description>
                { friend.email }
              </Card.Description>
              <Card.Meta>
                { friend.registry }
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic onClick={() => this.removeFriend(friend.id)}>
                <Icon name="thumbs down" />  Remove Friend
              </Button>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
      </div>
    )
  }
}

export default MyFriends;