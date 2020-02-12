import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseList from '../components/course/CourseList';
import FormContainer from '../components/form/FormContainer';
import UserList from '../components/users/UserList';

const history = createBrowserHistory();

function App() {

  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={CourseList} />
            <Route exact path="/form" component={FormContainer} />
            <Route path="/course/:id" component={FormContainer} />
            <Route path="/users" component={UserList} />
          </Switch>
        </div>
      </Router> 
    </div>
  );
}

export default App;
