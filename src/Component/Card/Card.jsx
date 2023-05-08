import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data,setData] =useState([]);

    // api collected from programing hero , AI-universe-hub repo
    useEffect(()=>{
        const loadData=async()=>{
            const res = await fetch(
                `https://openapi.programming-hero.com/api/ai/tools`
            );
            const value =await res.json();
            setData(value.data.tools);
        }
        loadData();
    },[])
    return (
        <>
          <div className="m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {data.map((singleData)=>{
            // console.log(singleData);
            return <SingleData singleData={singleData} key ={singleData.id}/>;
           } ) }
           {/* {
            data.map((SingleData)=>(<SingleData singleData = {singleData}/>))
           } */}
          </div>
        </>
    );
};

export default Card;