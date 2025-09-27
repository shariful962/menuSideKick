import React, { useState } from "react";
import { Icons } from "../../lib/images";


  const initalProducts = [
    {
      id: "01",
      name: "Vegan",
      img: Icons.vegan,
      category: "diet",
    },
    {
      id: "02",
      name: "keto",
      img: Icons.keto,
      category: "diet",
    },
    {
      id: "03",
      name: "Gluten-Free",
      img: Icons.gluten,
      category: "diet",
    },
    {
      id: "04",
      name: "Paleo",
      img: Icons.palio,
      category: "diet",
    },
    {
      id: "05",
      name: "Pescatarian",
      img: Icons.pescatarian,
      category: "diet",
    },
    {
      id: "06",
      name: "Nuts",
      img: Icons.nut,
      category: "allergies",
    },
    {
      id: "07",
      name: "Dairy",
      img: Icons.dairy,
      category: "allergies",
    },
    {
      id: "08",
      name: "Gluten",
      img: Icons.gluten,
      category: "allergies",
    },
    {
      id: "09",
      name: "Shellfish",
      img: Icons.Shellfish,
      category: "allergies",
    },
    {
      id: "10",
      name: "Egg",
      img: Icons.egg,
      category: "allergies",
    },
    {
      id: "11",
      name: "Diabetes",
      img: Icons.Diabetes,
      category: "medical",
    },
    {
      id: "12",
      name: "Hypertension",
      img: Icons.Hypertension,
      category: "medical",
    },
    {
      id: "13",
      name: "High Cholesterol",
      img: Icons.HighCholesterol,
      category: "medical",
    },
    {
      id: "14",
      name: "Celiac Disease",
      img: Icons.CeliacDisease,
      category: "medical",
    },
    {
      id: "15",
      name: "Acacia",
      img: Icons.Acacia,
      category: "ingredients",
    },
    {
      id: "16",
      name: "Acai",
      img: Icons.Acai,
      category: "ingredients",
    },
    {
      id: "17",
      name: "Acal juice concentrate",
      img: Icons.juice,
      category: "ingredients",
    },
    {
      id: "18",
      name: "Acerola",
      img: Icons.Acerola,
      category: "ingredients",
    },
    {
      id: "19",
      name: "Broccoli",
      img: Icons.Broccoli,
      category: "avatar",
    },
    {
      id: "20",
      name: "Carrot",
      img: Icons.Carrot,
      category: "avatar"
    },
     {
      id: "21",
      name: "Bread",
      img: Icons.Bread,
      category: "avatar"
    },
      {
      id: "22",
      name: "Coffee",
      img: Icons.Coffee,
      category: "avatar"
    },
        {
      id: "23",
      name: "Avocado",
      img: Icons.Avocado,
      category: "avatar"
    },
    {
      id: "24",
      name: "Salad",
      img: Icons.Salad,
      category: "avatar"
    }
  ];

const Category = () => {
  const [activeCategory, setActiveCategory] = useState("diet");
  const [products, setProducts] = useState(initalProducts)



  const buttonLists = [
    { id: 1, name: "Diet", value: "diet" },
    { id: 2, name: "Allergies", value: "allergies" },
    { id: 3, name: "Medical", value: "medical" },
    { id: 4, name: "Ingredients", value: "ingredients" },
    { id: 5, name: "Avatar", value: "avatar" },
  ];

  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;


  const handleDelete = (id)=>{
    const newProducts = products.filter((p)=>p.id !== id);
    setProducts(newProducts)
  }

  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)]">
      {/* Table Section */}
      <div className="bg-white shadow-custom rounded-[10px] mt-5 min-h-[calc(100vh-155px)]">
        {/* Header */}
        <div className="bg-Secondary px-6 py-4 rounded-tl-[10px] rounded-tr-[10px] flex flex-col md:flex-row justify-between md:items-center gap-2">
          <h2 className="title text-white">Category List</h2>
          <div className="flex gap-x-4">
            <button className="h-[42px] px-6 py-2 bg-white text-Secondary rounded font-bold">
              +Add Categories
            </button>
          </div>
        </div>

        {/* Button Area */}
        <div className="px-6 mt-7.5 flex flex-wrap gap-5">
          {buttonLists.map((btn) => (
            <button
              key={btn.id}
              onClick={() =>
                setActiveCategory(
                  activeCategory === btn.value ? null : btn.value
                )
              }
              className={`px-3 py-2 rounded text-xl w-[130px] ${
                activeCategory === btn.value
                  ? "bg-Secondary text-white"
                  : "border border-Secondary text-Secondary"
              }`}
            >
              {btn.name}
            </button>
          ))}
        </div>

        {/* Products Table */}
        <div className="mt-7.5 overflow-x-auto px-4">
          <table className="w-full text-left">
            <thead className="border-b border-[#154452]">
              <tr>
                <th className="px-4 py-3">S.ID</th>
                <th className="px-4 py-3">Category Name</th>
                <th className="hidden md:table-cell px-4 py-3">Category Image/Icon</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#154452]">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p, index) => (
                  <tr key={p.id} className="border-b border-[#E8E8F5]">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{p.name}</td>
                    <td className="hidden md:table-cell px-4 py-3">
                      <img
                        src={p.img}
                        alt=""
                        className={`w-7.5 h-7.5 ${
                          p.category === "avatar" ? "rounded-full" : ""
                        }`}
                      />
                    </td>
                    <td className="px-4 py-3 flex items-center gap-x-2">
                      <button className="cursor-pointer" onClick={()=>handleDelete(p.id)}>
                        <img src={Icons.delet} alt="delete icon" />
                      </button>
                      <button className="cursor-pointer">
                        <img src={Icons.edit} alt="edit icon" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No Product found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
