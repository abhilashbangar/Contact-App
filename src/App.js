import "./App.css";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditContact from "./components/EditContact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mt-5">
          <Switch>
            <Route exact path="/" component={ContactList} />
            <Route exact path="/AddContact" component={AddContact} />
            <Route exact path="/EditContact/:id" component={EditContact} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
