import * as React from 'react';
import {Dropdown, IDropdownOption} from 'office-ui-fabric-react/lib/Dropdown';
import {DatePicker, DayOfWeek} from 'office-ui-fabric-react/lib/DatePicker';

const DayPickerStrings = {
  months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],

  shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],

  days: ['日', '一', '二', '三', '四', '五', '六'],

  shortDays: ['日', '一', '二', '三', '四', '五', '六'],

  goToToday: '跳轉到今天'
};

export default class DatePickerWithInputField extends React.Component {
  state = {
      firstDayOfWeek: DayOfWeek.Sunday
  };

  formatDate = (date) => moment(date).format('YYYY/MM/DD')
  render() {
    let {firstDayOfWeek} = this.state;

    return (
      <DatePicker
        strings={DayPickerStrings}
        placeholder='選擇您的生日...'
        formatDate={this.formatDate}
        value={this.props.value}
        onSelectDate={this.props.onSelectDate}/>
    );
  }

}