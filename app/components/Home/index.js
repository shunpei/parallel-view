// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DropZone from '../../containers/DropZone';
import Viewer from '../../containers/Viewer';
import MultiControllPanel from '../../containers/MultiControllPanel';
import styles from './style.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  renderViewer() {
    if (this.props.file.datas.length === 0) return null;
    return this.props.file.datas.map((video, i) => {
      const key = `video_${i}`;
      return <Viewer key={key} index={i} data={video} />;
    });
  }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
        </div>
        <DropZone />
        <DropZone />
        <div>{this.renderViewer()}</div>
        <MultiControllPanel />
      </div>
    );
  }
}
