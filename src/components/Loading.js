import React from 'react'
import loading from '../loading.png'

export default function Loading() {
    document.body.onload = () => {
        document.getElementById('exampleModal').modal('show')
    }
    return (
        <div className='text-center my-5'>
            <img src={loading} alt="" width="100px"/>
        </div>
    )
}
