import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  // items are allMovies array legnth is 9
  // default value pageNumber is 1
  // defualt value pageSize is 4  
  
  // startIndex = (1 - 1) * 4 = 0
  // startIndex = (2 - 1) * 4 = 4
  // startIndex = (3 - 1) * 4 = 8
  const startIndex = (pageNumber - 1) * pageSize;
 
  return _(items) // convert items array to a lodash wrapper
    .slice(startIndex) // start cut 0, 4, 8
    .take(pageSize) // end cut 4
    .value(); // convert lodsah wrapper object to a regular array
}
