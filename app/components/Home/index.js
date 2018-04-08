// @flow
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import DropZone from '../../containers/DropZone';
import Viewer from '../../containers/Viewer';
import MultiControllPanel from '../../containers/MultiControllPanel';
import styles from './style.css';

type Props = {};

export default class Home extends PureComponent<Props> {
  props: Props;

  renderViewer() {
    const datas = this.props.file.datas;
    return datas.map((data, i) => {
      const key = `video_${i}`;
      if (data === null) {
        return (
          <DropZone key={key} index={i}>
            <div>DRAG & DROP</div>
          </DropZone>
        );
      }
      return <Viewer key={key} index={i} data={data} />;
    });
  }

  render() {
    return (
      <div style={{ paddingTop: 150 }}>
        <div className={styles.viewers}>{this.renderViewer()}</div>
        <div style={{ position: 'absolute', bottom: 10, width: '100%' }}>
          <MultiControllPanel />
        </div>
      </div>
    );
  }
}
