import React from 'react';
import {Link} from 'react-router';
import NextRTC from './../services/nextRTCService.jsx';


NextRTC.getInstance();

class ConversationPage extends React.Component {
  render () {
    return (
        <div className="container">
            <div className="row">
                {this.props.params.conversationId}
            </div>
        </div>);
  }
}

export default ConversationPage;
