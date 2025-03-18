import React, { useState } from "react";
import Distribution from "../charts/Distribution";
import AppointmentMethod from "../charts/AppoinmentMethod";
import Availablity from "../charts/Availablity";
import { patientsList } from "../data/Patients";
import doctorsList from "../data/Doctors";
import hospitalStaff from "../data/HospitalStaff";
import CollectionReport from "../components/CollectionReport";
import Availabilty from "../charts/Availablity";
import ReportTable from "../components/ReportTable";
import PaginationControls from "../components/PaginationControls";

const Dashboard = ({ isMenuOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;
  const startIndex = (currentPage - 1) * recordsPerPage;
  const totalPages = Math.ceil(patientsList.length / recordsPerPage);
  const currentPatientsList = patientsList.slice(
    startIndex,
    startIndex + recordsPerPage
  );
  return (
    <div
      className="h-full w-full bg-gray-200
     dark:bg-themeDark-senary dark:text-themeDark-primary p-5"
    >
      <p className="text-[24px] font-bold tracking-wide mx-5">Revenue Report</p>
      <CollectionReport isMenuOpen={isMenuOpen} />
      <p className="text-[24px] font-bold tracking-wide mx-5">
        Hospital Departmental Breakdown
      </p>
      <section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <Distribution list={patientsList} name="Patients" />
        <Distribution list={doctorsList} name="Doctors" />
        <Distribution list={hospitalStaff} name="Hospital Staff" />
        {/* <AppointmentMethod />
        <Availablity availability={doctorsList} /> */}
      </section>
      <p className="text-[24px] font-bold tracking-wide mx-5">
        Clinical Team Availability
      </p>
      <section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <Availabilty availability={doctorsList} text="Doctors" />
        <Availabilty availability={hospitalStaff} text="Hospital Staff" />
      </section>
      <ReportTable currentPatientsList={currentPatientsList} />
      <PaginationControls
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Dashboard;
