'use client'
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  const params = useSearchParams();
  const navigate = useRouter();
  const category = params.get("category");
  const isSelected = category == label;

  console.log(isSelected, "this is is selected over here",category,label);

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
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer ${selected ? "border-b-neutral-800 text-neutral-800" : ""}`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium"> {label}</div>
    </div>
  );
};

export default CategoryBox;
