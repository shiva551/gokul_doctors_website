import logo from './logo.svg';
import './App.css';
import {
  Grid,
 Typography,
} from '@material-ui/core';
import HomePage1 from './components/homepage/homepage-module1';
import HomePage2 from './components/homepage/homepage-module2';
import HomePage3 from './components/homepage/homepage-module3';
import HomePage4 from './components/homepage/homepage-module4';
import HomePage5 from './components/homepage/homepage-module5';

function App() {
  return (
    <Grid className="App">
      <Typography>Hi Doctor's Web</Typography>
      <HomePage1/>
      <HomePage2/>
      <HomePage3/>
      <HomePage4/>
      <HomePage5/>
    </Grid>
  );
}

export default App;
