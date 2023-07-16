import React, { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { default as db } from '../../Firebase-config';
import './ViewPatient.css';
import Home from '../Home/Home';
import '../Home/Home.css'

const ViewPatient = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const prescriptionsCollectionRef = collection(db, 'prescriptions');
        const querySnapshot = await getDocs(prescriptionsCollectionRef);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setPrescriptions(data);
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
      }
    };

    fetchPrescriptions();
  }, []);

  return (
    <>
    <Home />
    <div className='pres-container'>
      <h2>View Patient Prescriptions</h2>
      {prescriptions.length > 0 ? (
        <table className="prescriptions-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Description</th>
              <th>Dosage Amount</th>
              <th>Frequency</th>
              <th>Duration (days)</th>
              <th>Reason</th>
              <th>Date of Issue</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((prescription, index) => (
              <tr key={index}>
                <td>{prescription.patientName}</td>
                <td>{prescription.description}</td>
                <td>{prescription.dosageAmount}</td>
                <td>{prescription.frequency}</td>
                <td>{prescription.duration}</td>
                <td>{prescription.reason}</td>
                <td>{prescription.dateOfIssue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No prescriptions available</div>
      )}
    </div>
    </>
  );
};

export default ViewPatient;
