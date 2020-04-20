import React, { Component } from 'react';
import { Post } from './posts/post.interface';
import BlogPost from './components/BlogPost';
import Paragraph from './components/Paragraph';
import styles from './App.module.scss';
import './styles/index.scss';
import { PostService } from './posts/post.service.interface';

interface AppState {
  posts: Post[];
}

interface AppProps {
  postService: PostService
}

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.props.postService.getPosts().then((posts: Post[]) => {
      this.setState({ posts });
    }).catch(e => console.error(e));
  }

  renderBlogPost(post: Post) {
    return (
      <BlogPost title={post.title}>
        {
          post.content.split('\n').map(paragraph => (
            <Paragraph key={paragraph}>{paragraph}</Paragraph>
          ))
        }
      </BlogPost>
    );
  }

  render() {
    return (
      <main className={styles.sApp}>
        {
          this.state.posts.map((post, postIndex: number) => {
            if (postIndex === 0) {
              return (
                <div key={post.id}>
                  {this.renderBlogPost(post)}
                </div>
              );
            } else {
              return (
                <div key={post.id}>
                  <hr />
                  {this.renderBlogPost(post)}
                </div>
              );
            }
          })
        }
      </main>
    );
  }
}

export default App;