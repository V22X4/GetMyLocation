import { useReducer, useState } from "react"
import getUserLocation from "./req"
import Loading from "./Loading";
import Final from "./Final";

const GetMyLocationButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isIPFetched, setIsIPFetched] = useState(false);
  const [data, setData] = useState([]);
  
  const getData = async () => {
    
    setIsLoading(true);
    try {

      setData(await getUserLocation());
      setIsIPFetched(true);

    } catch (error) {
      console.error("Error fetching IP:", error);
    } finally {
      setIsLoading(false);
    }
    
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : isIPFetched ? (
          <Final city = {data[0]} country = {data[1]} />
      ) : (
        <button
          onClick={getData}
          type="button"
          className="plasmo-flex plasmo-flex-row plasmo-items-center plasmo-px-4 plasmo-py-2 plasmo-text-sm plasmo-rounded-lg plasmo-transition-all plasmo-border-none
          plasmo-shadow-lg hover:plasmo-shadow-md
          active:plasmo-scale-105 plasmo-bg-slate-50 hover:plasmo-bg-slate-100 plasmo-text-slate-800 hover:plasmo-text-slate-900"
        >
          Get My Location
        </button>
      )}
    </div>
  );
};

export default GetMyLocationButton;
