import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../helper/Helper';
import axios from 'axios';

export default function BusinessListing() {
    //2.1
    const [businessListing,setBusinessListing] = useState([]);
    //Destrcution of JS Object
    const { b_listing_id } = useParams();

    useEffect(()=>{
        try {
            //PO.then().then().catch().finally()
            axios.get(`${BASE_URL}/api/business-details?populate=*&filters[business_categories][documentId][$eq]=${b_listing_id}`)
                .then(function (response) {
                    // handle success
                    console.log(response?.data?.data);
                    setBusinessListing(response?.data?.data);
                    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        } catch (error) {
            console.log(error)
        }
    },[]);


    return (
        <>
            <div>BusinessListing</div>
            <p>ID: {b_listing_id}</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>BusinessId</th>
                        <th>BusinessName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //array.map((cv,idx,arr)=>{},)
                        businessListing.map((cv,idx,arr)=>{
                            return (
                                <tr>
                                    <td>{cv.id}</td>
                                    <td>
                                       <a href={`/business-detail/${cv.documentId}`}>{cv.name}</a> 
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
