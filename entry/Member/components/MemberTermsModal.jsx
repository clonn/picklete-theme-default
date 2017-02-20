import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import InnerHtml from 'generic/components/InnerHtml'

import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog'
import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button'

import { login } from 'Member/actions/MemberActions'
import { changeModalActive} from 'App/actions/ModalActions'
import { addNotification } from 'App/actions/NotificationActions'

import 'Member/styles/MemberTermsModal.scss'

class MemberTermsModal extends Component {
  closeModal = () => this.props.dispatch(changeModalActive('terms', false))
  render() {
    return (
      <div>
        {this.props.modalActive && (
          <Dialog
            className="member-terms-modal"
            isOpen={this.props.modalActive}
            type={DialogType.close}
            title="會員服務條款"
            isBlocking={true}
            onDismiss={this.closeModal}>
            <div className="terms-content">
              <InnerHtml html={this.props.terms}/>
            </div>
            <DialogFooter>
            <Button onClick={this.closeModal}>確認</Button>
          </DialogFooter>
        </Dialog>
        )}
      </div>
    )
  }
}

export default connect(state => ({
  modalActive: state.modals.terms,
  terms: state.company.data.terms
}))(MemberTermsModal);
