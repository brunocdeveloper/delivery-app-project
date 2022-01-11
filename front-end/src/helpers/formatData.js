import moment from 'moment';

export default function formatData(data) {
  return moment(data).format('DD/MM/YYYY');
}
