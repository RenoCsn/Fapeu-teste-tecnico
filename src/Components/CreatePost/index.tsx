import { Button, Card, Flex, Form, Input, Typography } from "antd";
import type { PostType } from "../../Utils/types";

interface CreatePostProps {
	onSubmit: (newPost: PostType) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({onSubmit}) => {
	const isFilled: boolean = true;
	const { Text } = Typography;

	const [form] = Form.useForm();

	const onFinish = (e: PostType) => {
		onSubmit(e)
		form.resetFields();	
	}

	return (
		<Flex vertical style={{ width: "100%", maxWidth: "1400px" }}>
			<Card title="Criar um novo post" variant="borderless">
				<Flex vertical gap={16}>
					<Form form={form} onFinish={onFinish}>
						<Flex vertical gap={4}>
							<Text strong style={{ fontSize: 12 }}>
								Titulo *
							</Text>
							<Form.Item
								name="title"
								rules={[
									{ required: true, message: "Por favor insira um Título." },
								]}
							>
								<Input
									placeholder="Digite titulo da postagem"
									disabled={!isFilled}
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
									{ required: true, message: "Digite o texto da nova postagem." },
								]}
							>
							<Input
								placeholder="Digite o conteúdo da postagem"
								disabled={!isFilled}
								maxLength={30}
							/>
							</Form.Item>
						</Flex>
						<Form.Item label={null}>
						<Button
							disabled={!isFilled}
							style={{ maxWidth: "150px" }}
							htmlType="submit"
						>
							Criar postagem
						</Button>
						</Form.Item>
					</Form>
				</Flex>
			</Card>
		</Flex>
	);
};

export default CreatePost;
