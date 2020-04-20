import React, { Component } from "react";
import styles from './Paragraph.module.scss';

class Paragraph extends Component {

  render() {
    const children = this.props.children;
    return (
      <p className={styles.sParagraph}>
        {children}
      </p>
    );
  } 
}

export default Paragraph;