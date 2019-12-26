import React, {useState, useEffect} from 'react';
import { searchShow, IShow } from '@rtrocca/search-show';
import { SearchBox } from './components/SearchBox';
import { ShowList } from './components/ShowList';

import './App.css';

const App: React.FC = () => {
  const [shows, setShows] = useState([] as IShow[]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchString, setSearchString] = useState('');

  useEffect( () => {
    if (searchString) {
      setIsLoading(true);
      searchShow(searchString).then( (result) => {
        if (result) {
          setShows(result);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
  }, [searchString]);

  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="h4">TV Show Search</h1>
            <SearchBox 
              onSearch={setSearchString}
              disabled={isLoading}
              placeholder="Enter TV Show's Name"
              ariaLabel="Enter TV Show's Name"
            >
            </SearchBox>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <ShowList shows={shows} isLoading={isLoading}/>
          </div>
        </div>
    </div>
  );
}

export default App;
