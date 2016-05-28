import moment from 'moment';

export class DateFormatValueConverter {
  toView(value, format = 'DD.MM.YYYY') {
    if (value === null)
      return '';
    return moment(value).format(format);
  }

  fromView(value, format = 'DD.MM.YYYY') {
    if (value === '')
      return null;
    return moment(value, format).toDate();
  }
}
