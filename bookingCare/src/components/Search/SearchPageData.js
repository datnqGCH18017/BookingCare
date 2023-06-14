import React from 'react';
import './SearchPageData.css'

const SearchPageData = ({ data }) => {
  return (
    <div className=" results-list ">
      <div className="row px-5">
        <div className="col-md-10 py-1">
          {data.items.map((item) => (
            <div key={item.displayLink}>
              <p className="link-heading">
                <a
                  href={item.formattedUrl}
                  className="link-text"
                  dangerouslySetInnerHTML={{ __html: item.htmlTitle }}
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPageData;
