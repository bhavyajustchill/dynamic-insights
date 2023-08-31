import React, { useState } from "react";

function Filter() {
  const sampleRecords = [
    {
      EnrollmentNumber: "EN001",
      Name: "John Doe",
      Email: "john.doe@example.com",
      Mobile: "123-456-7890",
      Program: "Computer Science",
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
      Program: "Business Administration",
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
      Program: "Computer Engineering",
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
      Program: "English Literature",
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
      Program: "Chemistry",
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
      Program: "Biology",
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
      Program: "Physics",
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
      Program: "Economics",
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
      Program: "Political Science",
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
      Program: "Sociology",
      Consent: "Own Startup",
      CompanyName: "SocialTech",
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
      Program: "History",
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
      Program: "Finance",
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
      Program: "Mathematics",
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
      Program: "Computer Science",
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
      Program: "Engineering",
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
      Program: "Architecture",
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
      Program: "Medicine",
      Consent: "Higher Study Abroad",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "UK",
    },
    {
      EnrollmentNumber: "EN026",
      Name: "Victoria Miller",
      Email: "victoria.miller@example.com",
      Mobile: "777-666-5555",
      Program: "Business Administration",
      Consent: "Entrepreneur",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN027",
      Name: "Jackson Harris",
      Email: "jackson.harris@example.com",
      Mobile: "555-444-7777",
      Program: "Psychology",
      Consent: "Family Business",
      CompanyName: "Harris Enterprises",
      Designation: "CEO",
      CTC: "110000",
      TypeofJob: "Non-Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN028",
      Name: "Penelope Turner",
      Email: "penelope.turner@example.com",
      Mobile: "333-777-2222",
      Program: "Physics",
      Consent: "Not Interested",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN029",
      Name: "Leo King",
      Email: "leo.king@example.com",
      Mobile: "111-888-3333",
      Program: "Electrical Engineering",
      Consent: "Own Startup",
      CompanyName: "TechWizards",
      Designation: "Founder",
      CTC: "95000",
      TypeofJob: "Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN030",
      Name: "Stella Green",
      Email: "stella.green@example.com",
      Mobile: "444-555-8888",
      Program: "Chemistry",
      Consent: "Higher Study in India",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN031",
      Name: "Logan Turner",
      Email: "logan.turner@example.com",
      Mobile: "666-444-2222",
      Program: "Biology",
      Consent: "Interested in Job",
      CompanyName: "BioTech Solutions",
      Designation: "Researcher",
      CTC: "80000",
      TypeofJob: "Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN032",
      Name: "Lily Adams",
      Email: "lily.adams@example.com",
      Mobile: "333-555-8888",
      Program: "Art and Design",
      Consent: "Govt Job",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN033",
      Name: "Ethan Parker",
      Email: "ethan.parker@example.com",
      Mobile: "111-666-5555",
      Program: "Computer Engineering",
      Consent: "Higher Study Abroad",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "USA",
    },
    {
      EnrollmentNumber: "EN034",
      Name: "Aria Hill",
      Email: "aria.hill@example.com",
      Mobile: "555-888-4444",
      Program: "English Literature",
      Consent: "Entrepreneur",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN035",
      Name: "Carter Martinez",
      Email: "carter.martinez@example.com",
      Mobile: "666-333-7777",
      Program: "Chemical Engineering",
      Consent: "Just Complete Degree",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN036",
      Name: "Sophie Adams",
      Email: "sophie.adams@example.com",
      Mobile: "555-333-2222",
      Program: "BCA",
      Consent: "Higher Study Abroad",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "Canada",
    },
    {
      EnrollmentNumber: "EN037",
      Name: "Daniel Scott",
      Email: "daniel.scott@example.com",
      Mobile: "555-666-7777",
      Program: "BScIT",
      Consent: "Not Interested",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN038",
      Name: "Grace Martinez",
      Email: "grace.martinez@example.com",
      Mobile: "111-777-3333",
      Program: "MScIT",
      Consent: "Own Startup",
      CompanyName: "IT Innovators",
      Designation: "Founder",
      CTC: "95000",
      TypeofJob: "Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN039",
      Name: "Henry Lopez",
      Email: "henry.lopez@example.com",
      Mobile: "888-222-4444",
      Program: "BCA",
      Consent: "Family Business",
      CompanyName: "Lopez Enterprises",
      Designation: "Director",
      CTC: "100000",
      TypeofJob: "Non-Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN040",
      Name: "Ella White",
      Email: "ella.white@example.com",
      Mobile: "999-777-1111",
      Program: "BScIT",
      Consent: "Entrepreneur",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN041",
      Name: "Alexander Hall",
      Email: "alexander.hall@example.com",
      Mobile: "777-444-2222",
      Program: "MScIT",
      Consent: "Higher Study in India",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN042",
      Name: "Sofia Adams",
      Email: "sofia.adams@example.com",
      Mobile: "555-333-1111",
      Program: "BCA",
      Consent: "Interested in Job",
      CompanyName: "Tech Innovators",
      Designation: "Software Developer",
      CTC: "85000",
      TypeofJob: "Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN043",
      Name: "Benjamin Turner",
      Email: "benjamin.turner@example.com",
      Mobile: "777-888-2222",
      Program: "BScIT",
      Consent: "Govt Job",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN044",
      Name: "Luna Hernandez",
      Email: "luna.hernandez@example.com",
      Mobile: "999-222-4444",
      Program: "MScIT",
      Consent: "Just Complete Degree",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN045",
      Name: "Lucas Smith",
      Email: "lucas.smith@example.com",
      Mobile: "333-111-5555",
      Program: "BCA",
      Consent: "Higher Study Abroad",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "UK",
    },
    {
      EnrollmentNumber: "EN046",
      Name: "Victoria Miller",
      Email: "victoria.miller@example.com",
      Mobile: "777-666-5555",
      Program: "BScIT",
      Consent: "Entrepreneur",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN047",
      Name: "Jackson Harris",
      Email: "jackson.harris@example.com",
      Mobile: "555-444-7777",
      Program: "MScIT",
      Consent: "Family Business",
      CompanyName: "Harris Enterprises",
      Designation: "CEO",
      CTC: "110000",
      TypeofJob: "Non-Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN048",
      Name: "Penelope Turner",
      Email: "penelope.turner@example.com",
      Mobile: "333-777-2222",
      Program: "BCA",
      Consent: "Not Interested",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN049",
      Name: "Leo King",
      Email: "leo.king@example.com",
      Mobile: "111-888-3333",
      Program: "BScIT",
      Consent: "Own Startup",
      CompanyName: "TechWizards",
      Designation: "Founder",
      CTC: "95000",
      TypeofJob: "Technical",
      Country: "India",
    },
    {
      EnrollmentNumber: "EN050",
      Name: "Stella Green",
      Email: "stella.green@example.com",
      Mobile: "444-555-8888",
      Program: "MScIT",
      Consent: "Higher Study in India",
      CompanyName: "",
      Designation: "",
      CTC: "",
      TypeofJob: "",
      Country: "India",
    },
  ];

  const [filterSelections, setFilterSelections] = useState([
    { key: "", selectedValue: "", values: [], operandName: "" },
  ]);

  const [jsonArray, setJsonArray] = useState([]);

  const handleKeyChange = (index, event) => {
    const newFilterSelections = [...filterSelections];
    newFilterSelections[index].key = event.target.value;
    newFilterSelections[index].values = [
      ...new Set(sampleRecords.map((record) => record[event.target.value])),
    ];
    setFilterSelections(newFilterSelections);
  };

  const handleValueChange = (index, event) => {
    const newFilterSelections = [...filterSelections];
    newFilterSelections[index].selectedValue = event.target.value;
    setFilterSelections(newFilterSelections);
  };

  const handleOperandNameChange = (event) => {
    const newFilterSelections = [...filterSelections];
    newFilterSelections[filterSelections.length - 1].operandName = event.target.value;
    setFilterSelections(newFilterSelections);
  };

  const handleAddFilter = () => {
    setFilterSelections([
      ...filterSelections,
      { key: "", selectedValue: "", values: [], operandName: "" },
    ]);
  };

  const handleSubmit = () => {
    let filteredResult = [...sampleRecords];

    filterSelections.forEach((filter) => {
      if (filter.key && filter.selectedValue) {
        filteredResult = filteredResult.filter(
          (record) => record[filter.key] === filter.selectedValue
        );
      }
    });

    console.log("Filtered Records:", filteredResult);
  };

  const saveFiltersToJsonArray = () => {
    const newJsonArray = filterSelections
      .map((filter) => {
        if (filter.key && filter.selectedValue) {
          return {
            key: filter.key,
            selectedValue: filter.selectedValue,
          };
        }
        return null;
      })
      .filter(Boolean);

    setJsonArray(newJsonArray);
    console.log("Filters in JSON array:", newJsonArray);
  };

  const saveJsonArrayToInputValue = () => {
    const inputElement = document.getElementById("jsonArrayInput");
    inputElement.value = JSON.stringify(jsonArray);
  };

  return (
    <div>
      <h1>Dynamic Filter</h1>
      <div className="d-flex justify-content-between">
        <div>
          {filterSelections.map((filter, index) => (
            <div className="my-4" key={index}>
              <label>Key:</label>
              <select
                className="form-select"
                value={filter.key}
                onChange={(e) => handleKeyChange(index, e)}>
                <option value="">Select a Key</option>
                {Object.keys(sampleRecords[0]).map((key, idx) => (
                  <option key={idx} value={key}>
                    {key}
                  </option>
                ))}
              </select>
              <label>Value: </label>
              <select
                className="form-select"
                value={filter.selectedValue}
                onChange={(e) => handleValueChange(index, e)}>
                <option value="">Select a Value</option>
                {filter.values.map((value, idx) => (
                  <option key={idx} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <div className="d-flex align-items-center justify-content-center mt-3">
            <input
              id="operandName"
              onChange={(e) => handleOperandNameChange(e)}
              className="form-control me-4"
              placeholder="Enter Operand Name..."
              type="text"
            />
            <button className="btn btn-success mx-1" onClick={handleAddFilter}>
              Add
            </button>
            <button className="btn btn-primary mx-1" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          {/* <pre>{JSON.stringify(filterSelections, null, 2)}</pre> */}
          {/* <button onClick={saveFiltersToJsonArray}>Save Filters to JSON Array</button>
      <button onClick={saveJsonArrayToInputValue}>Save JSON Array to Input</button> */}
        </div>
        <div>
          <div className="table table-responsive">
            <thead className="table-dark">
              <tr>
                {Object.keys(filterSelections[0]).map(
                  (item, index) =>
                    item !== "values" && (
                      <th key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</th>
                    )
                )}
              </tr>
            </thead>
            <tbody>
              {filterSelections.map((item, index) => (
                <tr key={index}>
                  {Object.keys(item).map(
                    (column, index) => column !== "values" && <th key={index}>{item[column]}</th>
                  )}
                </tr>
              ))}
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
