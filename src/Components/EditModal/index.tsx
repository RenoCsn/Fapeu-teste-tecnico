import { Modal } from 'antd'

interface EditModalProps {
    isModalOpen: boolean
    onConfirm: () => void
    onCancel: () => void
    confirmText?: string
    cancelText?: string
}

const EditModal: React.FC<EditModalProps> = ({
    isModalOpen,
    onConfirm,
    onCancel,
    confirmText = 'Confirmar',
    cancelText = 'Cancelar',
}) => {
    return (
        <Modal
            title="Basic Modal"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={onConfirm}
            onCancel={onCancel}
            okText={confirmText}
            cancelText={cancelText}
        >
            <div>Modal</div>
        </Modal>
    )
}

export default EditModal
