import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface ISearchBoxProps {
  placeholder: string;
  ariaLabel: string;
  disabled: boolean;
  onSearch: (showName: string) => void;
}

export const SearchBox: React.FC<ISearchBoxProps> = (props: ISearchBoxProps) => {
  const [searchString, setSearchString] = useState('');

  return (
        <form
          className="form-searchbox"
          onSubmit={(e) => {
            e.preventDefault();
            props.onSearch(searchString);
          }}
        > 
          <div className="input-group mb-3">
            <input
              style={{width: '600px'}}
              disabled={props.disabled}
              type="text"
              value={searchString}
              onChange={(evt) => setSearchString(evt.target.value)}
              className="form-control"
              placeholder={props.placeholder}
              aria-label= {props.ariaLabel}
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                disabled={props.disabled}
                id="button-addon2"
                onClick={(e) => { props.onSearch(searchString)}}
              >
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </form>

  );
}

