// // pages/calculator/[id].js
// import React from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// // Define card details
// const cardDetails = {
//   1: {
//     title: "Brokerage Calculator",
//     description: "This calculator helps compute brokerage fees.",
//   },
//   2: {
//     title: "Stock Analyzer",
//     description: "Get insights into stock performance.",
//   },
//   3: {
//     title: "Investment Tracker",
//     description: "Track your investment performance over time.",
//   },
//   // Add more detailed descriptions here...
// };

// const Details = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Ensure the data is available before rendering
//   if (!id) return <div>Loading...</div>;

//   // Get the card data based on the ID
//   const card = cardDetails[id];

//   return (
//     <div className="details-container p-10 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-4">
//         {card?.title || "Card Details"}
//       </h1>
//       <p className="text-gray-700">
//         {card?.description || "No description available."}
//       </p>
//       <Link href="/" className="text-blue-500 font-bold">
//         Back to Home &larr;
//       </Link>
//     </div>
//   );
// };

// export default Details;
