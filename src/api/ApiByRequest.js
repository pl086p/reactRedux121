export const REQUEST_LOGS_URL  = 'http://localhost:8080/logs';

// fetch("/login", {
//   method: "POST",
//   body: form
// })

class ApiByRequest {

  // fetch logs
  static fetchLogsAPI(dispatch, receiveLogs) {
    return fetch(REQUEST_LOGS_URL)
      .then(response => response.json())
      .then(json => dispatch(receiveLogs(json)));
  }

  // fetch log by logID
  static fetchLogAPI(logID, dispatch, receiveLog) {
    return fetch(REQUEST_LOGS_URL + '/' + String(logID))
      .then(response => response.json())
      .then(json => dispatch(receiveLog(logID, json)));
  }



  static updateCat(cat) {
    const request = new Request(`http://localhost:5000/api/v1/cats/${cat.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({cat: cat})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createCat(cat) {
    const request = new Request('http://localhost:5000/api/v1/cats/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({cat: cat})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteCat(cat) {
    const request = new Request(`http://localhost:5000/api/v1/cats/${cat.id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ApiByRequest;
