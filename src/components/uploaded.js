import React from "react";
import "./style/form.css";
function Uploaded() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-fields">
          {/* Text Area */}
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              placeholder="Enter your description here..."
              required
            ></textarea>
          </div>

          {/* PDF Upload */}
          <div className="form-group">
            <label htmlFor="pdf">Upload PDF:</label>
            <input type="file" id="pdf" name="pdf" accept=".pdf" required />
          </div>

          {/* Bid Text Area */}
          <div className="form-group">
            <label htmlFor="bid">Your Bid:</label>
            <textarea
              id="bid"
              name="bid"
              rows="3"
              placeholder="Enter your bid amount or details..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="form-image">
          <img
            src="https://via.placeholder.com/300"
            alt="QR"
            className="image"
          />
        </div>
      </form>
    </div>
  );
}
export default Uploaded;
