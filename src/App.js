import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NotePage from "./pages/NotePage";


function App() {
  return (
    <Router>
      <div>        
          <Header />
          <Route path="/" exact component={NotesListPage}/>
          <Route path='/note/:id' component={NotePage} />
      </div>
      </Router>
   
  );
}

export default App;
