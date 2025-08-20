//1. Import area
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../helper/Helper';

//2. Functiond defination
export default function BusinessCategory() {
    //2.1 Hooks Area
    const [BusinessCategory,setBusinessCategory] = useState([]);
    useEffect(()=>{
        //Call the api
        try {
            //PO.then().then().catch().finally()
            axios.get(`${BASE_URL}/api/business-categories`)
                .then(function (response) {
                    // handle success
                    console.log(response?.data?.data);
                    setBusinessCategory(response?.data?.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
            
        } catch (error) {
            console.log(error);
        }

    },[]);




    //2.2


    //2.3 Return statement
    return (
        <>
            <div>BusinessCategory</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>BusinessId</th>
                        <th>BusinessName</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        //array.map(cbfn,this)
                        //array.map((cv,arr,idx)=>{},this)
                       BusinessCategory.map((cv,idx,arr)=>{
                            return (
                                <tr key={idx}>
                                    <td>{cv.id}</td>
                                    <td>
                                        <a href={`/business-listing/${cv.documentId}`}>{cv.name}</a>    
                                    </td>
                                </tr>
                            )
                       }) 
                    }
                    
                </tbody>
            </table>
        </>
    )
}
