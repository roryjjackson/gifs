import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Paginate from '../Paginate/Paginate';
import './Gif.css';
// import SelectedGif from '../SelectedGif/SelectedGif';


const RenderSelectedGif = ({ selectedGif }) => {
  return (
    <div className="selected-gif">
      {selectedGif && <img src={selectedGif.images.original.url} alt=""></img>}
    </div>
  );
}


const Gif = (props) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const [selectedGif, setSelectedGif] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const results = await axios('https://api.giphy.com/v1/gifs/trending', {
          params: {
            api_key: "6Y6BEyJbuwI8kVs5ENaDrTSlSq7TFVvo",
            limit: 50
          }
        });
        console.log(results)
        setData(results.data.data)
      } catch(err) {
        setIsError(true)
        console.log(err)
        setTimeout(() => {
          setIsError(false)
        }, 5000);
      }

      setIsLoading(false)
    }
    fetchData()
  }, []);

  const handleClick = (instance) => {
    setSelectedGif(instance)
  }


  const renderGif = () => {
    if (isLoading) {
      return < Loader />
    }
    return currentItems.map(el => {
      return (
        <div className="gif" key={el.id}>
          <img onClick={() => handleClick(el)} key={el.id} src={el.images.fixed_height.url} alt=""></img>
        </div>
      )
    })
  }

  const renderError = () => {
    if (isError) {
      return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          an error message
        </div>
      )
    }
  }

  const handleSearchChange = event => {
    setSearch(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setIsError(false)
    setIsLoading(true)

    try {
      const results = await axios('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: "6Y6BEyJbuwI8kVs5ENaDrTSlSq7TFVvo",
          q: search,
          limit: 50
        }
      });

      setData(results.data.data)

    } catch(err) {
        setIsError(true)
        console.log(err)
        setTimeout(() => {
          setIsError(false)
        }, 5000);
    }

    setIsLoading(false)
  }

  const pageSelected = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

    return(
      <div>
        {renderError()}
        <div className='searchbar-container'>
          <form className="searchbar">
            <input type="text"
                  placeholder='Search'
                  onChange={handleSearchChange}
                  value={search}
                  >
            </input>
            <button onClick={handleSubmit} type="submit">GO</button>
          </form>
        </div>
        <div className='paginate-container'>
          < Paginate currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    totalItems={data.length}
                    pageSelected={pageSelected}
                      />
        </div>
        <div className="gif-container">
          <div>
            <h2>Selected Gif</h2>
            <RenderSelectedGif selectedGif={selectedGif}/>
          </div>
          <div>
            <h2>Gif list</h2>
            <div className="gif-list">
              {renderGif()}
            </div>
          </div>
        </div>
      </div>
    )
};

export default Gif;
