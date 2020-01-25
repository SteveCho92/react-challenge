import React, { useState } from "react";
import "./index.css";

export default function App() {
  //functional components with states must use React Hooks useState to set initial state.
  //To store multiple values in a state, you can have it as a single object.
  //To extend more input fields on the form, you can add more properties to the single state object.
  const [form, setForm] = useState({
    name: '',
    age: '',
    addtionalField: 'something you can add!'
  });

  //updateForm is a general input change handler to update UI.
  //...form spread operator to maintain unchanged state
  //[e.target.name] must equal name of state property from useState
  const updateForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      <div>
        <h2 className="subtitle">React Challenge! Good Luck</h2>
      </div>
      <div className="content">
        {/* Display Data */}
        <div className="input-display">
          {/* You can access state in functional components directly without this.state */}
          <p data-testid="name-display">Name: {form.name}</p>
          <p data-testid="age-display">Age: {form.age}</p>
        </div>

        {/* Collect User Inputs */}
        <div className="inputs">
          {/* Input name */}
          <div className="field">
            <label className="label">Name: </label>
            <input
              className="input"
              name='name'
              type="text"
              placeholder="Enter your name, ex. Kevin"
              onChange={updateForm} 
              data-testid = "name-input" />
          </div>

          {/* Input age */}
          <div className="field">
            <label className="label">&nbsp;&nbsp;&nbsp;Age: </label>
            <input
              className="input"
              name='age'
              type="number"
              placeholder="Enter your age, ex. 44"
              onChange={updateForm} 
              min="0" 
              data-testid = "age-input" />
          </div>
        </div>
      </div>
    </div>
  );
}