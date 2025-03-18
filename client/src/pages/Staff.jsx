import React from "react";
import { useState } from "react";
import hospitalStaff from "../data/HospitalStaff";
import Distribution from "../charts/Distribution";
import Availabilty from "../charts/Availablity";
import StaffTable from "../components/StaffTable";
import PaginationControls from "../components/PaginationControls";

const Staff = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;
  const startIndex = (currentPage - 1) * recordsPerPage;

  const totalPages = Math.ceil(hospitalStaff.length / recordsPerPage);
  const currentHospitalStaff = hospitalStaff.slice(
    startIndex,
    startIndex + recordsPerPage
  );
  return (
    <div className="h-full w-full bg-gray-200 dark:bg-themeDark-senary dark:text-themeDark-primary p-5">
      <p className="text-[24px] font-bold tracking-wide mx-5">
        Hospital Staff Details
      </p>
      <section>
        <div className="mx-5 my-2 dark:bg-themeDark-quinary">
          <div
            className="grid grid-cols-1 bs:grid-cols-2 xl:grid-cols-3 place-items-center w-full 
        dark:bg-themeDark-senary"
          >
            <Distribution list={hospitalStaff} name="Hospital Staff" />
            <Availabilty availability={hospitalStaff} text="Hospital Staff" />
          </div>
        </div>

        <div className=" my-2 px-10 w-full">
          <p className="font-semibold text-[20px] my-4 capitalize">
            List of Hospital Staff
          </p>
          <StaffTable currentHospitalStaff={currentHospitalStaff} />
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

export default Staff;
