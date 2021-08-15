const SearchResults = (props) => {
  return (
    <div>
      <ul>
        {props.results.map((item) => (
          <li>
            <li>Name: {item.name}</li>
            <li>
              Comics: {item.comics.available}{" "}
              <ul>
                {item.comics.items.map((item) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </li>
            <li>
              Series: {item.series.available}
              <ul>
                {item.series.items.map((item) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </li>
            <li>
              Events: {item.events.available}
              <ul>
                {item.events.items.map((item) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
