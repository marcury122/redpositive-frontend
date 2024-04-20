import UpdateDataForm from "@/components/UpdateDataForm";

// const getDataById = async (id) => {
//   try {
//     console.log("function ke ander")
//     const response = await fetch(`https://redpositive-backend-653g.onrender.com/api/v1/user/updateData/${id}`);
//     // console.log(response.json());

//     if (!response.ok) {
//       console.log("error aa ra h")
//       throw new Error("Failed to update Data. Please try again!!!");
//     }
//     return response.json();
//   } catch (error) {
//     console.log("hello")
//     console.log(Error);
//   }
// };

export default async function UpdateData({ params }) {
  const { id } = params;
  console.log("id: ", id);

  return <UpdateDataForm id={id} />;
}
