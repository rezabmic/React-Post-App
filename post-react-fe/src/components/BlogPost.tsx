import React, { Component } from "react";
import styles from './BlogPost.module.scss';

type PostProps = {
  title: string;
}

class BlogPost extends Component<PostProps> {

  render() {
    const { title, children } = this.props;
    return (
      <div className={styles.sBlogPost}>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}

export default BlogPost;