import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";

import styles from "./countryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [getCountries, setGetCountries] = useState([]);

  useEffect(() => {
    const apiCallCountries = async () => {
      setGetCountries(await fetchCountries());
    };
    apiCallCountries();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {getCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
