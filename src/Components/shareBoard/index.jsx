import { ShareAltOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import React, { useState } from 'react';

function ShareBoard(props) {
  const [displayModalShare, setDisplayModalShare] = useState(false)
  // const location = window.location.href
  const url = props.url
  const onCopyLink = (e) => {
    e.preventDefault()
    setDisplayModalShare(true)
  }

  const CopyCancel = () => {
    setDisplayModalShare(false)
  }

  const copylinkBoard = (e) => {
    e.preventDefault()
    const idboard = `input${url}`
    const copyText = document.getElementById(idboard);
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    // alert("Copied the text: " + copyText.value);
    message.success("copy link success!")
  }
  return (
    <div>
      <Modal
        title="copy link"
        visible={displayModalShare}
        onOk={CopyCancel}
        // confirmLoading={confirmLoading}
        onCancel={CopyCancel}
      >
        <div className="modalInfor">
          <input id={`input${url}`} value={url} style={{ width: "80%" }} />
          <span><Button type="primary" onClick={copylinkBoard}> Copy</Button></span>
        </div>
      </Modal>
      <div onClick={onCopyLink}><ShareAltOutlined /></div>
    </div>
  );
}

export default ShareBoard;