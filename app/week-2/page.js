"use client"
import MealIdeas from "./meal-idea";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import { useState } from "react";
export default function Page(){
    const[items ,setItems]=useState(itemsData);
    let itemArray=itemsData.map((item)=>({...item}));//return new array items
    const[selectedItemName ,setSelectedItemName]=useState('');
    const handleAddItem=(newItem)=>{
        //Add new item into item in the list
        setItems([...itemArray,newItem]);

    }
    const handleItemSelect=(item)=>{
        const{
            name
        }=item;
        //console.log(name.split(' ')[0].replace(',','').trim());
        setSelectedItemName(name.split(' ')[0].replace(',','').trim());
    }
    return(
        <main className="bg-slate-950">
            <h1 className="font-bold m-2 text-cyan-50 text-2xl p-4">
                Shopping lists
            </h1>
            <div className="flex">
            <div className="flex-1 max-w-sm m-2">
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            
            <MealIdeas ingredient={selectedItemName}/>
            </div>
        </main>
    )
}