import React, { Component } from 'react'
import { createDemoApp } from 'polotno/polotno-app';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import Workspace from 'polotno/canvas/workspace';
import { CustomSidePanel } from './Side-panel';
import { Preview } from './Preview';
import "./Video";
const { store } = createDemoApp({
  container: document.getElementById('root'),
  key: 'P8iUZ7ec9XTjJdWbiOSO', // you can create it here: https://polotno.dev/cabinet/,
  showCredit: true

});
export default class Canva extends Component {
    componentDidMount(){
     
      
     }
     
  render() {
    return (
      
     
          <PolotnoContainer style={{ width: '100vw', height: '100vh' }}>
            <SidePanelWrap >
              <CustomSidePanel store={store} />
            </SidePanelWrap>
            <WorkspaceWrap>
              <Toolbar store={store} downloadButtonEnabled  />
              <Workspace store={store} />
              <ZoomButtons store={store} />
              <Toolbar store={store} />
              <Preview store={store} />
            </WorkspaceWrap>
          </PolotnoContainer>
 
      
   
    )
  }
}
