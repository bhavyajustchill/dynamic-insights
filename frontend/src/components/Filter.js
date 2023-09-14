import React, { useState, useEffect } from "react";

function Filter() {
  const sampleRecords = [
    {
      EnrollmentNumber: "EN001",
      Name: "John Doe",
      Email: "john.doe@example.com",
      Mobile: "123-456-7890",
      Program: "MScIT",
      Batch: "2020-2021",
      Consent: "Interested in Job",
      CompanyName: "TechCorp",
      Designation: "Software Engineer",
      CTC: "80000",
      TypeofJob: "Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN002",
      Name: "Jane Smith",
      Email: "jane.smith@example.com",
      Mobile: "987-654-3210",
      Program: "BBA",
      Batch: "2021-2022",
      Consent: "Entrepreneur",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN003",
      Name: "Michael Johnson",
      Email: "michael.johnson@example.com",
      Mobile: "555-555-5555",
      Program: "Mechanical Engineering",
      Batch: "2022-2023",
      Consent: "Higher Study Abroad",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "USA",
    },
    {
      EnrollmentNumber: "EN004",
      Name: "Emily Brown",
      Email: "emily.brown@example.com",
      Mobile: "111-222-3333",
      Program: "Medicine",
      Batch: "2020-2021",
      Consent: "Own Startup",
      CompanyName: "HealthTech",
      Designation: "CEO",
      CTC: "120000",
      TypeofJob: "Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN005",
      Name: "Robert Wilson",
      Email: "robert.wilson@example.com",
      Mobile: "777-888-9999",
      Program: "Electrical Engineering",
      Batch: "2021-2022",
      Consent: "Not Interested",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN006",
      Name: "Sarah Johnson",
      Email: "sarah.johnson@example.com",
      Mobile: "444-555-6666",
      Program: "Environmental Science",
      Batch: "2020-2021",
      Consent: "Family Business",
      CompanyName: "Johnson & Co.",
      Designation: "Manager",
      CTC: "75000",
      TypeofJob: "Non-Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN007",
      Name: "David Lee",
      Email: "david.lee@example.com",
      Mobile: "666-777-8888",
      Program: "Marketing",
      Batch: "2021-2022",
      Consent: "Just Complete Degree",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN008",
      Name: "Sophia Miller",
      Email: "sophia.miller@example.com",
      Mobile: "222-333-4444",
      Program: "Psychology",
      Batch: "2022-2023",
      Consent: "Govt Job",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN009",
      Name: "Daniel Martinez",
      Email: "daniel.martinez@example.com",
      Mobile: "999-888-7777",
      Program: "Civil Engineering",
      Batch: "2021-2022",
      Consent: "Not Interested",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN010",
      Name: "Olivia Brown",
      Email: "olivia.brown@example.com",
      Mobile: "777-999-5555",
      Program: "Art and Design",
      Batch: "2020-2021",
      Consent: "Higher Study in India",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN011",
      Name: "William Wilson",
      Email: "william.wilson@example.com",
      Mobile: "333-444-5555",
      Program: "MScIT",
      Batch: "2021-2022",
      Consent: "Interested in Job",
      CompanyName: "Tech Solutions",
      Designation: "Software Developer",
      CTC: "90000",
      TypeofJob: "Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN012",
      Name: "Emma Taylor",
      Email: "emma.taylor@example.com",
      Mobile: "555-444-3333",
      Program: "MScIT",
      Batch: "2022-2023",
      Consent: "Higher Study Abroad",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "UK",
    },
    {
      EnrollmentNumber: "EN013",
      Name: "Liam Martin",
      Email: "liam.martin@example.com",
      Mobile: "222-111-4444",
      Program: "MScIT",
      Batch: "2021-2022",
      Consent: "Entrepreneur",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN014",
      Name: "Ava Anderson",
      Email: "ava.anderson@example.com",
      Mobile: "333-555-7777",
      Program: "MScIT",
      Batch: "2022-2023",
      Consent: "Just Complete Degree",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN015",
      Name: "Noah Garcia",
      Email: "noah.garcia@example.com",
      Mobile: "111-222-5555",
      Program: "MScIT",
      Batch: "2020-2021",
      Consent: "Higher Study in India",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN016",
      Name: "Mia Rodriguez",
      Email: "mia.rodriguez@example.com",
      Mobile: "444-333-2222",
      Program: "BScIT",
      Batch: "2020-2021",
      Consent: "Higher Study Abroad",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "Canada",
    },
    {
      EnrollmentNumber: "EN017",
      Name: "James Scott",
      Email: "james.scott@example.com",
      Mobile: "555-666-7777",
      Program: "BScIT",
      Batch: "2021-2022",
      Consent: "Not Interested",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN018",
      Name: "Grace Martinez",
      Email: "grace.martinez@example.com",
      Mobile: "111-777-3333",
      Program: "BScIT",
      Batch: "2022-2023",
      Consent: "Own Startup",
      CompanyName: "IT Innovators",
      Designation: "Founder",
      CTC: "95000",
      TypeofJob: "Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN019",
      Name: "Henry Lopez",
      Email: "henry.lopez@example.com",
      Mobile: "888-222-4444",
      Program: "BScIT",
      Batch: "2021-2022",
      Consent: "Family Business",
      CompanyName: "Lopez Enterprises",
      Designation: "Director",
      CTC: "100000",
      TypeofJob: "Non-Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN020",
      Name: "Ella White",
      Email: "ella.white@example.com",
      Mobile: "999-777-1111",
      Program: "BScIT",
      Batch: "2021-2022",
      Consent: "Entrepreneur",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN021",
      Name: "Alexander Hall",
      Email: "alexander.hall@example.com",
      Mobile: "777-444-2222",
      Program: "BCA",
      Batch: "2020-2021",
      Consent: "Higher Study in India",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN022",
      Name: "Sofia Adams",
      Email: "sofia.adams@example.com",
      Mobile: "555-333-1111",
      Program: "BCA",
      Batch: "2021-2022",
      Consent: "Interested in Job",
      CompanyName: "Tech Innovators",
      Designation: "Software Developer",
      CTC: "85000",
      TypeofJob: "Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN023",
      Name: "Benjamin Turner",
      Email: "benjamin.turner@example.com",
      Mobile: "777-888-2222",
      Program: "BCA",
      Batch: "2022-2023",
      Consent: "Govt Job",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN024",
      Name: "Luna Hernandez",
      Email: "luna.hernandez@example.com",
      Mobile: "999-222-4444",
      Program: "BCA",
      Batch: "2021-2022",
      Consent: "Just Complete Degree",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN025",
      Name: "Lucas Smith",
      Email: "lucas.smith@example.com",
      Mobile: "333-111-5555",
      Program: "BCA",
      Batch: "2020-2021",
      Consent: "Higher Study Abroad",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "UK",
    },
  ];

  const [filterSelections, setFilterSelections] = useState([
    { key: "", selectedValue: "", values: [] },
  ]);
  const [question, setQuestion] = useState("");
  const [equation, setEquation] = useState("");
  const [operandName, setOperandName] = useState("");
  const [jsonObject, setJsonObject] = useState({});
  const [filterOptions, setFilterOptions] = useState([{}]);
  const [keyChanged, setKeyChanged] = useState(false);
  const [valueChanged, setValueChanged] = useState(false);
  //const [operands, setOperands] = useState({});

  const handleKeyChange = (index, event) => {
    const newFilterSelections = [...filterSelections];
    newFilterSelections[index].key = event.target.value;
    newFilterSelections[index].values = [
      ...new Set(sampleRecords.map((record) => record[event.target.value])),
    ];
    if (keyChanged === false) {
      setQuestion(`${question}{${event.target.value}:`);
      setKeyChanged(true);
    } else {
      convertKeyValuePairsToQuestions(event.target.value);
    }
    setFilterSelections(newFilterSelections);
    console.log("filterSelections", filterSelections);
  };

  const handleValueChange = (index, event) => {
    const newFilterSelections = [...filterSelections];
    newFilterSelections[index].selectedValue = event.target.value;
    if (valueChanged === false) {
      setQuestion(`${question} ${event.target.value}}`);
      setValueChanged(true);
    } else {
      convertKeyValuePairsToQuestions();
    }
    setFilterSelections(newFilterSelections);
  };

  const handleAddFilter = () => {
    setKeyChanged(false);
    setValueChanged(false);
    setFilterSelections([
      ...filterSelections,
      { key: "", selectedValue: "", values: [] },
    ]);
  };

  useEffect(() => {}, [jsonObject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the operandName value, like sending it to an API or processing it.
    console.log("Operand Name:", operandName);
    //let filteredResult = [...sampleRecords];
    // filterSelections.forEach((filter) => {
    //   if (filter.key && filter.selectedValue) {
    //     filteredResult = filteredResult.filter(
    //       (record) => record[filter.key] === filter.selectedValue
    //     );
    //   }
    // });
    setJsonObject((prevJsonObject) => ({
      ...prevJsonObject,
      [operandName]: filterSelections,
    }));
  };

  function convertKeyValuePairsToQuestions(newKey) {
    let tempQuestion = "";
    for (const item of filterSelections) {
      if (item.key === newKey) {
        tempQuestion += `{${item.key}: `;
      } else {
        tempQuestion += `{${item.key}: ${item.selectedValue}}`;
      }
    }
    setQuestion(tempQuestion);
  }

  const handleSave = (e) => {
    e.preventDefault();
    setJsonObject((prevJsonObject) => ({
      ...prevJsonObject,
      question: question,
      equation: equation,
    }));
  };

  function stringFromKey(inputString, keyToFind) {
    let result = "";
    if (inputString.includes("{" + keyToFind + ":")) {
      const findIndex = inputString.indexOf("{" + keyToFind + ":");
      let tempResult = inputString.substring(findIndex);
      tempResult = tempResult.replace("{" + keyToFind + ":", "");
      const closingBraceIndex = tempResult.indexOf("}");
      if (closingBraceIndex !== -1) {
        const extractedValue = tempResult.substring(0, closingBraceIndex);
        result = extractedValue;
      }
    }
    return result;
  }

  const handleRun = (e) => {
    e.preventDefault();

    let filteredResult = [...sampleRecords];
    let equation = jsonObject.equation;
    let question = jsonObject.question;
    //console.log(jsonObject);

    Object.keys(jsonObject).map((key) => {
      const value = jsonObject[key];
      if (Array.isArray(value)) {
        //console.log(key);
        jsonObject[key].forEach((filter) => {
          if (filter.key && filter.selectedValue) {
            filteredResult = filteredResult.filter(
              (record) =>
                record[filter.key] === stringFromKey(question, filter.key) //filter.selectedValue
            );
            console.log(
              "selectedValue",
              filter.selectedValue,
              stringFromKey(question, filter.key)
            );
          }
        });
        //console.log(key,filteredResult.length);
        if (equation.includes(key)) {
          equation = equation.replace("${" + key + "}", filteredResult.length);
        }
      }
    });

    const result = eval(equation);
    console.log(equation);
    console.log(result);
  };

  return (
    <div>
      <h1 className="text-center mt-3">Dynamic Insights</h1>
      <div className="row">
        <div className="col-md-4">
          {filterSelections.map((filter, index) => (
            <div className="d-flex mt-4" key={index}>
              {/* <label>Key:</label> */}
              <select
                className="form-select"
                value={filter.key}
                onChange={(e) => handleKeyChange(index, e)}
              >
                <option value="">Select a Key</option>
                {Object.keys(sampleRecords[0]).map((key, idx) => (
                  <option key={idx} value={key}>
                    {key}
                  </option>
                ))}
              </select>{" "}
              &nbsp;
              {/* <label>Value: </label> */}
              <select
                className="form-select"
                value={filter.selectedValue}
                onChange={(e) => handleValueChange(index, e)}
              >
                <option value="">Select a Value</option>
                {filter.values.map((value, idx) => (
                  <option key={idx} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <div className="d-flex align-items-center justify-content-center mt-2">
            <button
              className="btn btn-success w-25 me-1"
              onClick={handleAddFilter}
            >
              Add
            </button>
            <input
              id="operandName"
              className="form-control mx-1"
              placeholder="Enter Operand Name..."
              type="text"
              name="operandName"
              onChange={(e) => setOperandName(e.target.value)}
            />
            <button
              className="btn btn-primary ms-1 w-50"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <input
            id="question"
            className="form-control mt-4 w-100"
            placeholder="Enter Question..."
            type="text"
            value={question}
            name="question"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <input
            id="equation"
            className="form-control mt-2 w-100"
            placeholder="Enter Equation..."
            type="text"
            name="equation"
            onChange={(e) => setEquation(e.target.value)}
          />
          <div className="d-flex justify-content-between">
            <button
              className="btn w-100 me-1 btn-secondary mt-2"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="btn w-100 ms-1 btn-warning mt-2"
              onClick={handleRun}
            >
              Run
            </button>
          </div>
        </div>
        <div className="col-md-4">
          {filterSelections[0].key !== "" ? (
            <table className="mt-4 table table-responsive table-bordered">
              <thead className="table-dark">
                <tr>
                  {Object.keys(filterSelections[0]).map(
                    (item, index) =>
                      item !== "values" && (
                        <th key={index} className="text-center">
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </th>
                      )
                  )}
                </tr>
              </thead>
              <tbody>
                {filterSelections.map((item, index) => (
                  <tr key={index}>
                    {Object.keys(item).map(
                      (column, index) =>
                        column !== "values" && (
                          <td key={index}>{item[column]}</td>
                        )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h4 className="text-center mt-4">No Key/Values Selected!</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;
