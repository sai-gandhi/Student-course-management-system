// src/components/SkillCategories.js
import React, { useState } from 'react';
import './SkillCategories.css';
import config from '../config';
function SkillCategories() {
  const [activeCategory, setActiveCategory] = useState('Web Development');

  const categories = [
    { name: 'Web Development', learners: '5.3k+' },
    { name: 'JavaScript', learners: '9.7k+' },
    { name: 'React JS', learners: '6k+' },
    { name: 'Angular', learners: '4k+' },
    { name: 'Java', learners: '10k+' },
    { name: 'Android Development', learners: '8k+' },
    { name: 'iOS Development', learners: '4k+' },
    { name: 'CSS', learners: '9k+' }
  ];

  return (
    <div className="skill-section">
      <h2>All the skills you need in one place</h2>
      <p>From critical skills to technical topics, we support your professional development.</p>
      
      <div className="category-tabs">
        {categories.map((category) => (
          <button 
            key={category.name} 
            className={activeCategory === category.name ? 'active-tab' : ''}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="cards-container">
        {categories.map((category) => (
          <div key={category.name} className="card">
            <h3>{category.name}</h3>
            <p>{category.learners} learners</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCategories;
