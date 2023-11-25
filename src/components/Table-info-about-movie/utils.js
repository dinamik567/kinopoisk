export function getStirngValues(array) {

    const result = array?.reduce((acc, country) => {
        if (acc.length) {
            return acc + `, ${country.name}`
        }

        return acc + country.name}, '')
    return result
}
