/* eslint-disable */

export const sortByKey = (input, key = 'name', k = formatKey(key)) =>
    input.sort((a, b) =>
        (a[k] < b[k])
            ? -1
            : 1
    )

const formatKey = input => input.replace(/\s/g, '_')
