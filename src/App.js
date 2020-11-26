import { useState, useEffect } from "react";
import './App.css';
import MonitoringSystemBlock from "./components/MonitoringSystemBlock";
import humidityStore from "./store/humidity";
import airPressureStore from "./store/airPressure";
import temperatureStore from "./store/temperature";

const App = () => {
  const [humidity, setHumidity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [airPressure, setAirPressure] = useState(null);

  useEffect(()=> {
    const subsH = humidityStore.subscribe(setHumidity);
    const subsA = airPressureStore.subscribe(setAirPressure);
    const subsT = temperatureStore.subscribe(setTemperature);

    return () => {
      subsH.unsubscribe();
      subsA.unsubscribe();
      subsT.unsubscribe();
    }
  },[]);

  return (
    <div className="App">
      {temperature && airPressure && humidity ? (
        <>
          <MonitoringSystemBlock title="Temperature" data={temperature} />
          <MonitoringSystemBlock title="Air pressure" data={airPressure} />
          <MonitoringSystemBlock title="Humidity" data={humidity} />
        </>
        ) : null}
    </div>
  );
}

export default App;
