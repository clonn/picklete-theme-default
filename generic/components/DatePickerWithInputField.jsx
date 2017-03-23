import * as React from 'react';
import {Dropdown, IDropdownOption} from 'office-ui-fabric-react/lib/Dropdown';
import {DatePicker, DayOfWeek} from 'office-ui-fabric-react/lib/DatePicker';

class DatePickerWithInputField extends React.Component {
  formatDate = (date) => moment(date).format('YYYY/MM/DD')
  render() {
    return (
      <DatePicker
        strings={this.props.lang('DatePickerStrings')}
        placeholder={this.props.placeholder}
        formatDate={this.formatDate}
        value={this.props.value}
        onSelectDate={this.props.onSelectDate}
      />
    );
  }
}

export default translate('Member/MemberRegister')(DatePickerWithInputField)