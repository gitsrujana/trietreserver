// controllers/jobSeekerPersonalDetailsController.js
import JobSeekerPersonalDetails from '../models/JobSeekerPersonalDetails.js';

// Add Personal Details
export const addPersonalDetails = async (req, res) => {
  try {
    const { dateOfBirth, gender, nationality, languagePreference, disabilityOrHealthCondition } = req.body;

    const newDetails = await JobSeekerPersonalDetails.create({
      dateOfBirth,
      gender,
      nationality,
      languagePreference,
      disabilityOrHealthCondition,
    });

    res.status(201).json(newDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error adding personal details', error });
  }
};

// Get Personal Details
export const getPersonalDetails = async (req, res) => {
  try {
    const details = await JobSeekerPersonalDetails.findAll();
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching personal details', error });
  }
};

// controllers/jobSeekerPersonalDetailsController.js

// Update Personal Details
export const updatePersonalDetails = async (req, res) => {
    try {
      const { id } = req.params;
      const { dateOfBirth, gender, nationality, languagePreference, disabilityOrHealthCondition } = req.body;
  
      // Find the record by ID and update
      const updatedDetails = await JobSeekerPersonalDetails.update({
        dateOfBirth,
        gender,
        nationality,
        languagePreference,
        disabilityOrHealthCondition,
      }, {
        where: { id },  // Match based on the ID parameter
      });
  
      if (updatedDetails[0] === 0) {
        return res.status(404).json({ message: 'No record found with that ID' });
      }
  
      res.status(200).json({ message: 'Personal details updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating personal details', error });
    }
  };
  // controllers/jobSeekerPersonalDetailsController.js

// Delete Personal Details
export const deletePersonalDetails = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedDetails = await JobSeekerPersonalDetails.destroy({
        where: { id },  // Match based on the ID parameter
      });
  
      if (deletedDetails === 0) {
        return res.status(404).json({ message: 'No record found with that ID' });
      }
  
      res.status(200).json({ message: 'Personal details deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting personal details', error });
    }
  };
    
