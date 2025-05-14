import { useState } from "react";

function FeedbackForm() {
    
    // const [name, setName] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name}:`, value);
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
       };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
    <h1>User Form</h1>
    
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label> <br />
      <label>Feedback: 
      <textarea 
      id="feedback" 
      name="feedback" 
      value={formData.feedback} 
      onChange={handleChange}>
      </textarea> 
      </label> <br />

      <button type="submit" id="submit">Submit</button>
      
    </form>

    <h2>Preview</h2>
    <p>Name: {formData.name}</p>
    <p>Email: {formData.email}</p>
    <p>Feedback: {formData.feedback}</p>
  </div>
    );
}

export default FeedbackForm;