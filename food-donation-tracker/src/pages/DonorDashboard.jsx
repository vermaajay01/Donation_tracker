import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function DonorDashboard() {
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddDonation = async () => {
    if (!foodType || !quantity) return alert("Fill all fields!");
    try {
      await addDoc(collection(db, "donations"), {
        foodType,
        quantity,
        status: "pending",
        createdAt: serverTimestamp(),
      });
      alert("Donation added!");
      setFoodType(""); setQuantity("");
    } catch (error) {
      console.error(error);
      alert("Error adding donation");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Donor Dashboard</h1>
      <div className="bg-white p-6 rounded shadow-md space-y-4">
        <input
          type="text"
          placeholder="Food Type"
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleAddDonation}
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
        >
          Add Donation
        </button>
      </div>
    </div>
  );
}
