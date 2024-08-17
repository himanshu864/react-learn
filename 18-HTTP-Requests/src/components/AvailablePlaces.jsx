import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  const fetchPlaces = async () => {
    setIsFetching(true);

    try {
      const places = await fetchAvailablePlaces();

      navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlaces = sortPlacesByDistance(
          places,
          position.coords.latitude,
          position.coords.longitude
        );
        setAvailablePlaces(sortedPlaces);
        setIsFetching(false);
      });
    } catch (err) {
      setError({ message: err.message || "Failed to fetch places..." });
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  if (error)
    return <Error title="Something went wrong!" message={error.message} />;

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText={isFetching ? "Fetching places." : "No places available."}
      onSelectPlace={onSelectPlace}
    />
  );
}
