// Copyright (c) 2017 PlanGrid, Inc.

import React, { Component } from 'react';
import Tiff from 'tiff.js';

class TiffViewer extends Component {

  static parse(data) {
    const tiff = new Tiff({ buffer: data });
    const canvas = tiff.toDataURL();
    return (
      <img
        style={{
          width: '100%',
        }}
        alt={'tiff'}
        id="img_display"
        src={canvas}
      />
    );
  }

  constructor(props) {
    super(props);
    if (props.data) {
      this.state = {
        tiff: TiffViewer.parse(props.data),
      };
    }
  }

  componentDidMount(nextProps) {
    if (nextProps && nextProps.data) {
      this.setState({ ...this.state, tiff: TiffViewer.parse(nextProps.data) });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.data) {
      this.setState({ ...this.state, tiff: TiffViewer.parse(nextProps.data) });
    }
  }

  render() {
    return (
      <div>
        {this.state.tiff}
      </div>
    );
  }
}

export default TiffViewer;
