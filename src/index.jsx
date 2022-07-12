import React from "react";
import  ReactDOM  from "react";

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import{Homepage,Aboutpage,Headre} from './App'

ReactDOM.render(
    <Router>
       <Switch>
					<Header/> //new
		      <Route exact path="/" component={Homepage}/>
				<Route exact path="/about" component={Aboutpage }/>
	    </Switch>
    </Router>,
    document.getElementById('root')
);