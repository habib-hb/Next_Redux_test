'use client';


import { useSelector, useDispatch } from 'react-redux';
import { next_name , prev_name , new_name , clear_notification } from '../../store/name_changer/nameChangerSlice';
import {  useEffect, useState } from 'react';

export default function TestingNames() {

  const [new_name_string , set_new_name_string] = useState('');

  interface RootState {
    nameChanger: {
      values: string[];
      name: string;
      serial: number;
      notification: string;
    };
  }

  const name = useSelector((state: RootState) => state.nameChanger?.name);

  const notification = useSelector((state: RootState) => state.nameChanger?.notification);

  const dispatch = useDispatch();


  useEffect(() => {

    if(notification){
      const timeout = setTimeout(() => {
        dispatch(clear_notification());
      } , 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
      

  }, [ notification ]);

    return (
      <div className="flex justify-center items-center min-h-[80vh] bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Redux Name Changer</h1>
        <p className="text-xl text-center text-gray-600 mb-6">Name: <span className="font-semibold text-blue-600">{name}</span></p>
        
        <div className="flex justify-center gap-4 mb-6">

          <button
            onClick={() => dispatch(prev_name())}
            className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          >
            Previous Name
          </button>


          <button
            onClick={() => dispatch(next_name())}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Next Name
          </button>
          
        </div>

        <div className="mt-6">
          <p className="text-lg text-center text-gray-700 mb-4">Enter New Name</p>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={new_name_string}
              onChange={(e) => set_new_name_string(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch(new_name(new_name_string));
                }
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              placeholder="Enter a new name"
            />
            <button
              onClick={() => dispatch(new_name(new_name_string))}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              Submit
            </button>

            {notification && <p className={`mt-4 text-center text-sm ${notification ? "text-green-600" : "text-gray-400"}`}>
              {notification || "No notifications"}
            </p>}

          </div>
        </div>
      </div>
    </div>


     
    );
  }