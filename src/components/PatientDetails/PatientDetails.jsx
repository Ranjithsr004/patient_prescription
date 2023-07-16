import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, onSnapshot, where } from 'firebase/firestore';
import { default as db } from '../../Firebase-config';
const PatientDetails = () => {
  const [patientName, setPatientName] = useState([]);

  useEffect(() => {
    const fetchPatientNames = async () => {
      try {
        const patientsCollectionRef = collection(db, 'prescriptions');
        const unsubscribe = onSnapshot(patientsCollectionRef, (snapshot) => {
          const data = snapshot.docs.map((doc) => doc.data().patientName);
          setPatientName(data);
        });
        return unsubscribe;
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchPatientNames();
  }, []);

  const handlePatientNameChange = (name) => {
    setPatientName([name]);
  };


  return (
    <div className='home-content1'>
      <div className="patient-list">
        <div className="patient-name" >
          <div className="search-box">
            <input type="text" placeholder="Patients" />
            <i className="bx bx-search"></i>
          </div>
          {patientName.length > 0 ? (
            <table className="patient-table" >
              <tbody>
                {patientName.map((name, index) => (
                  <tr key={index}>
                    <td>{name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className='no-pat'>No patient names available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
