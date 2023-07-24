import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const Global = createGlobalStyle`
* {
  @font-face {font-family: "SB Sans Interface";
  src: url("37086b994764dba84b2ee0f1083bfeed.eot"); /* IE9*/
  src: url("37086b994764dba84b2ee0f1083bfeed.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
  url("37086b994764dba84b2ee0f1083bfeed.woff2") format("woff2"), /* chrome、firefox */
  url("37086b994764dba84b2ee0f1083bfeed.woff") format("woff"), /* chrome、firefox */
  url("37086b994764dba84b2ee0f1083bfeed.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url("37086b994764dba84b2ee0f1083bfeed.svg#SB Sans Interface") format("svg"); /* iOS 4.1- */
}
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "SB Sans Interface", Arial, sans-serif; 
}
`

const theme = {
  width: {
    mobile: '400px',
    desktop: '900px',
  },
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Global />
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);

