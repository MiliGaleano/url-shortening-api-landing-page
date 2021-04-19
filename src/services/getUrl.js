export function GetShortenUrl(userUrl) {
    const url = `https://api.shrtco.de/v2/shorten?url=${userUrl}`
    return fetch(url)
     .then(res => res.json())
     .then(data => data)
     .catch(err => err)
}