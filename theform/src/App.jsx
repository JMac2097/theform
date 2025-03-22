import { useState } from "react";
import "./App.css";

function App() {
  // List of countries (fixed variable name)
  const countries = [
    { value: "", label: "Select Country" },
    { value: "US", label: "United States" },
    { value: "UK", label: "United Kingdom" },
    { value: "FR", label: "France" },
    { value: "DE", label: "Germany" },
    { value: "IT", label: "Italy" },
    { value: "ES", label: "Spain" },
    { value: "PT", label: "Portugal" },
    { value: "NL", label: "Netherlands" },
    { value: "CA", label: "Canada" },
    { value: "AU", label: "Australia" },
    { value: "NZ", label: "New Zealand" },
    { value: "JP", label: "Japan" },
  ];

  // Initial form state with empty values
  const initialFormState = {
    country: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
  };

  // State for form data
  const [formData, setFormData] = useState(initialFormState);

  // Handle form input change
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", formData);
    // This is where we would submit the data to the server
  };

  // Render country-specific form fields
  const renderCountrySpecificFields = () => {
    switch (formData.country) {
      case "US":
        return (
          <>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChanges}
                required
              >
                <option value="">Select a state</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                {/* Add other US states here */}
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">ZIP Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChanges}
                placeholder="e.g., 12345"
                required
              />
            </div>
          </>
        );
      case "UK":
        return (
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChanges}
              placeholder="e.g., SW1A 1AA"
              required
            />
          </div>
        );
      default:
        return null; // Default setup for other countries
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Country Selection - Always First */}
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChanges}
            required
          >
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>

        {/* Common Fields */}
        {formData.country && (
          <>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChanges}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChanges}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address1">Address Line 1</label>
              <input
                type="text"
                id="address1"
                name="address1"
                value={formData.address1}
                onChange={handleChanges}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address2">Address Line 2</label>
              <input
                type="text"
                id="address2"
                name="address2"
                value={formData.address2}
                onChange={handleChanges}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChanges}
                required
              />
            </div>

            {/* Country-specific fields */}
            {renderCountrySpecificFields()}

            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </div>
  );
}

export default App;