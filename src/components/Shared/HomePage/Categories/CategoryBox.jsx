'use client'
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  const params = useSearchParams();
  const navigate = useRouter();
  const category = params.get("category");
  const isSelected = category === label;

  console.log(isSelected, "this is category",category,'this is lable here',label);

  const handleClick = () => {
    const currentQuery = { category: label };
    

    const url = queryString.stringifyUrl({
      url: "/all-rooms",
      query: currentQuery,
    });
    console.log(url, "this is url");
    navigate.push(url);
  };
  return (
    <div
      onClick={handleClick}
      className={`flex 
  flex-col 
  items-center 
  justify-center 
  gap-2
  p-3
  
  hover:text-neutral-800
  transition
  cursor-pointer ${isSelected && "border-b border-b-red-600 text-neutral-800"}`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium"> {label}</div>
    </div>
  );
};

export default CategoryBox;
