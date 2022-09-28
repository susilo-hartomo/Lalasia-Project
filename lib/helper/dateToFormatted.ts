const dateToFormatted = (dateString: string): string => {
    const date = new Date(dateString)

    const formattedDate =
        date.toLocaleDateString('en-US', {
            weekday: 'long',
        }) +
        ', ' +
        date.getDay() +
        ' ' +
        date.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
        })

    return formattedDate
}

export default dateToFormatted
