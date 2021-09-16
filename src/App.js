import React from 'react'
import Header from "./Header"
import Table from './components/table';
import TabContainer from "./components/tab.js"
import Footer from "./components/footer";
import "./App.css"
import { Router,Route,Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

function App() {
  class Page1 extends React.Component{
    render(){
      return(
        <div>
        <Header title="Employee Timesheet" />
        <TabContainer/>
        <Footer buttons={[{name:'Save',navigate:false,pattern:''},
                          {name:'Review To Post',navigate:true,pattern:'/review'},
                          {name:'Refresh',navigate:false,pattern:''}]}/>
        </div>
      )
    }
  }
  class Page2 extends React.Component{
    render(){
      return(
        <div>
        <Header title="Timesheet Review" />
        <Table header={['Project / Order Value','FastCode','Employee','Date','ST Hours','OT Hours','DT Hours','Total','Notes']} data={[]}/>
        <Footer buttons={[{name:'Post',navigate:false,pattern:''}]}/>
        </div>
      )
    }
  }
  return (
    <div className="App">
    <div>
    <Router history={history}>
    <div>
    <Switch>
    <Page1 path="/" exact/>
    <Route path="/review" component={Page2}></Route>
    </Switch>
    </div>
    </Router>
    </div >
    </div>
  );
}

export default App;
