import React from "react";
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Messege from "./Message";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if(!cities.length) return <Messege message="Add your first city by clicking on a city on the map" />

  const countries = cities.reduce( (arr,city) => {

    if(!arr.map(el=>el.country).includes(city.country)) 
      return [...arr, {country: city.country, emojy: city.emojy}];
    else return arr;
    }
    , [] )

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
