/**
* @name: Model
* @description：Model
* @author: wkk
* @date: 2023-03-09
*/
import React, { useState, PropsWithChildren } from 'react';
import type { FC } from 'react';
import { Modal } from 'antd';

interface Props {
  title: string
  isOpen?: boolean
  mask?: boolean
  updateIsOpen?: Function
}
const Title = (props) => <div className="text-3xl my-7">{props.title}</div>
const MyModel: FC<PropsWithChildren & Props> = (props) => {
  const [modalOpen, setModalOpen] = useState(true)

  const okClick = (e) => {
    // e.stopPropagation()
    setModalOpen(false)
    props.updateIsOpen(false)
  }
  const cancelClick = (e) => {
    // e.stopPropagation()
    setModalOpen(false)
    props.updateIsOpen(false)
  }
  const modal = Modal.useModal()
  return <>
    <div onClick={e => e.stopPropagation()}>
      <Modal
        className="myModel"
        centered
        open={props.isOpen ?? modalOpen}
        width={600}
        mask={props.mask ?? false}
        keyboard={false}
        maskClosable={false}
        onOk={okClick}
        onCancel={cancelClick}
        footer={null}
      >
        <div className="px-14">
          <Title title={props.title} />
          <div>{props.children}</div>
        </div>
      </Modal>
    </div>
  </>
}

export default MyModel
