import React from "react";
import { useParams } from "react-router-dom";

function DonationDetail() {
  const { id } = useParams(); // Retrieve the ID parameter from the URL

  return (
    <div>
      <h2>Donation Detail</h2>
      <p>Displaying details for donation with ID: {id}</p>
      {/* Add more detailed information about the donation here */}
    </div>
  );
}

export default DonationDetail;
