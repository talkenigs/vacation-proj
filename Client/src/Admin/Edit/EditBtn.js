import React from 'react'
import { FaEdit } from "react-icons/fa"

function EditBtn(props) {

    const handleEdit = () => {
        props.setIsEdit(true)
    }
    return (
        <>
            <p className="vac-edit">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit()}
                    >
                      <FaEdit />
                    </button>
                  </p>
        </>
    )
}

export default EditBtn
