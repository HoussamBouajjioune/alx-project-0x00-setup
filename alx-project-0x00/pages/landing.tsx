import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const LandingPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Landing Page</h1>

      <Card />

      <div className="flex flex-col gap-4 mt-8">
        {/* Small Buttons */}
        <Button title="Small - Rounded Sm" styles="bg-blue-500 text-sm rounded-sm" />
        <Button title="Small - Rounded Md" styles="bg-green-500 text-sm rounded-md" />
        <Button title="Small - Rounded Full" styles="bg-purple-500 text-sm rounded-full" />

        {/* Medium Buttons */}
        <Button title="Medium - Rounded Sm" styles="bg-yellow-500 text-base rounded-sm" />
        <Button title="Medium - Rounded Md" styles="bg-pink-500 text-base rounded-md" />
        <Button title="Medium - Rounded Full" styles="bg-gray-500 text-base rounded-full" />

        {/* Large Buttons */}
        <Button title="Large - Rounded Sm" styles="bg-red-500 text-lg rounded-sm" />
        <Button title="Large - Rounded Md" styles="bg-teal-500 text-lg rounded-md" />
        <Button title="Large - Rounded Full" styles="bg-indigo-500 text-lg rounded-full" />
      </div>
    </div>
  );
};

export default LandingPage;
