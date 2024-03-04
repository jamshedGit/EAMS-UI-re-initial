import React, { useState, useEffect } from "react"
import { shallowEqual, useSelector } from "react-redux"
import { Modal } from "react-bootstrap"
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls"

export function RoleEditDialogHeader({ id }) {
  // Customers Redux state
  const { roleForEdit, actionsLoading } = useSelector(
    (state) => ({
      roleForEdit: state.roles.roleForEdit,
      actionsLoading: state.roles.actionsLoading,
    }),
    shallowEqual
  )

  const [title, setTitle] = useState("")
  // Title couting
  useEffect(() => {
    let _title = id ? "" : "Add New Role"
    if (roleForEdit && id) {
      _title = `Edit Role '${roleForEdit.name}'`
    }

    setTitle(_title)
    // eslint-disable-next-line
  }, [roleForEdit, actionsLoading])

  return (
    <>
      {actionsLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  )
}
