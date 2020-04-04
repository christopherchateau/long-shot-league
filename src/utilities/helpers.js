/* eslint-disable */

export const sumPoints = pts => pts.reduce((a, b) => a + b.points, 0)

export const sortByKey = (input, key = 'name', k = formatKey(key)) =>
    input.sort((a, b) =>
        (a[k] < b[k])
            ? -1
            : 1
    )

const formatKey = input => input.replace(/\s/g, '_')

export const formatApiData = (paths, data) =>
	data.reduce(
		(acc, d, i) => {
			d.error
				? acc.errors.push(d.error)
				: (acc[`${paths[i]}Data`] = sortByKey(d))

			return acc
		},
		{ errors: [] }
	)

