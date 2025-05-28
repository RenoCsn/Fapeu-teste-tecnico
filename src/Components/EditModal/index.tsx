import { Flex, Form, Input, Modal, Typography } from 'antd'
import type { PostType } from '../../Utils/types'

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
    const onFinish = (e: PostType) => {
        onConfirm()
        // onConfirm(e)
        form.resetFields()
    }

    const [form] = Form.useForm()
    const { Text } = Typography

    return (
        <Modal
            title="Editar post"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={onConfirm}
            onCancel={onCancel}
            okText={confirmText}
            cancelText={cancelText}
            okButtonProps={{ htmlType: 'submit' }}
        >
            <Flex vertical gap={16}>
                <Form form={form} onFinish={onFinish}>
                    <Flex vertical gap={4}>
                        <Text strong style={{ fontSize: 12 }}>
                            Titulo *
                        </Text>
                        <Form.Item
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor insira um Título.',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Digite o novo titulo da postagem"
                                maxLength={30}
                            />
                        </Form.Item>
                    </Flex>
                    <Flex vertical gap={4}>
                        <Text strong style={{ fontSize: 12 }}>
                            Postagem *
                        </Text>
                        <Form.Item
                            name="body"
                            rules={[
                                {
                                    required: true,
                                    message: 'Digite o texto da nova postagem.',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Digite o conteúdo da postagem"
                                maxLength={30}
                            />
                        </Form.Item>
                    </Flex>
                </Form>
            </Flex>
        </Modal>
    )
}

export default EditModal
