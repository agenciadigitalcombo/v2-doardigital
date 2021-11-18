import config from './config.js'

const options = {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    body: null
}

const options_get = {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    body: null
}

const token = localStorage.getItem('token')

if(token) {
    options.headers['Authorization'] = `Bearer ${token}`
    options_get.headers['Authorization'] = `Bearer ${token}`
}

function obj_to_url(obj, next_level = null) {
    var query = [];
    for (var key in obj) {
        switch (typeof obj[key]) {
            case 'string':
            case 'number':
                if (next_level != null) {
                    query.push(`${next_level}[${key}]=${obj[key]}&`)
                } else {
                    query.push(`${key}=${obj[key]}&`)
                }
                break
            case 'object':
                query.push(obj_to_url(obj[key], key))
        }
    }
    return query.join('');
}

async function post(path, data) {
    let base = config.path
    options.body = JSON.stringify(data)
    try {
        let res = await fetch(`${base}${path}`, options)
        let status_code = res.status
        let res_in_json = await res.json()
        return { ...res_in_json, status_code }
    } catch (error) {
        return {
            status_code: 500,
            next: false,
            message: 'erro catastrófico'
        }
    }
}

async function get(path, data = {}) {
    let base = config.path
    try {
        let res = await fetch(`${base}${path}?${obj_to_url(data)}`, options_get)
        let res_in_json = await res.json()
        return res_in_json
    } catch (error) {
        return {
            status_code: 500,
            next: false,
            message: 'erro catastrófico'
        }
    }
}

export default {
    post,
    get
}