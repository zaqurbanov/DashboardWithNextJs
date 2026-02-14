"use client"
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({ page, total,limit }: any) => {
    const searchParams  = useSearchParams()
    const pathName = usePathname()
    const createPageUrl = (page:number) =>{
        const params  =  new URLSearchParams(searchParams)
        params.set('page',page.toString())
        return `${pathName}?${params.toString()}` 
    }
  return (
    <div
      className="neu-inset p-3 flex gap-1 justify-center rounded-md
     "
    >
        {Array.from({length:Math.ceil(total/limit)}).map((item,index)=>{return (
            
            <Link
        
        href={createPageUrl(index+1)}
        key={index} className={page == index+1 ? 'neu-pressed text-green-500 p-3 rounded-md ' : 'neu-button text-blue-600 p-3 rounded-md'}>{index+1}</Link>)})}
      
    </div>
  );
};

export default Pagination;
