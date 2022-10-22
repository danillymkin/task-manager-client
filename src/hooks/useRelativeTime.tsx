import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import isYesterday from 'dayjs/plugin/isYesterday'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(isToday)
dayjs.extend(isTomorrow)
dayjs.extend(isYesterday)
dayjs.extend(relativeTime)

export const useRelativeTime = (
  date: string | undefined,
): [string, boolean] => {
  if (dayjs(date).isYesterday()) {
    return ['Вчера', true]
  }

  if (dayjs(date).isToday()) {
    return ['Сегодня', false]
  }

  if (dayjs(date).isTomorrow()) {
    return ['Завтра', false]
  }

  return [dayjs(date).locale('ru').fromNow(), dayjs(date).isBefore(dayjs())]
}
