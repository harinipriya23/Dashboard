import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";

const ReportTable = ({ currentPatientsList }) => {
  return (
    <div className="">
      <p className="text-[24px] my-4 font-bold tracking-wide mx-5">
        Patients Payment Record
      </p>
      <table className="w-full mx-4">
        <thead className="border-[0.5px] border-gray-600 bg-gray-400  dark:border-themeDark-quaternary dark:bg-themeDark-quinary">
          <tr
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 bs:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8  p-4 text-left gap-5 my-2`}
          "
          >
            <th className="th">ID</th>
            <th className="th">Name</th>
            <th className="th hidden lg:block">Appoinment Method</th>
            <th className="th hidden sm:block">Date</th>
            <th className="th hidden xl:block">Doctor</th>

            <th className="th ">Fees Amount</th>
            <th className="th hidden md:block">Amount Paid</th>
            <th className="th hidden bs:block">Outstanding Amount</th>
          </tr>
        </thead>
        <tbody className="border-[0.5px] border-gray-600 bg-gray-300 dark:bg-themeDark-senary  dark:border-themeDark-quaternary">
          {currentPatientsList.map((patient) => (
            <tr
              key={patient.id}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 bs:grid-cols-6 lg:grid-cols-7
               xl:grid-cols-8 items-center p-4 h-10 my-6 gap-5 text-left"
            >
              <td className="td">{patient.id}</td>
              <td className="td">{patient.name}</td>
              <td className="td hidden lg:block">{patient.bookingType}</td>
              <td className="td hidden sm:block">{patient.appointmentDate}</td>
              <td className="td hidden xl:block">{patient.doctor}</td>
              <td className="td flex items-center gap-1">
                {patient.feesAmount === "0" ? (
                  "Nil"
                ) : (
                  <>
                    <FaIndianRupeeSign />
                    {patient.feesAmount}
                  </>
                )}
              </td>
              <td className="td hidden md:flex items-center gap-1">
                {patient.amountPaid === "0" ? (
                  "Nil"
                ) : (
                  <>
                    <FaIndianRupeeSign /> {patient.amountPaid}
                  </>
                )}
              </td>
              <td className="td hidden bs:flex items-center gap-1">
                {patient.outstandingAmount === "0" ? (
                  "Nil"
                ) : (
                  <>
                    <FaIndianRupeeSign />
                    {patient.outstandingAmount}
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
