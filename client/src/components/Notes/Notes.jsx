import React, { useState } from 'react';
import notes1 from "../../Notes/notes1.pdf"
import notes2 from '../../Notes/notes2.pdf';
import notes3 from '../../Notes/notes3.pdf';
import './Notes.css';

const notesArray = [
  { name: 'React.JS Fundamentals', desc: 'React is a good language' ,  file: notes1 },

{ name: 'Introduction to Python Programming' , desc: 'Learn the fundamentals of Python programming and start building your own programs' , file: notes2},
{ name: 'Machine Learning Fundamentals'  , desc: 'Understand the basic concepts of machine learning and how to apply them in practice', file: notes2},
{ name: 'Web Development with React'  , desc: 'Learn how to build dynamic web applications using the React library', file: notes2},
{ name: 'iOS App Development'  , desc: 'Build your own iOS apps from scratch using Swift and Xcode', file: notes2},
{ name: 'Data Science with R'  , desc: 'Discover how to use R to analyze and visualize data for business insights', file: notes2},
{ name: 'Cybersecurity Fundamentals'  , desc: 'Get an introduction to cybersecurity, including network security and risk management', file: notes2},
{ name: 'Digital Marketing' , desc: 'Learn how to create and execute successful digital marketing campaigns across various platforms', file: notes2},
{ name: 'Product Management'  , desc: 'Master the skills needed to lead product development and launch successful products', file: notes2},
{ name: 'Creative Writing' , desc: 'Develop your writing skills in various genres, from fiction to non-fiction to poetry', file: notes2},
{ name: 'Graphic Design Fundamentals'  , desc: 'Learn the basics of graphic design, including layout, typography, and color theory', file: notes2},
{ name: 'Public Speaking'  , desc: 'Develop your public speaking skills and learn how to communicate effectively in various settings', file: notes2},
{ name: 'Financial Analysis and Valuation'  , desc: 'Analyze financial statements and value businesses using financial modeling techniques', file: notes2},
{ name: 'Human Resources Management'  , desc: 'Learn about the key concepts and best practices in managing human resources in organizations', file: notes2},
{ name: 'Game Development with Unity'  , desc: 'Create your own 2D and 3D games using the Unity game engine', file: notes2},
{ name: 'Project Management'  , desc: 'Master the skills needed to plan, execute, and manage projects effectively in various industries', file: notes2},

  
    

];

const PdfViewer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage] = useState(12);

  const handleNoteOpen = (index) => {
    const pdfFile = notesArray[index].file;
    window.open(pdfFile);
  };

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notesArray.slice(indexOfFirstNote, indexOfLastNote);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(notesArray.length / notesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pdf-viewer-container">
      <h2>My Notes</h2>
      <div className="card-deck">
        {currentNotes.map((note, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h5 className="card-title">{note.name}</h5>
              <p className="card-text">{note.desc}</p>
              <button className="btn btn-primary" onClick={() => handleNoteOpen(indexOfFirstNote + index)}>Open Note</button>
            </div>
          </div>
        ))}
      </div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className={currentPage === number ? 'page-item active' : 'page-item'}>
              <button className="page-link" onClick={() => setCurrentPage(number)}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PdfViewer;
