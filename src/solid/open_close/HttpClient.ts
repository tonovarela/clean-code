//import axios from 'axios';
export class HttpClient {
    constructor() {
        console.log('HttpClient initialized');
    }
    async get(url: string) {     
        console.log('HttpClient get method called');
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return { data, status: response.status };
  
    }

}

