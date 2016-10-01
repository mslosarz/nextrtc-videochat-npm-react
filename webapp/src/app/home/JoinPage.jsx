import React from 'react';
import {Link} from 'react-router';

class JoinPage extends React.Component {
  render () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1>Join to existing conversation!</h1>
                    <p>You can connect to existing conversation by direct enter to url, given by broadcaster or by one of the members, or using conversation name and this form.</p>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <label htmlFor="conversation-name">Please enter conversation name: </label>
                            <input id="conversation-name" className="form-control" placeholder="Enter conversation name..." type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div>
                                <button type="submit" className="btn btn-primary btn-lg">Join</button>
                                <Link className="btn btn-primary btn-lg" to="conversation/noganoganog">Join</Link>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>);
  }
}

export default JoinPage;
