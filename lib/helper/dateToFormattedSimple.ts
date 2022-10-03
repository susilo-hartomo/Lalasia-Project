const dateToFormatted = (dateString: string): string => {
  const date = new Date(dateString)

  const formattedDate =
    date
      .toLocaleDateString('en-US', {
        weekday: 'long',
      })
      .slice(0, 3) +
    ', ' +
    date.getDay() +
    ' ' +
    date
      .toLocaleDateString('en-US', {
        month: 'long',
      })
      .slice(0, 3) +
    ' ' +
    date.toLocaleDateString('en-US', {
      year: 'numeric',
    })

  return formattedDate
}

export default dateToFormatted
