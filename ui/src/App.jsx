import { useState, useEffect } from 'react';
import './App.css';
import init, { GameCatalog } from 'game-filter-core';

const GENRES = ["Action", "RPG", "Strategy", "Adventure", "Simulation"];

// Инициализация Wasm
await init();

function App() {
  const [catalog, setCatalog] = useState(null);
  const [visibleIds, setVisibleIds] = useState([]);
  const [gamesData, setGamesData] = useState([]);

  const [maxPrice, setMaxPrice] = useState(6000); 
  const [minRating, setMinRating] = useState(50);
  
  const [selectedGenres, setSelectedGenres] = useState(new Array(GENRES.length).fill(false));

  useEffect(() => {
    const newCatalog = new GameCatalog(100000);
    setCatalog(newCatalog);
    
    const ids = newCatalog.filter(6000, 0, 0);
    setVisibleIds(ids);
  }, []);

  const runFilter = (price, rating, genres) => {
    if (!catalog) return;

    let mask = 0;
    genres.forEach((isChecked, index) => {
      if (isChecked) mask |= (1 << index);
    });

    const start = performance.now();
    const ids = catalog.filter(price, rating, mask);
    const end = performance.now();
    
    console.log(`Filter time: ${(end - start).toFixed(2)}ms`);
    setVisibleIds(ids);
  };

  const toggleGenre = (index) => {
    const newGenres = [...selectedGenres];
    newGenres[index] = !newGenres[index];
    setSelectedGenres(newGenres);
    runFilter(maxPrice, minRating, newGenres);
  };

  useEffect(() => {
    if (!catalog || visibleIds.length === 0) {
      setGamesData([]);
      return;
    }
    const idsToShow = visibleIds.subarray(0, 50); 
    const data = [];
    for (let i = 0; i < idsToShow.length; i++) {
      const game = catalog.get_game_by_index(idsToShow[i]);
      data.push(game);
    }
    setGamesData(data);
  }, [visibleIds, catalog]);

  return (
    <div className="app">
      {/* HEADER */}
      <header className="global-header">
        <div className="header-content">
          <div className="logo">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '10px'}}>
               <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#66c0f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M2 17L12 22L22 17" stroke="#66c0f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M2 12L12 17L22 12" stroke="#66c0f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            WASM <span>STORE</span>
          </div>
          <nav className="nav-menu">
            <a href="#" className="nav-item active">STORE</a>
            <a href="#" className="nav-item">LIBRARY</a>
            <a href="#" className="nav-item">COMMUNITY</a>
            <a href="#" className="nav-item">SUPPORT</a>
          </nav>
          <div className="header-search">
            <input type="text" placeholder="search..." />
            <span style={{color: '#66c0f4'}}>🔍</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="main-container">
        
        {/* SIDEBAR */}
        <aside className="sidebar">
          
          <div className="filter-box">
            <span className="filter-header">Price</span>
            <span className="filter-value">
              Up to: {maxPrice === 6000 ? "Any" : `$${(maxPrice / 100).toFixed(2)}`}
            </span>
            <input 
              type="range" min="0" max="6000" step="100" 
              value={maxPrice} 
              onChange={(e) => {
                  const val = Number(e.target.value);
                  setMaxPrice(val);
                  runFilter(val, minRating, selectedGenres);
              }}
            />
          </div>

          <div className="filter-box">
            <span className="filter-header">Review Score</span>
            <span className="filter-value">Above: {minRating}%</span>
            <input 
              type="range" min="0" max="100" 
              value={minRating} 
              onChange={(e) => {
                const val = Number(e.target.value);
                setMinRating(val);
                runFilter(maxPrice, val, selectedGenres);
              }}
            />
          </div>

          <div className="filter-box">
            <span className="filter-header">Genres</span>
            <div style={{marginTop: '15px'}}>
              {GENRES.map((genre, index) => (
                <label key={genre} className="checkbox-row">
                  <input 
                    type="checkbox" 
                    checked={selectedGenres[index]} 
                    onChange={() => toggleGenre(index)}
                  />
                  {genre}
                </label>
              ))}
            </div>
          </div>

        </aside>

        {/* CONTENT */}
        <main className="content">
          <div className="status-bar">
            <span>Search Results</span>
            <span>Found: <strong>{visibleIds.length.toLocaleString()}</strong> titles</span>
          </div>

          <div className="game-list">
            {gamesData.map((game) => (
              <div key={game.id} className="game-row">
                <img 
                  className="game-poster" 
                  src={`https://picsum.photos/seed/${game.id}/180/75`} 
                  alt="cover" 
                />
                <div className="game-details">
                  <div className="game-title">Game Project #{game.id}</div>
                  <div className="game-meta">
                    {GENRES[game.category]} • Windows • VR Supported
                  </div>
                </div>
                <div className="game-stats">
                  <div className="rating">{game.rating}% Very Positive</div>
                  <div className="price">
                    ${(game.price / 100).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  )
}

export default App