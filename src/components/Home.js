import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render(){
    return(
      <div>
        {console.log(this.props.posts)}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts
  }
)

export default connect(mapStateToProps)(Home);
