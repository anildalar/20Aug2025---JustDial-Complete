import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../helper/Helper';

export default function BusinessDetail() {
    const [businessDetail,setBusinessDetail] = useState();
    console.log('businessDetail>>>>',businessDetail);
    const { b_detail_id } = useParams();

    //Call the api after page reload
    useEffect(()=>{
        try {
            axios.get(`${BASE_URL}/api/business-details?populate=*&filters[documentId][$eq]=${b_detail_id}`)
                .then(function (response) {
                    // handle success
                    console.log(response?.data?.data);
                    setBusinessDetail(response?.data?.data);
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
        
            <div>BusinessDetail</div>
            <p>{b_detail_id}</p>
            {
               // businessDetail !== undefined ? <h1>Ok</h1>:''

                (businessDetail  !== undefined ) &&

                <h1>{businessDetail[0].name}</h1>

                
            }
            <hr />
            <h1>Review </h1>
            <ul class="list-inline">
                <li class="list-inline-item">
                    <a href="#star1"><i class="fas fa-star text-warning"></i></a>
                </li>
                <li class="list-inline-item">
                    <a href="#star2"><i class="fas fa-star text-warning"></i></a>
                </li>
                <li class="list-inline-item">
                    <a href="#star3"><i class="fas fa-star text-warning"></i></a>
                </li>
                <li class="list-inline-item">
                    <a href="#star4"><i class="fas fa-star text-warning"></i></a>
                </li>
                <li class="list-inline-item">
                    <a href="#star5"><i class="far fa-star text-warning"></i></a>
                </li>
            </ul>
            <textarea className="form-control col-2"></textarea>
            
        </>

    )
}
