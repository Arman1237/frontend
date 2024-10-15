'use client';
import React from 'react'

const EventHandling = () => {

    const previewImage = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onload = (data) => {

            const img = document.createElement('img');
            img.src = data.target.result;
            document.body.appendChild(img);
        }

        reader.readAsDataURL(file);
    }


    return (
        <div className="w-[80%] mx-auto border border-red-500"
            onMouseMove={(e) => { }}
        >

            <h1 className="text-center my-5 font-bold text=3xl">Event Handling</h1>

            <button className="bg-black text-white p-3"
                onClick={() => { alert('button was clicked') }}

            >Clicked Event</button>

            <input type="text"
                onChange={(e) => { console.log(e.target.value); }}
                className="border rounded p-3 mt-4 w-full" />

            <input type="color"
                onChange={(e) => { document.body.style.backgroundColor = e.target.value; }}
                className="mt-5" />

            <input type="file"
                onChange={(e) => { console.log(e.target.files); }}
                multiple
                className="block mt-5" />
            <input type="text" onKeyDown={(e) => { console.log(e.code); }}
                className="border rounded p-3 mt-4 w-full" />

            <input onChange={previewImage} type="file" />

        </div>
    )
}

export default EventHandling