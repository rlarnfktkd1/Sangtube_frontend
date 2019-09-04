import React, {Fragment} from 'react';
import "./App.scss"
import { hot } from 'react-hot-loader';
import {Route} from "react-router-dom"
import {ConnectedRouter} from "connected-react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import {Provider} from "react-redux";


// 컨테이너 모듈
import MainContainer from "./Container/MainContainer";
import JoinContainer from "./Container/JoinContainer";
import LoginContainer from "./Container/LoginContainer";
import SearchContainer from "./Container/SearchContainer";
import UserContainer from "./Container/UserContainer";
import EditProfileContainer from "./Container/EditProfileContainer";
import ChangePasswordContainer from "./Container/ChangePasswordContainer";
import UploadContainer from "./Container/UploadContainer";
import VideoContainer from "./Container/VideoContainer";
import EditVideoContainer from "./Container/EditVideoContainer";
import Counter from "./components/Counter/Counter"

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['NanumBarunGothic'].join(',')
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderColor: '#00004d'
        }
      }
    }
  }
})


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {store, history} = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <CssBaseline />
            <RoutesComponent />
          </ConnectedRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

const RoutesComponent = () => (
  <Fragment>
    <Route exact path="/" component={MainContainer} />
    <Route exact path="/join" component={JoinContainer} />
    <Route exact path="/login" component={LoginContainer} />
    <Route exact path="/search" component={SearchContainer} />
    <Route exact path="/users:id" component={UserContainer} />
    <Route exact path="/edit-profile" component={EditProfileContainer} />
    <Route exact path="/change-password" component={ChangePasswordContainer} />
    <Route exact path="/upload" component={UploadContainer} />
    <Route exact path="/videos/:id" component={VideoContainer} />
    <Route exact path="/videos/:id/edit" component={EditVideoContainer} />
    <Route exact path="/counter" component={Counter} />
  </Fragment>
)

export default hot(module)(App);
