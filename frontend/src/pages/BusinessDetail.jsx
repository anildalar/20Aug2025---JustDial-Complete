import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../helper/Helper';

export default function BusinessDetail() {
    const [businessDetail,setBusinessDetail] = useState();
    const [star,setStar] = useState(0);
    const [reviewContent,setReviewContent] = useState('');
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

    //2.2 FUnction Defination
    let starCount = (starCountNumber)=>{
        console.log(starCountNumber);
        setStar(starCountNumber)

    }
    let handleChange = (e)=>{
        console.log(e.target.value);
        setReviewContent(e.target.value);
    }
    let sendReview = ()=>{
        let payload = {
                            "data": {
                                "stars": `${star}`,
                                "review_content": reviewContent,
                                "business_details": [`${b_detail_id}`],
                                "users_permissions_users": ["1"],
                                "review_photos": [],
                            },
                        };
        console.log(payload);

        //Lets call the api
        try {
            axios.post(`${BASE_URL}/api/reviews`, payload,                     // request body
            {
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(function (response) {
                // handle success
                console.log(response?.data?.data);
                Swal.fire({
                    title: "Review Submitted Successfully!",
                    icon: "success",
                    draggable: true
                });

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
    }


    //2.3 Return statement
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
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="#star5" onClick={()=>{ starCount(1) }}><i className="far fa-star text-warning"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="#star5" onClick={()=>{ starCount(2) }}><i className="far fa-star text-warning"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="#star5" onClick={()=>{ starCount(3) }}><i className="far fa-star text-warning"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="#star5" onClick={()=>{ starCount(4) }}><i className="far fa-star text-warning"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="#star5" onClick={()=>{ starCount(5) }}><i className="far fa-star text-warning"></i></a>
                </li>
            </ul>
            <textarea className="form-control col-2" onChange={handleChange}></textarea>
            <button onClick={sendReview} className="btn btn-success mt-3">Submit Review</button>
        </>

    )
}
