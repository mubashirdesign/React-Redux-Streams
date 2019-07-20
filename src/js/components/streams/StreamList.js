import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions/index";
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(stream){
    if (stream.userId === this.props.currentUserId){
        return (
        <div>
        <Link to={`/streams/edit/${stream.id}`}>Edit</Link>
        <Link to={`/streams/delete/${stream.id}`} className="red">Delete</Link>
        </div>
        );
    }
  }

  renderList(){
      return this.props.streams.map(stream => {
          return (
              <div key={stream.id}>
                  <div className="streamList__item">
                      <div>
                      <h3><Link to={`/streams/${stream.id}`}>{stream.title}</Link></h3>
                      <p>{stream.description}</p>
                      </div>
                      {this.renderAdmin(stream)}
                  </div>
              </div>
          )
      })
  }

  renderCreate(){
    if (this.props.isSignedIn){
      return(
        <Link to="/streams/new" className="">
          Create Stream
        </Link>
      )
    }
  }

  render() {
    return (
        <div className="streamList">
            <h2>Currently Streaming</h2>
            {this.renderList()}
            {this.renderCreate()}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
