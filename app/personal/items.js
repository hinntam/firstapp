import Link from "next/link";

export default function Item({ itemObj, handleClick }) {
    const handClickItem=()=>{
      
      handleClick(itemObj.link,itemObj.content);
    }
    return (
      <div className="bg-gray-500 border p-1" onClick={handClickItem}>
        <h2 className="font-bold text-sm">{itemObj.desc}</h2>
       
      </div>
    );
  }
  