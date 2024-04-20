"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddData() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    hobbies: "",
  });

  const router = useRouter();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phoneNumber) {
      alert("name, email and phoneNumber cannot be empty.");
      return;
    }

    try {
      const response = await fetch(
        "https://redpositive-backend-653g.onrender.com/api/v1/user/addData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const responseData = await response.json();
      console.log("Response from backend:", responseData);

      if (response.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create new Data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      // [e.target.name]: e.target.value,
      // [e.target.name]: e.target.value,
      // [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="name" onChange={handleChange}></input>
        {/* {errors.name && <p className="text-red-500">{errors.name}</p>} */}

        <input name="email" placeholder="email" onChange={handleChange}></input>
        {/* {errors.phoneNumber && (
        <p className="text-red-500">{errors.phoneNumber}</p>
      )} */}

        <input
          name="phoneNumber"
          placeholder="number"
          onChange={handleChange}
        ></input>
        {/* {errors.email && <p className="text-red-500">{errors.email}</p>} */}

        <input
          name="hobbies"
          placeholder="hobbies"
          onChange={handleChange}
        ></input>
        {/* {errors.hobbies && <p className="text-red-500">{errors.hobbies}</p>} */}

        {/* <button onClick={handleSubmit}>Submit</button> */}
        <input type="submit" />
      </form>
    </div>
  );
}
