import React from 'react';

class CreatePage extends React.Component {
  render () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1>Create your conversation!</h1>
                    <p></p>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <p>Now you can chose the name for your conversation. If you don't want to give your own name, random conversation name will be generated</p>
                            <label htmlFor="conversation-name">Conversation name: </label>
                            <input id="conversation-name" className="form-control" placeholder="Enter conversation name..." type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-md-offset-2">
                            You can create conversation where audio and video will be shared between all of members
                        </div>
                        <div className="col-md-4">
                            You can also create conversation where you'll be the broadcaster, and rest of members will be your audience
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-md-offset-2">
                            <button type="submit" className="btn btn-primary btn-lg">Create mesh</button>
                        </div>
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-primary btn-lg">Create broadcast</button>
                       </div>
                   </div>
                </div>
            </div>
        </div>);
  }
}

export default CreatePage;
