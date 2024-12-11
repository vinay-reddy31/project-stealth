import React, { useState, useEffect } from "react";
import { fetchAppliances, fetchLocations } from "../utils/api";
import "./SearchBar.css"; // Assume you have a CSS file for styling

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const loadLocations = async () => {
      const response = await fetchLocations();
      setLocations(response.data);
    };
    loadLocations();
  }, []);

  const handleSearch = async () => {
    if (!selectedLocation) {
      alert("Please select a location");
      return;
    }
    const response = await fetchAppliances(query, selectedLocation);
    setResults(response.data);
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    // Mock suggestions logic (replace with API-based suggestions if needed)
    if (input) {
      setSuggestions(
        [
          "Air Conditioner",
          "Washing Machine",
          "Refrigerator",
          "Microwave Oven",
        ].filter((item) => item.toLowerCase().includes(input.toLowerCase()))
      );
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-container">
      <div className="search-content">
        <div className="search-text">
          <h1>Take care of your home needs now!</h1>
          <p>
            ServicePro is your one-stop solution to troubleshoot, choose a
            vendor and book a technician.
          </p>
          <div className="search-bar">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="location-dropdown"
            >
              <option value="" disabled>
                Select Location
              </option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search Home Appliances"
              value={query}
              onChange={handleInputChange}
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
              Search
            </button>
          </div>
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => setQuery(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="search-image">
        <img
          src="https://img.freepik.com/premium-vector/repair-services-with-technical-laptop-support-technicians-trending-concept-flat-illustration_720185-1868.jpg?w=1060"
          alt="Service Illustration"
          className="search-image-input"
        />
      </div>
      <ul className="results-list">
        {results.map((appliance) => (
          <li className="list-item" key={appliance.appliance_id}>
            {appliance.type_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
