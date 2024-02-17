import React, { useEffect, useState } from "react";

const ManageCountry = () => {
  const [country, setCountry] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const countryFetch = await fetch("/api/country");
    const countryJson = await countryFetch.json();
    setCountries(countryJson.data);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCountry((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    country.year = date.getFullYear();
    country.month = date.getUTCMonth();
    country.day = date.getDate();
    setCountry(country);

    if (country.hasOwnProperty("countryUuid")) {
      updateCountry().then(() => {
        setCountry({});
        getCountries();
      });
    } else {
      addCountry().then(() => {
        setCountry({});
        getCountries();
      });
    }
  };

  const handleDelete = (c) => {
    deleteCountry(c).then(() => {
      getCountries();
    });
  };

  const addCountry = async () => {
    const response = await fetch("/api/country/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(country),
    });
    return response.json();
  };

  const updateCountry = async () => {
    const response = await fetch(`/api/country/${country.countryUuid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(country),
    });
    return response.json();
  };

  const deleteCountry = async (c) => {
    const response = await fetch(`/api/country/${c.countryUuid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(country),
    });
    return response.json();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="countryName">Country</label>
          <input
            type="text"
            className="form-control"
            id="countryName"
            name="countryName"
            value={country.countryName || ""}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="titleImage">Title Image</label>
          <input
            type="text"
            className="form-control"
            id="titleImage"
            name="titleImage"
            value={country.titleImage || ""}
            onChange={handleChange}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Country</th>
            <th>Title Image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {countries.map((c) => {
            return (
              <tr>
                <td>{c.countryName}</td>
                <td>{c.titleImage}</td>
                <td>
                  <div className="d-flex justify-content-end align-items-center">
                    <button
                      type="button"
                      className="btn"
                      onClick={() => setCountry(c)}
                    >
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                    <button
                      type="button"
                      className="btn"
                      onClick={(e) => handleDelete(c, e)}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCountry;
