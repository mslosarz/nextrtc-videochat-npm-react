import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1>Welcome to NextRTC with React videochat page!</h1>
                    <p className="lead">Now you cant create your own conversation, or join to existing one</p>
                    <div className="row">
                        <div className="col-md-2 col-md-offset-4">
                            <Link className="btn btn-primary btn-lg" to="create">Create</Link>
                        </div>
                        <div className="col-md-2">
                            <Link className="btn btn-primary btn-lg" to="join">Join</Link>
                       </div>
                   </div>
                </div>
            </div>
        </div>);
  }
}

export default HomePage;
