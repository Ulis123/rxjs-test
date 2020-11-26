import {useState, useEffect} from "react";
import './App.css';
import MonitoringSystemBlock from "./components/MonitoringSystemBlock";
import humidityStore from "./store/humidity";
import airPressureStore from "./store/airPressure";
import temperatureStore from "./store/temperature";

import {merge} from 'rxjs';

const App = () => {
  const [allData, setAllData] = useState(
    [
      airPressureStore.initialState,
      humidityStore.initialState,
      temperatureStore.initialState
    ]);

  useEffect(() => {
    const sub = merge(humidityStore.subject, airPressureStore.subject, temperatureStore.subject)
      .subscribe((value) => setAllData((prev) => [...prev.map((el) => {
        if (el.system === value.system) return value;
        return el;
      })]));

    return () => {
      sub.unsubscribe()
    }
  }, []);

  const systems = [
    {title: "Temperature", system: "temperature"},
    {title: "Temperature", system: "airPressure"},
    {title: "Temperature", system: "humidity"}
  ];

  return (
    <div className="App">
      {allData.every(el => el.data !== null)
        ? systems.map((el) => {
          return (
            <MonitoringSystemBlock
              key={el.system} title={el.title}
              data={allData.find((item) => item.system === el.system)} />
            )
        })
        : null}
    </div>
  );
}

export default App;
