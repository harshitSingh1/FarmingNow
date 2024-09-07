import React, { useState} from 'react';
import pestsData from '../data/pestsData';
import '../styles/PestControl.css';
import { FaSearch } from 'react-icons/fa';

const PestControl = () => {
    window.scrollTo(0, 0);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPest, setSelectedPest] = useState(null);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlePestClick = (pest) => {
        setSelectedPest(pest);
    };

    const handleCloseModal = () => {
        setSelectedPest(null);
    };

    const filteredPests = pestsData.filter(pest =>
        pest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleViewMoreImages = () => {
        window.open(`https://www.google.com/search?q=${selectedPest.name}+pest+images`, '_blank');
    };

    return (
        <div className="pest-control">
            <h1 className="heading">Pest <span>Control</span></h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for a pest..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <FaSearch className="search-icon" />
            </div>

            <div className="pests-list">
                {filteredPests.map(pest => (
                    <div key={pest.id} className="pest-box" onClick={() => handlePestClick(pest)}>
                        <img src={pest.image} alt={pest.name} className="pest-image" />
                        <div className="pest-info">
                            <h3 className="pest-name">{pest.name}</h3>
                            <p className="pest-description">{pest.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPest && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={handleCloseModal}>&times;</button>
                        <div className="modal-body">
                            <div className="modal-text">
                                <h2>{selectedPest.name}</h2>
                                <h4>Affects the following crops:</h4>
                                <ul>
                                    {selectedPest.cropsAffected.map(crop => (
                                        <li key={crop}>{crop}</li>
                                    ))}
                                </ul>
                                <h4>Pesticides to Use:</h4>
                                <ul>
                                    {selectedPest.pesticides.map(pesticide => (
                                        <li key={pesticide}>{pesticide}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-right">
                                <img src={selectedPest.image} alt={selectedPest.name} className="modal-image" />
                                <button className="view-more-button" onClick={handleViewMoreImages}>
                                    View More Images
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PestControl;
