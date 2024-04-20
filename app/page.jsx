"use client";
import { useEffect, useState } from "react";

import { UserData } from "@/components/UserData";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await fetch(
          "https://redpositive-backend-653g.onrender.com/api/v1/user/"
        );
        const responseData = await response.json();
        console.log("Response from backend:", responseData);
        setData(responseData);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getAllUsers();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <UserData data={data} />
    </div>
  );
}
