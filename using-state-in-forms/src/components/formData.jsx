import { useState } from "react";

function FeedbackForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: ""
    });

    const [characterCount, setCharacterCount] = useState(0);
    const maxLength = 200;

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name}:`, value);
        setFormData((prevData) => ({...prevData, [name]: value,}));
        setCharacterCount(event.target.value.length);
       };

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>User Form</h1>
    
          <form>
            <label>
              Name <br /> <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label> <br /> <br />

            <label>
              Email <br /> <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            </label> <br /> <br />

            <label>
              Feedback <br /> <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} maxLength={maxLength}> </textarea> 
                <div id="characterCount">
                  Character Limit: {characterCount} / {maxLength}
                </div>
            </label> <br /> <br />

            <button type="submit" id="submit">Submit</button>
          </form>

          <pre id="preview">
            <h2>Preview</h2>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Feedback: {formData.feedback}</p>
          </pre>

      </div>
    );
}

export default FeedbackForm;