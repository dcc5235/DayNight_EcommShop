import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const seasonal = () => (
  <div>
    <h1>other Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/seasonal' component={seasonal} />
      </Switch>
    </div>
  );
}

export default App;
