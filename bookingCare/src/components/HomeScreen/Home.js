import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from './Header'
// import { GoogleSearch } from '';

const Home = ({ setSearch}) => {
  // const list = data
  //controlling form
  const [term, setTerm] = useState('');

  // clear term by clicking on cross
  const clearTerm = () => {
    setTerm('');
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^[a-zA-Z0-9].*/.test(term) ||
      /^[a-zA-Z0-9]+[" "]/.test(term) ||
      /^[" "]+[a-zA-Z0-9]/.test(term)
    ) {
      setSearch(term.trim());
    }
  };

  const handleSearch = () => {
    if (
      /^[a-zA-Z0-9].*/.test(term) ||
      /^[a-zA-Z0-9]+[" "]/.test(term) ||
      /^[" "]+[a-zA-Z0-9]/.test(term)
    ) {
      setSearch(term.trim());
    }
  };


  return (
    <>
    <Header/>
      <div id="slider">
        <div className="row">
          <div className="col-md-12 home-screen align-items-center justify-content-center">
              <div className='nameBanner'>
                <span id='nameBanner01'>NỀN TẢNG Y TẾ</span>
                <p id='nameBanner02'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</p>
              </div>
              <div className="search-box justify-content-between align-items-center">
                <i className="fa fa-search"></i>
                <form className="form-search" onSubmit={(e) => handleSubmit(e)}>
                  <input
                    type="text"
                    name="term"
                    id="term"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder='Tìm bệnh viện'
                  />
                </form>
                {term ? (
                  <i className="fa fa-close" onClick={() => clearTerm()}></i>
                ) : (
                  ''
                )}
                <input
                type="button"
                className="btn"
                value="Search"
                onClick={() => handleSearch()}
              />
              </div>
              {/* <SearchPageData /> */}
              {/* {list.items.map((item) => (
                      <div key={item.displayLink}>
                        <p className="link-heading">
                          <a
                            href={item.formattedUrl}
                            className="link-text"
                            dangerouslySetInnerHTML={{ __html: item.htmlTitle }}
                          />
                        </p>
                      </div>
                    ))} */}
              

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
