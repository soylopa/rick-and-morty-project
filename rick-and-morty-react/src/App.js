import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
         <header>
        <div className="home">
            <h1>
                Rick and Morty <span id="home-id">NFT</span>
            </h1>
        </div>
        <div className="nav-bar">
            <a href="">
                Characters
            </a>
            <a href="">
                Episodes
            </a>
            <a href="">
                Locations
            </a>
            <a href="">
                Chart-icon
            </a>
        </div>
    </header>
    <section>
        <div className="title">
            <h1>
                Title

            </h1>
        </div>
        <div id="flex-row">
            <div className="filter">
                <h2>
                    Filters
                </h2>
                <a href="">clear filters</a>

            </div>
            <div className="search">
                <input type="text" />
                <button>search</button>
            </div>
        </div>
    </section>
    <main>
        <div className="filter-panel">
            <h3>
                Status
            </h3>
 
                <a>Alive</a>
                <a>Dead</a>
                <a>Unknow</a>
            <h3>
                Species
            </h3>
                <a>Human</a>
                <a>Droid</a>
                <a>Alien</a>
                <a>Unknow</a>
            <h3>
                Gender
            </h3>
                <a>Female</a>
                <a>Male</a>
                <a>Fluid</a>
                <a>Unknow</a>
        </div>
        <div className="data">
            <div className="card" alt="card-one">
                <img src="" alt="" />
                <div className="card-name">
                    <h4>
                        card-name
                    </h4>
                    <p>Locations</p>

                </div>
                <div className="status">
                    status

                </div>
                <div>
                    <button>add to cart</button>
                </div>
            </div>
            <div className="card" alt="card-two">
                <img src="" alt="" />
                <div className="card-name">
                    <h4>
                        card-name
                    </h4>
                    <p>Locations</p>

                </div>
                <div className="status">
                    status

                </div>
                <div>
                    <button>add to cart</button>
                </div>
            </div>
            <div className="card" alt="card-three">
                <img src="" alt="" />
                <div className="card-name">
                    <h4>
                        card-name
                    </h4>
                    <p>Locations</p>
                </div>
                <div className="status">
                    status

                </div>
                <div>
                    <button>add to cart</button>
                </div>
            </div>
            <div className="card" alt="card-four">
                <img src="" alt="" />
                <div className="card-name">
                    <h4>
                        card-name
                    </h4>
                    <p>Locations</p>

                </div>
                <div className="status">
                    status
                </div>
                <div>
                    <button>add to cart</button>
                </div>
            </div>
        </div>
    </main>
    </div>
  );
}

export default App;
