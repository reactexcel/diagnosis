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
    font-size:14px;
    margin-right: -16px;
  }

  .diagnose-list {
    margin-top:7px;
  }

  .diagnose-list td {
    border-top: 1px dotted red;
  }

  .close-button {
    padding: 6px 22px;
    background-color: #585757;
    color: #FFF;
    border-radius: 0px;
  }

  .modal-content {
    border-radius: 0px;
    border: 3px solid #e2e2e2;
  }
  .diagnose-addNew-header {
    background-color: #d4497f;
    padding: 9px 2px;
    color: #FFF;
    margin-top:-15px;
    margin-bottom: 10px;
  }
  .text-area {
    height: 90px
  }
  .input-color {
    border: 0px ;
    background-color: #eeeeee;
    border-radius: 0px;
  }
  .button-center {
    text-align: center;
    padding-top: 100px;
  }
  .icon-style{
    top:3px;
    left:2px;
  }
  .td-color {
    color:#337ab7
  }
`;
