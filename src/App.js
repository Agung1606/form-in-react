import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    isFriendly: false,
    employment: '',
    favColor: ''
  });

  console.log(formData.employment)

  function handleChange(e) {
    const {name, value, type, checked} = e.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <div>
      <form>
        {/* Name */}
        <input 
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        {/* Email */}
        <input 
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        {/* Phone */}
        <input 
          type="number"
          placeholder="Phone"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
        />
        {/* isFriendly */}
        <input 
          type="checkbox"
          name="isFriendly"
          onChange={handleChange}
          value={formData.isFriendly}
          id="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
        {/* Employment Status */}
        <fieldset>
          <legend>Current employment status</legend>
          <input 
            type="radio"
            id="unemployed"
            name="employment"
            value="Unemployed"
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <input 
            type="radio"
            id="part-time"
            name="employment"
            value="Part-time"
            onChange={handleChange}
          />
          <label htmlFor="part-time">Part-time</label>
          <input 
            type="radio"
            id="full-time"
            name="employment"
            value="Full-time"
            onChange={handleChange}
          />
          <label htmlFor="full-time">Full-time</label>
        </fieldset>
        <br />
            
            {/* Favorite Color */}
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select id="favColor" name="favColor" onChange={handleChange} value={formData.favColor}>
                <option value="">--Choose Color--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
      </form>
      <div>
        {formData.name && <h4>Name: {formData.name}</h4>}
        {formData.email && <h4>Email: {formData.email}</h4>}
        {formData.phone && <h4>Phone: {formData.phone}</h4>}
        {formData.isFriendly && <h4>You are friendly!</h4>}
        {formData.employment && <h4>Employment status: {formData.employment}</h4>}
        {formData.favColor && <h4>Favorite Color: {formData.favColor}</h4>}
      </div>
    </div>
  );
}