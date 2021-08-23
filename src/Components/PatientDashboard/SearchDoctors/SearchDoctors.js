import React, { useState, useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import PatientNavbar from "../PatientNavbar/PatientNavbar";
import DoctorCard from "../DoctorCard/DoctorCard";
import { getDoctorsApi, searchDoctorApi } from "../../../api";
import DoctorCardList from "../DoctorCardList/DoctorCardList";

const SearchDoctors = () => {
  const [doctors, setDoctorDetails] = useState([]);
  const [searchField, setSearchField] = useState();

  useEffect(() => {
    allDoctors();
  }, [searchField]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const allDoctors = async () => {
    const data = await searchDoctorApi(searchField);
    setDoctorDetails(data.doctors);
    console.log(data.doctors);
    console.log(doctors);
  };

  return (
    <>
      <PatientNavbar />
      <SearchBox handleChange={handleChange} />
      <DoctorCardList doctors={doctors} />
    </>
  );
};

export default SearchDoctors;
