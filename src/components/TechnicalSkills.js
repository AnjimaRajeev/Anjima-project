import React, { useState } from 'react';

const TechnicalSkills = ({ skills, onSkillLevelChange, onAddSkill }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() === '') {
      return; // Prevent adding empty skill
    }
    onAddSkill(newSkill, 'technical');
    setNewSkill('');
  };

  return (
    <div className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-level">
              <input
                type="range"
                min="0"
                max="100"
                value={skill.level}
                onChange={(e) => onSkillLevelChange(index, parseInt(e.target.value), 'technical')}
              />
              <div className="skill-level-bar" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="add-skill-form">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Enter new technical skill"
        />
        <button onClick={handleAddSkill}>+</button>
      </div>
    </div>
  );
};

export default TechnicalSkills;
