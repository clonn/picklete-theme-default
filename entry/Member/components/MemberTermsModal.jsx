import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import InnerHtml from 'generic/components/InnerHtml'

import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog'
import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button'

import { login } from 'Member/actions/MemberActions'
import { changeModalActive} from 'App/actions/ModalActions'
import { addNotification } from 'App/actions/NotificationActions'

import 'Member/styles/MemberTermsPrivacyModal.scss'

class MemberTermsModal extends Component {
  closeModal = () => this.props.dispatch(changeModalActive('terms', false))
  render() {
    return (
      <Dialog
        isOpen={this.props.modalActive}
        type={DialogType.close}
        title="會員服務條款"
        onDismiss={this.closeModal}
        className="register-text-modal">
        <div className="content">
          <InnerHtml html={this.props.terms}/>
        </div>
        <DialogFooter>
          <Button onClick={this.closeModal}>確認</Button>
        </DialogFooter>
      </Dialog>
    )
  }
}

export default connect(state => ({
  modalActive: state.modals.terms,
  terms: state.company.data.terms
}))(MemberTermsModal);
