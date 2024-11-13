'use client';

import React, { useEffect, useState } from 'react'

const page = () => {
  const [accounts, setAccounts] = useState<any[]>([]); // Set up state for the accounts data
  const [loading, setLoading] = useState(true); // To handle loading state

  useEffect(() => {
    // Fetch data from the backend API route
    const fetchAccounts = async () => {
      try {
        const response = await fetch('/api/checkDB');
        const data = await response.json();
        setAccounts(data); // Set data to state
        console.log(data)
      } catch (error) {
        console.error('Failed to fetch accounts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>; // Display loading state while data is being fetched
  }


  return (
    <div className='text-red-400 p-5'>
      <h1>Accounts</h1>
      <ul>
          {accounts.map((account: any, index) => (
            <li key={index}>{account.Fullname}</li> // Render each account name (or other properties)
          ))}
        </ul>
      sdsd
    </div>
  )
}

export default page
