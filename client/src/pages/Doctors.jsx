import React, { useState } from "react";
import doctorsList from "../data/Doctors";
import DoctorDetails from "../components/DoctorDetails";
import Availability from "../charts/Availablity";
import Distribution from "../charts/Distribution";

const Doctors = ({ isMenuOpen }) => {
  const [displayCount, setDisplayCount] = useState(6);
  const recordsPerPage = 5;

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + recordsPerPage);
  };
  const displayedDoctors = doctorsList.slice(0, displayCount);

  return (
    <div className="h-full w-full bg-gray-200 dark:bg-themeDark-senary dark:text-themeDark-primary p-5">
      <p className="text-[24px] font-bold tracking-wide mx-5">Doctor Details</p>
      <main className="grid grid-cols-1">
        <section
          className="grid grid-cols-1 bs:grid-cols-2 xl:grid-cols-3 place-items-center w-full 
        dark:bg-themeDark-senary"
        >
          <Distribution list={doctorsList} name="Doctors" />
          <Availability availability={doctorsList} text="Doctors" />
        </section>
        <section className="col-span-8">
          <p className="text-[20px] font-semibold my-2 mx-10 capitalize">
            List of doctors
          </p>
          <div
            className={`${
              isMenuOpen
                ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "sm:grid-cols-2 md:grid-cols-2 bs:grid-cols-3 lg:grid-cols-4"
            } grid grid-cols-1  gap-4 mx-5 place-items-center
       `}
          >
            {displayedDoctors.map((doctor) => (
              <DoctorDetails doctor={doctor} />
            ))}
          </div>
          {displayCount < doctorsList.length && (
            <div className="flex justify-center mt-4">
              <button
                onClick={handleShowMore}
                className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400
                dark:bg-themeDark-quaternary hover:dark:bg-themeDark-quinary transition duration-300"
              >
                Show More
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Doctors;
