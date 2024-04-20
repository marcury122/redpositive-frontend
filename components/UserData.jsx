import Link from "next/link";
import { DeleteBtn } from "./DeleteBtn";
import { HiPencilAlt } from "react-icons/hi";
import { useState } from "react";

export const UserData = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState([]);

  const onSelectRow = (id) => {
    setSelectedRow(() => {
      if (selectedRow.includes(id)) {
        return selectedRow.filter((item) => {
          item !== id;
        });
      } else {
        return [...selectedRow, id];
      }
    });
  };

  const handleSendMail = async () => {
    try {
      const response = await fetch(
        `https://redpositive-backend-653g.onrender.com/api/v1/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            selectedRow: selectedRow,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Email failed! Try again.");
      } else {
        alert("Email Successful");
        // router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleSendMail} className="bg-white">
        Send Email
      </button>

      {/* <table className="border-collapse w-full">
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Hobbies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((t) => (
            <tr key={t._id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => onSelectRow(t)}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
              </td>

              <td>{t._id}</td>
              <td>{t.name}</td>
              <td>{t.phoneNumber}</td>
              <td>{t.email}</td>
              <td>{t.hobbies}</td>

              <td>
                <DeleteBtn id={t._id} />
                <Link href={`/updateData/${t._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Hobbies
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((t, i) => {
              return (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onChange={() => onSelectRow(t)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {i + 1}
                  </th>
                  <td className="px-6 py-4">{t.name}</td>
                  <td className="px-6 py-4">{t.phoneNumber}</td>
                  <td className="px-6 py-4">{t.email}</td>
                  <td className="px-6 py-4">{t.hobbies}</td>
                  <td className="flex items-center px-6 py-4">
                    <DeleteBtn id={t._id} />
                    <Link
                      href={`/updateData/${t._id}`}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      <HiPencilAlt size={24} />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
