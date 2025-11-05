import {useState} from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
      <div className="contact-form">
          <h3>Have a Question?</h3>
          <form onSubmit={onSubmit}>
            <p>
                <label for="name">Name: </label>
                <input type="text" name="name" required />
            </p>
            <p>
                <label for="email">Email:</label>
                <input type="email" name="email" required />
            </p> 
                
            <p><label for="message">Message:</label></p>
            <textarea name="message" required></textarea>

            <p>
              <button type="submit">Submit Form</button>
            </p>
          </form>
          <span>{result}</span>
      </div>
  );
}

export default Contact;