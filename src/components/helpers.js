/* eslint-disable */

export const sortByKey = (input, key = 'name', k = formatKey(key)) =>
    input.sort((a, b) => {
        if (a[k] < b[k]) return -1
        if (a[k] > b[k]) return 1
    })

const formatKey = input => input.replace(/\s/g, '_')
