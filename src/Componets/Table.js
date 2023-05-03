import React, { useEffect, useState } from 'react';

const Tables = () => {
  const [drugs, setDrugs] = useState([]);
  const [selectedDrug, setSelectedDrug] = useState('');

  const fetchData = async () => {
    const response = await fetch('http://devapi.hidoc.co:8080/hidoc-us/drug/getDrugList', {
      method: 'POST',
    });
    const apiData = await response.json();
    setDrugs(apiData.data.drugData);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDrugClick = (name) => {
    setSelectedDrug(name);
  };

  const filteredDetails = drugs.filter((drug) => drug.drugName === selectedDrug);

  return (
    <div className="App mx-[15%] p-2 flex">
      <table className="border-2 border-black h-56 w-[50%] text-center m-1">
        <tbody>
          <tr>
            <th className="border-2 border-black ">Drug Data</th>
          </tr>
        </tbody>
        {drugs.map((drug, index) => (
          <tbody key={index}>
            <tr onClick={() => handleDrugClick(drug.drugName)}>
              <td className='cursor-pointer hover:text-cyan-400'>{drug.drugName}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <table className="border-2 border-black h-56 w-[50%] text-center m-1">
        <tbody>
          <tr>
            <th className="border-2 border-black ">Drug Detail</th>
          </tr>
        </tbody>
        {filteredDetails.map((drug, index) => (
          <tbody key={index} className="">
            <tr className="">
              <td className=""><span className='flex flex-col font-bold text-cyan-400'>{drug.drugName}</span>{drug.drugDetails}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Tables;
