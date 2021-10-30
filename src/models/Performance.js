const url = 'https://tom-pylinski-website-api.herokuapp.com/api/v1/performances';

class PerformanceModel {
    static getAllPerformances = () => {
        return fetch(url)
            .then((response) => response.json())
    }

    static updatePerformance = (performance, id) => {
        return fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(performance)
        })
            .then((response) => response.json())
    }

    static createPerformance = (performance) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(performance)
        })
            .then((response) => response.json())
    }

    static deletePerformance = (performanceId) => {
        return fetch (`${url}/${performanceId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
    }
}

export default PerformanceModel;