"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateDataForm({ id }) {
  const [newName, setNewName] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPhoneNumber, setNewPhoneNumber] = useState();
  const [newHobbies, setNewHobbies] = useState();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    console.log("newName:", newName);
    console.log("newEmail:", newEmail);

    const sendName = newName;

    try {
      const response = await fetch(
        `https://redpositive-backend-653g.onrender.com/api/v1/user/updateData/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: newName,
            email: newEmail,
            phoneNumber: newPhoneNumber,
            hobbies: newHobbies,
          }),
        }
      );

      console.log("newPhoneNumber:", newPhoneNumber);
      console.log("newHobbies:", newHobbies);

      if (!response.ok) {
        throw new Error("update failed! Try again.");
      } else {
        alert("Update Successful");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
          placeholder="name"
        />
        <input
          name="email"
          value={newEmail}
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
          placeholder="email"
        />
        <input
          name="phoneNumber"
          value={newPhoneNumber}
          onChange={(e) => {
            setNewPhoneNumber(e.target.value);
          }}
          placeholder="number"
        />
        <input
          name="hobbies"
          value={newHobbies}
          onChange={(e) => {
            setNewHobbies(e.target.value);
          }}
          placeholder="hobbies"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
