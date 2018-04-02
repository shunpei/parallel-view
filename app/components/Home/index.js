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
    const datas = this.props.file.datas;
    return datas.map((data, i) => {
      const key = `video_${i}`;
      if (data === null) return <DropZone key={key} index={i} />;
      return <Viewer key={key} index={i} data={data} />;
    });
  }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
        </div>
        <div>{this.renderViewer()}</div>
        <MultiControllPanel />
      </div>
    );
  }
}
