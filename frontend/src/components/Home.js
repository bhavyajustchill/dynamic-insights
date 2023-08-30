import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const apiUrl = "http://localhost:8081/placements";
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [distinctData, setDistinctData] = useState([]);
  const [targetOption, setTargetOption] = useState([]);
  const [referenceOption, setReferenceOption] = useState([]);
  const [refVal, setRefVal] = useState(0);
  const [tarVal, setTarVal] = useState(0);
  const [result, setResult] = useState(0);

  const targetOptions = ["Placed", "Placed with CTC"];
  const referenceOptions = ["Total Students", "Interested Students"];

  const [selectedValues, setSelectedValues] = useState({
    program: "",
    batch: "",
    consent: "",
  });
  const dropDownKeys = ["program", "batch", "consent"];

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setAllData(res.data);
        setDistinctData(extractDistinctValues(allData, dropDownKeys));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [apiUrl, allData]);

  const extractDistinctValues = (jsonArray, selectedKeys) => {
    const distinctValuesMap = {};

    jsonArray.forEach((obj) => {
      selectedKeys.forEach((key) => {
        if (obj.hasOwnProperty(key)) {
          if (!distinctValuesMap[key]) {
            distinctValuesMap[key] = new Set();
          }
          distinctValuesMap[key].add(obj[key]);
        }
      });
    });

    const result = {};

    for (const key in distinctValuesMap) {
      if (distinctValuesMap.hasOwnProperty(key)) {
        result[key] = Array.from(distinctValuesMap[key]);
      }
    }

    return result;
  };

  const handleSelectChange = (key, value) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [key]: value,
    }));
  };

  const handleGenerateResult = async () => {
    let conditions = {
      program: (value) => value === selectedValues.program,
      batch: (value) => value === selectedValues.batch,
    };

    if (targetOption !== "") {
      if (targetOption === "Placed") {
        conditions = { ...conditions, company: (value) => value !== "" };
      } else if (targetOption === "Placed with CTC") {
        conditions = { ...conditions, ctc: (value) => value > 0 };
      }
    }
    if (referenceOption !== "") {
      if (referenceOption === "Total Students") {
        conditions = { ...conditions, consent: (value) => value !== "" };
      } else if (referenceOption === "Interested Students") {
        conditions = { ...conditions, consent: (value) => value === "Interested in Placement" };
      }
    }

    await setFilteredData(
      allData.filter((item) => {
        for (const key in conditions) {
          if (conditions.hasOwnProperty(key)) {
            if (!conditions[key](item[key])) {
              return false;
            }
          }
        }
        return true;
      })
    );

    if (referenceOption === "Total Students") {
      setRefVal(allData.filter((item) => item.program === selectedValues.program).length);
    } else {
      setRefVal(filteredData.length);
    }
    setTarVal(filteredData.filter((item) => item.company !== "").length);
    console.log("tarVal", tarVal);
    console.log("refVal", refVal);
    setResult((tarVal / refVal) * 100);
  };

  return (
    <>
      <div className="container-fluid mt-5 flex justify-content-center">
        {distinctData
          ? Object.keys(distinctData).map((key) => (
              <div key={key}>
                <label htmlFor={key}>Select a {key}:</label>
                <select
                  onChange={(e) => handleSelectChange(key, e.target.value)}
                  id={key}
                  className="form-select"
                  name={key}>
                  <option>Select a {key}</option>
                  {distinctData[key].map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))
          : null}

        <div className="mt-3">
          Question :{" "}
          <select
            value={targetOption}
            onChange={(e) => setTargetOption(e.target.value)}
            className="form-select w-25">
            <option>Select a Target Option</option>
            {targetOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>{" "}
          V/S{" "}
          <select
            value={referenceOption}
            onChange={(e) => setReferenceOption(e.target.value)}
            className="form-select w-25">
            <option>Select a Reference Option</option>
            {referenceOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>{" "}
          in Percentage
          <br />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleGenerateResult();
            }}
            className="mt-2 btn btn-primary">
            Calculate
          </button>
        </div>
        {/* <pre>selectedValues: {JSON.stringify(selectedValues, null, 2)}</pre>
        <pre>targetOption: {targetOption}</pre>
        <pre>referenceOption: {referenceOption}</pre>*/}
        {/* <pre>filteredData: {JSON.stringify(filteredData, null, 2)}</pre> */}
        <pre>Result: {result}</pre>
      </div>
    </>
  );
}
