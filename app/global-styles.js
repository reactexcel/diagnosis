import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .diagnose-list-header {
    background-color: #d4497f;
    padding: 5px;
    color: #FFF;
    margin-top:-15px;
  }

  .diagnose-list-header .header-text {
    font-size:16px;
    margin-top:7px;
  }

  .diagnose-list-header .add-new-link {
    color: #FFF;
    font-size:11px;
  }

  .diagnose-list {
    margin-top:7px;
  }

  .diagnose-list td {
    border-top: 1px dotted red;
  }

  .close-button {
    background-color: #818181;
    color: #FFF;
    border-radius: 0px;
  }

  .modal-content {
    border-radius: 0px;
    border: 3px solid #e2e2e2; 
  }

`;
