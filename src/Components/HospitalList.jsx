import React, { useState, useEffect } from "react";
import { hospitalsData } from "./data"; 
import { motion } from 'framer-motion';
import { fadeIn } from "../varient";
const HospitalCard = ({ hospital }) => {
  return (
    < motion.div
      variants={fadeIn("left", 1.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      // style={cardStyle} 
      className="p-[20px] border-8 rounded-lg bg-[#8ec1ff] text-center w-[300px] hover:bg-[#60a5fa] hover:scale-110 duration-300 hover:shadow-2xl">
      <div>
        <img className="h-[180px] w-[250px]" src="https://media.istockphoto.com/id/1301595548/photo/female-doctor-stock-photo.webp?b=1&s=612x612&w=0&k=20&c=WIQmfgE58OHntqYo9FmuQMfEplxajHu5P-Nw30gS7cs=" alt="" />
      </div>
      <h2>{hospital.name}</h2>
      <p>Available Doctors: {hospital.availableDoctors}</p>
      <p>Available Wards: {hospital.availableWards}</p>
    </motion.div>
  );
};

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5); 
  const [search, setSearch] = useState("");

  useEffect(() => {
  
    const fetchHospitals = () => {
      setTimeout(() => {
        setHospitals(hospitalsData); 
      }, 1000); 
    };

    fetchHospitals();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
    setVisibleCount(4);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); 
  };

 
  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(search)
  );

 
  const visibleHospitals = filteredHospitals.slice(0, visibleCount);

  return (
    <div style={containerStyle}>
      <div className="flex justify-center items-center flex-col rounded-sm bg-[#8b5cf6] w-[400px] py-5 text-white space-y-3">
        <h1 className="font-sans font-bold text-lg">Hospitals Information</h1>
        <input
        className="text-black"
          type="text"
          placeholder="Search by hospital name"
          value={search}
          onChange={handleSearchChange}
          style={inputStyle}
        />
      </div>

      <div style={cardsContainerStyle}>
        {visibleHospitals.length > 0 ? (
          visibleHospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))
        ) : (
          <p>No hospitals found.</p>
        )}
      </div>

      {visibleCount < filteredHospitals.length && (
        <button onClick={handleShowMore} style={buttonStyle}>
          Show More
        </button>
      )}
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
};

const cardsContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  width: "100%", 
};

const cardStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  backgroundColor: '#60a5fa',
  borderRadius: "8px",
  width: "300px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const inputStyle = {
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "300px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginTop: "20px",
};

export default HospitalList;








// import React, { useState, useEffect } from "react";
// import { hospitalsData } from "./data"; // Import the dummy data

// const HospitalCard = ({ hospital }) => {
//   return (
//     <div style={cardStyle}>
//       <h2>{hospital.name}</h2>
//       <p>Available Doctors: {hospital.availableDoctors}</p>
//       <p>Available Wards: {hospital.availableWards}</p>
//     </div>
//   );
// };

// const HospitalList = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     // Simulating an API call with dummy data
//     const fetchHospitals = () => {
//       setTimeout(() => {
//         setHospitals(hospitalsData); // Set the data from the "API"
//       }, 1000); // Simulate a delay
//     };

//     fetchHospitals();
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   // Filter hospitals based on the search input
//   const filteredHospitals = hospitals.filter((hospital) =>
//     hospital.availableWards.toString().includes(search)
//   );

//   return (
//     <div style={containerStyle}>
//       <h1>Hospitals Information</h1>
//       <input
//         type="number"
//         placeholder="Search available wards"
//         value={search}
//         onChange={handleSearchChange}
//         style={inputStyle}
//       />
//       {filteredHospitals.length > 0 ? (
//         filteredHospitals.map((hospital) => (
//           <HospitalCard key={hospital.id} hospital={hospital} />
//         ))
//       ) : (
//         <p>No hospitals found.</p>
//       )}
//     </div>
//   );
// };

// const containerStyle = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   gap: "20px",
// };

// const cardStyle = {
//   border: "1px solid #ccc",
//   padding: "20px",
//   borderRadius: "8px",
//   width: "300px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// };

// const inputStyle = {
//   padding: "10px",
//   marginBottom: "20px",
//   borderRadius: "4px",
//   border: "1px solid #ccc",
//   width: "300px",
// };

// export default HospitalList;
