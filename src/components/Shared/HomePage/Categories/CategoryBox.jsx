// import qs from "query-string";

import { useRouter } from "next/navigation";
import queryString from "query-string";

/* eslint-disable react/prop-types */
const CategoryBox = ({ label, icon: Icon, selected }) => {

const navigate=useRouter()

const handleClick=()=>{
const currentQuery={category:label}
console.log('handleclick is called here')

const url=queryString.stringifyUrl({
  url:'/all-rooms',
  query:currentQuery
})
console.log(url,'this is url')
navigate.push(url)
}
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
