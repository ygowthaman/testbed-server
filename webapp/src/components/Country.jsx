import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return <div>Hello {country.countryName}</div>;
};

export default Country;
