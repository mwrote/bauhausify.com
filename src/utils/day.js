import dayjs from 'dayjs'

const about = date => {
  const today = dayjs()
  const dayDiff = today.diff(date, 'day')
  const weekDiff = today.diff(date, 'week')
  const monthDiff = today.diff(date, 'month')
  const yearDiff = today.diff(date, 'year')

  if (yearDiff > 0) {
    return `${yearDiff}年前`
  }
  if (monthDiff > 0) {
    return `${monthDiff}ヶ月前`
  }
  if (dayDiff === 0) {
    return `今日`
  }
  return `${dayDiff}日前`
}

export default {
  about,
}
