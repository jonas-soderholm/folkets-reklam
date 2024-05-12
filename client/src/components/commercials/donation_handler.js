// // Donate update DB + rerender
// export async function donationHandler(id, amount) {
//   try {
//     const donationAdded = await updateDonationsOnDataBase(id, amount);
//     if (donationAdded) {
//       //setRerenderCommercial((prev) => !prev);
//     }
//   } catch (error) {
//     console.error("Error adding donation:", error.message);
//   }
// }

// export async function updateDonationsOnDataBase(id, amount) {
//   try {
//     const response = await fetch(`http://127.0.0.1:5000/api/addDonation`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ commercial_id: id, amount: amount }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to add donation");
//     }

//     return true; // Return true if donation added successfully
//   } catch (error) {
//     console.error("Error adding donation:", error.message);
//     return false; // Return false if donation failed
//   }
// }
