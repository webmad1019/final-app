import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* CUSTOM COMPONENTS */
import CoasterList from "./components/coasters/Coaster-list"
import CoasterDetails from "./components/coasters/Coaster-details"
import CoasterForm from './components/coasters/Coaster-form'

function App() {
  return (

    <Switch>
      <Route exact path="/" component={CoasterList} />
      <Route path="/coasters/:id" component={CoasterDetails} />
      <Route path="/form" component={CoasterForm} />
    </Switch>

  )
}

export default App;
