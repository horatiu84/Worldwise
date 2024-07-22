import React from "react";
import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Messege from "./Message";
import { useCites } from "../contexts/CitiesContext";

export default function CityList() {
  const { cities, isLoading } = useCites();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Messege message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
