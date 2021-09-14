const url = 'http://localhost:4000/api/v1/performances';

class PerformanceModel {
    static getAllPerformances = () => {
        return fetch(url)
            .then((response) => response.json())
    }
}

export default PerformanceModel;