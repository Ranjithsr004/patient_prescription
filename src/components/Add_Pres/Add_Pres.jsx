import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './Add_Pres.css'
import { default as db } from '../../Firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import Home from '../Home/Home';


const Add_Pres = ({ patientName, onPatientNameChange }) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            patientName: '',
            description: '',
            dosageAmount: '',
            frequency: '',
            duration: '',
            reason: '',
            dateOfIssue: '',
        },
    ]);


    const columns = [
        {
            dataField: 'name',
            text: 'Patient Name',
            formatter: (cell, row, rowIndex, formatExtraData) => (
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter patient name"
                    value={row.patientName || ''}
                    onChange={(e) => handleInputChange(e, rowIndex, 'patientName')}
                />
            ),
        },
        {
            dataField: 'id',
            text: 'Descriptions',
            formatter: (cell, row, rowIndex, formatExtraData) => (
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter description"
                    value={row.description || ''}
                    onChange={(e) => handleInputChange(e, rowIndex, 'description')}
                />
            ),
        },
        {
            dataField: 'name',
            text: 'Dosage Amount',
            formatter: (cell, row, rowIndex, formatExtraData) => (
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter dosage amount"
                    value={row.dosageAmount || ''}
                    onChange={(e) => handleInputChange(e, rowIndex, 'dosageAmount')}
                />
            ),
        },
        {
            dataField: 'price',
            text: 'Frequency',
            formatter: (cell, row, rowIndex, formatExtraData) => (
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter frequency"
                    value={row.frequency || ''}
                    onChange={(e) => handleInputChange(e, rowIndex, 'frequency')}
                />
            ),
        },
        {
            dataField: 'name',
            text: 'Duration (days)',
            formatter: (cell, row, rowIndex, formatExtraData) => (
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter duration"
                    value={row.duration || ''}
                    onChange={(e) => handleInputChange(e, rowIndex, 'duration')}
                />
            ),
        },
        {
            dataField: 'name',
            text: 'Reason',
            formatter: (cell, row, rowIndex, formatExtraData) => (
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter reason"
                    value={row.reason || ''}
                    onChange={(e) => handleInputChange(e, rowIndex, 'reason')}
                />
            ),
        },
        {
            dataField: 'dateOfIssue',
            text: 'Date of Issue',
            formatter: (cell, row, rowIndex, formatExtraData) => (
                <input
                    type="date"
                    className="form-control"
                    placeholder="Select date"
                    value={row.dateOfIssue || ''}
                    onChange={(e) => handleInputChange(e, rowIndex, 'dateOfIssue')}
                />
            ),
        },
    ];

    const handleInputChange = (e, rowIndex, field) => {
        const updatedProducts = [...products];
        updatedProducts[rowIndex] = {
            ...updatedProducts[rowIndex],
            [field]: e.target.value,
        };
        setProducts(updatedProducts);
    };

    const handleAddPrescription = () => {
        setProducts([
            ...products,
            {
                id: products.length + 1,
                patientName: '',
                description: '',
                dosageAmount: '',
                frequency: '',
                duration: '',
                reason: '',
                dateOfIssue: '',
            },
        ]);
    };

    const handleCompletePrescription = async () => {
  try {
    const prescriptionsCollectionRef = collection(db, 'prescriptions');
    for (const product of products) {
      await addDoc(prescriptionsCollectionRef, product);
      
    }
    window.location="/";
    const newPatientName = products[0].patientName;
    const updatedPatientName = [...patientName, newPatientName];
    onPatientNameChange(updatedPatientName);
    console.log('Data stored in Firestore:', products);
    // const clearedProducts = products.map((product) => ({
    //   ...product,
    //   patientName: '',
    //   description: '',
    //   dosageAmount: '',
    //   frequency: '',
    //   duration: '',
    //   reason: '',
    //   dateOfIssue: '',
    // })
    // );
    
    // setProducts(clearedProducts);
  } catch (error) {
    console.error('Error storing data in Firestore:', error);
  }
};


      const handleCancel = () => {
        setProducts('');
      };


    return (
        <>
        <Home />
        <div className='pat' style={{backgroundColor:'#f2f2f2',width:'100%',height:'100vh'}}>
        <div className="add-patient">
            <div className="title">Add Prescription Details</div>
            <BootstrapTable keyField="id" data={products} columns={columns} />
            <div className="button-container">
                <button className="btn btn-danger" onClick={handleCancel}>
                    Cancel
                </button>
                <button className="btn btn-primary" onClick={handleAddPrescription}>
                    Add Prescription
                </button>
                <button className="btn btn-success" onClick={handleCompletePrescription}>
                    Complete
                </button>
                
            </div>
        </div>
        </div>
        </>
    );
};

export default Add_Pres;
