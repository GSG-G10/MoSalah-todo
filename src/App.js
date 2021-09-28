import ToDo from './Components/Form';
import List from './Components/pagniation';
import NavBar from './Components/Nav';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";


function App() {
 
    return (
         <Router>
         <NavBar/>
             <Switch>
             <Route exact path="/">
             <List/>
             </Route>
             <Route exact path="/TODo">
              <ToDo/>
             </Route>
           </Switch>
         </Router>
  );
}

export default App;
