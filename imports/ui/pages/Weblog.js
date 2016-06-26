import { ReactMeteorData } from 'meteor/react-meteor-data'
import React  from 'react'
import { Row, Col } from 'react-bootstrap'
import ReactMixin  from 'react-mixin'
import { PageContainer } from '../components/PageContainer'
import Spacer  from '../components/Spacer'
import DocumentsList  from '../containers/documents-list.js'
import PostsList  from '../containers/posts-list.js'
import { AddPost } from '../workflows/posts/AddPost.js'
import PostsDeck  from '../workflows/posts/PostsDeck.js'

export class Weblog extends React.Component {
  getMeteorData() {
    let data = {
      style: {}
    }

    // this should all be handled by props
    // or a mixin!
    if (Session.get('darkroomEnabled')) {
      data.style.color = "black";
      data.style.background = "white";
    } else {
      data.style.color = "white";
      data.style.background = "black";
    }

    // this could be another mixin
    if (Session.get('glassBlurEnabled')) {
      data.style.filter = "blur(3px)";
      data.style.webkitFilter = "blur(3px)";
    }

    return data;
  }
  render() {
    return (
      <div id="weblogPage">
        <PageContainer>
          <AddPost />
          <Spacer />
          <PostsDeck />
        </PageContainer>
      </div>
    );
  }
}


Weblog.propTypes = {
  hasUser: React.PropTypes.object,
};
ReactMixin(Weblog.prototype, ReactMeteorData);
