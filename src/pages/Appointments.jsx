import React, { useState } from "react";
import { patientsList } from "../data/Patients";
import Distribution from "../charts/Distribution";
import AppointmentMethod from "../charts/AppoinmentMethod";
import AppointmentStatus from "../charts/AppointmentStatus";
import Table from "../components/Table";
import PaginationControls from "../components/PaginationControls";
import GenderFilter from "../components/GenderFilter";
import GenderChart from "../charts/GenderChart";

const Appointments = ({ isMenuOpen }) => {
  const [genderFilter, setGenderFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;
  const startIndex = (currentPage - 1) * recordsPerPage;

  const filteredPatients = genderFilter
    ? patientsList.filter((patient) => patient.gender === genderFilter)
    : patientsList;

  const currentPatients = filteredPatients.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  const totalPages = Math.ceil(filteredPatients.length / recordsPerPage);

  return (
    <div className=" h-full w-full bg-gray-200 dark:bg-themeDark-senary dark:text-themeDark-primary p-5">
      <p className="text-[24px] font-bold tracking-wide mx-5">
        Appointment Details
      </p>
      <section>
        <div className="mx-5 my-2 dark:bg-themeDark-quinary">
          <div
            className={`${
              isMenuOpen ? "bs:grid-cols-2" : "md:grid-cols-2"
            } grid grid-cols-1 xl:grid-cols-4 place-items-center w-full 
          dark:bg-themeDark-senary rounded-md`}
          >
            <AppointmentStatus />
            <Distribution list={patientsList} name="Patients" />
            <AppointmentMethod />
            <GenderChart />
          </div>
        </div>

        <div className=" my-2 px-10 w-full">
          <p className="font-semibold text-[20px] my-4 capitalize">
            List of patients
          </p>
          <GenderFilter
            genderFilter={genderFilter}
            setGenderFilter={setGenderFilter}
          />
          <Table currentPatients={currentPatients} startIndex={startIndex} />
          <PaginationControls
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </section>
    </div>
  );
};

export default Appointments;
