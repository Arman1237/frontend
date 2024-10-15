'use client';
import React from 'react'
import { useState } from 'react';

const Todolist = () => {

  const [count, setCount] =  useState(0);

    const addNewTask = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value);
        
            e.target.value ='';
        }

    }
    return (

        <div>
            <h3 className="text-center text-3x1 font-bold my-6">Todo List</h3>

            <div className="max-w-80% mx-auto">
                <p className='text-3x1'>{count}</p>
                <button className='border p-3'
                    onClick={() => { setCount( count + 1); console.log(count); }}>Add Count</button>
                <div className="round border border-grey-300 shadow ">
                    <div className="p-5">
                        <input
                            onKeyDown={addNewTask}
                            type="text"
                            className="w-full rounded bg-grey-200 p-3"
                        />
                    </div>
                    <div className="border-t border-grey-300 shadow">
                    </div>

                </div>

            </div> </div>
    )
}

export default Todolist;