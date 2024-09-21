import moment from "moment"

export function formatTimestamp(timestamp: number): string {
    const now = moment()
    const timestampMoment = moment(timestamp)
    const elapsedTime = now.diff(timestampMoment, 'minutes')
  
    if (elapsedTime < 1) {
      return 'Just now'
    } else if (elapsedTime < 60) {
      return `${elapsedTime}m ago`
    } else if (elapsedTime < 1440) {
      return `${Math.floor(elapsedTime / 60)}h ago`
    } else {
      return timestampMoment.format('MMM D')
    }
  }
  export function formatTimestampForum(timestamp: number): string {
    const now = moment();
    const timestampMoment = moment(timestamp);
    const elapsedTime = now.diff(timestampMoment, 'minutes');
  
    if (elapsedTime < 1) {
      return `Just now - ${timestampMoment.format('h:mm A')}`;
    } else if (elapsedTime < 60) {
      return `${elapsedTime}m ago - ${timestampMoment.format('h:mm A')}`;
    } else if (elapsedTime < 1440) {
      return `${Math.floor(elapsedTime / 60)}h ago - ${timestampMoment.format('h:mm A')}`;
    } else {
      return timestampMoment.format('MMM D, YYYY - h:mm A');
    }
}

  export const formatDate = (unixTimestamp: number): string => {
    const date = moment(unixTimestamp, 'x').fromNow()
  
    return date
  }