import React from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box';

class Tweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }
  }

  componentDidMount() {
    this.props.fetchTweets();
  }

  render() {
    if (this.state.tweets.length === 0) {
      return (<div>There are no Tweets</div>)
    } else {
      return (
        <div>
          <h2>All Tweets</h2>
          {this.state.tweets.map(tweet => (
            <TweetBox key={tweet._id} text={tweet.text} />
          ))}
        </div>
      );
    }
  }
}

export default Tweet;
