import axios from 'axios'
import papa from 'papaparse'

export default {
    notebooks: async ()=>{
        return axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vTHjpQ7HxhS9KeucylXD1eSm4kPy0WKccns8pF8U0tYggQoKFn77t36TmPb6fY2QuUjtNZSMVrMFVXT/pub?gid=0&single=true&output=csv',
        {responseType: 'blob'})
        .then(response => {
            return new Promise((resolve, reject) => {
                papa.parse(response.data, {
                    header: true, //primer elemento de la tabla es el header,
                    complete: results =>{
                        console.log(results.data);
                        return resolve(results.data);
                    },
                    error: error =>{
                        return reject(error.message);
                    }

                })
            })
        })
    },
    monitores: async ()=>{
        return axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vTHjpQ7HxhS9KeucylXD1eSm4kPy0WKccns8pF8U0tYggQoKFn77t36TmPb6fY2QuUjtNZSMVrMFVXT/pub?gid=480272228&single=true&output=csv',
        {responseType: 'blob'})
        .then(response => {
            return new Promise((resolve, reject) => {
                papa.parse(response.data, {
                    header: true, //primer elemento de la tabla es el header,
                    complete: results =>{
                        console.log(results.data);
                        return resolve(results.data);
                    },
                    error: error =>{
                        return reject(error.message);
                    }

                })
            })
        })
    },
    pcs: async ()=>{
        return axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vTHjpQ7HxhS9KeucylXD1eSm4kPy0WKccns8pF8U0tYggQoKFn77t36TmPb6fY2QuUjtNZSMVrMFVXT/pub?gid=898874980&single=true&output=csv',
        {responseType: 'blob'})
        .then(response => {
            return new Promise((resolve, reject) => {
                papa.parse(response.data, {
                    header: true, //primer elemento de la tabla es el header,
                    complete: results =>{
                        console.log(results.data);
                        return resolve(results.data);
                    },
                    error: error =>{
                        return reject(error.message);
                    }

                })
            })
        })
    },
    accesorios: async ()=>{
        return axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vTHjpQ7HxhS9KeucylXD1eSm4kPy0WKccns8pF8U0tYggQoKFn77t36TmPb6fY2QuUjtNZSMVrMFVXT/pub?gid=1693403612&single=true&output=csv',
        {responseType: 'blob'})
        .then(response => {
            return new Promise((resolve, reject) => {
                papa.parse(response.data, {
                    header: true, //primer elemento de la tabla es el header,
                    complete: results =>{
                        console.log(results.data);
                        return resolve(results.data);
                    },
                    error: error =>{
                        return reject(error.message);
                    }

                })
            })
        })
    },
    destacados: async ()=>{
        return axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vTHjpQ7HxhS9KeucylXD1eSm4kPy0WKccns8pF8U0tYggQoKFn77t36TmPb6fY2QuUjtNZSMVrMFVXT/pub?gid=392061906&single=true&output=csv',
        {responseType: 'blob'})
        .then(response => {
            return new Promise((resolve, reject) => {
                papa.parse(response.data, {
                    header: true, //primer elemento de la tabla es el header,
                    complete: results =>{
                        console.log(results.data);
                        return resolve(results.data);
                    },
                    error: error =>{
                        return reject(error.message);
                    }

                })
            })
        })
    },
}