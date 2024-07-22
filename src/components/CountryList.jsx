import React from "react";
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Messege from "./Message";
import { useCites } from "../contexts/CitiesContext";

export default function CountryList() {
  const {cities, isLoading} = useCites();
  if (isLoading) return <Spinner />;

  if(!cities.length) return <Messege message="Add your first city by clicking on a city on the map" />

  const countries = cities.reduce( (arr,city) => {

    if(!arr.map(el=>el.country).includes(city.country)) 
      return [...arr, {country: city.country, emoji: city.emoji}];
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
