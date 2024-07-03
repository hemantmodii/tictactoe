import React, { useState } from 'react'

const Field = () => {

  const [grid, setGrid] = useState([
    ["1","1","1"],
    ["1","1","1"],
    ["1","1","1"]
  ]);


  return (
    <div className='flex-1'>

      <table className='flex align-center justify-center mb-8'>
      <tbody className='p-4 w-[330px] flex justify-center flex-col align-center border border-green-300 rounded-2xl'>
      {grid.map((row,rowIndex) => (
        <tr key={rowIndex} className='flex h-[100px] m-1'>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} className='text-white  bg-green-100 w-1/3 h-[100px] px-auto my-auto border text-center justify-center rounded-lg shadow-lg shadow-green-500 m-1'></td>
          ))}
        </tr>
      ))}
      </tbody>
      </table>
      </div>
  )
}

export default Field