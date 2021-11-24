import config from './config.js'

const options = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    body: null
}

const error_default = {
    status_code: 500,
    next: false,
    message: 'Não foi possivel acessar api'
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
    options.body = obj_to_url(data)
    try {
        let res = await fetch(`${base}${path}`, options)
        let status_code = res.status
        return await res.json()
    } catch (error) {
        return error_default
    }
}

async function get(path, data = {}) {
    let base = config.path
    try {
        let res = await fetch(`${base}${path}?${obj_to_url(data)}`)
        let res_in_json = await res.json()
        return res_in_json
    } catch (error) {
        return error_default
    }
}

export default {
    post,
    get
}