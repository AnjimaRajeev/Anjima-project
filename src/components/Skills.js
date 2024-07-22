import React, { useState } from 'react';
import TechnicalSkills from './TechnicalSkills';
import SoftSkills from './SoftSkills';

const Skills = () => {
  // State for managing skills
  const [technicalSkills, setTechnicalSkills] = useState([
    { name: 'JavaScript', level: 80 },
    { name: 'React.js', level: 90 },
  ]);
  
  const [softSkills, setSoftSkills] = useState([
    { name: 'Communication', level: 95 },
    { name: 'Teamwork', level: 85 },
  ]);

  // Function to update skill level
  const handleSkillLevelChange = (index, newValue, type) => {
    if (type === 'technical') {
      const updatedSkills = [...technicalSkills];
      updatedSkills[index].level = newValue;
      setTechnicalSkills(updatedSkills);
    } else if (type === 'soft') {
      const updatedSkills = [...softSkills];
      updatedSkills[index].level = newValue;
      setSoftSkills(updatedSkills);
    }
  };

  // Function to add new skill
  const handleAddSkill = (newSkill, type) => {
    const newSkillObject = { name: newSkill, level: 50 }; // Default level, adjust as needed
    if (type === 'technical') {
      setTechnicalSkills([...technicalSkills, newSkillObject]);
    } else if (type === 'soft') {
      setSoftSkills([...softSkills, newSkillObject]);
    }
  };

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-section">
        <TechnicalSkills skills={technicalSkills} onSkillLevelChange={handleSkillLevelChange} onAddSkill={handleAddSkill} />
        <SoftSkills skills={softSkills} onSkillLevelChange={handleSkillLevelChange} onAddSkill={handleAddSkill} />
      </div>
    </div>
  );
};

export default Skills;
