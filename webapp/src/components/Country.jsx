import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Country.css";

const Country = () => {
  const { countryUuid } = useParams();
  const [destinations, setDestinations] = React.useState([]);
  const [country, setCountry] = React.useState({});

  useEffect(() => {
    async function fetchDestinations() {
      const fetchResponse = await Promise.all([
        fetch(`/api/destination/country/${countryUuid}`),
        fetch(`/api/country/${countryUuid}`),
      ]);
      const destJson = await fetchResponse[0].json();
      const contJson = await fetchResponse[1].json();
      setDestinations(destJson.data);
      setCountry(contJson.data);
    }
    fetchDestinations();
  }, [countryUuid]);

  return (
    <div>
      <div className="d-flex flex-row align-items-center">
        <h1 className="country-title">{country.countryName}</h1>
        {destinations.map((destination) => {
          return (
            <a href="">
              <h4 className="country-destination-title">
                {destination.destinationName}
              </h4>
            </a>
          );
        })}
      </div>
      <div>
        <img
          className="country-title-image"
          src={country.titleImage}
          width="6048"
          height="2198"
          alt="ak_2023-20"
        />
      </div>
    </div>
  );
};

export default Country;
