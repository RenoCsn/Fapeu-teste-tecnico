import { Card, Flex, Input, Typography } from "antd";

const CreatePost: React.FC = () => {
	const isFilled: boolean = true;
	const { Text } = Typography;

	return (
		<Flex vertical style={{ width: "100%", maxWidth: "1400px" }}>
			<Card title="Criar um novo post" variant="borderless">
				<Flex vertical gap={8}>
					<Flex vertical gap={12}>
						<Text strong style={{ fontSize: 10 }}>
							Titulo
						</Text>
						<Input
							placeholder="Digite titulo da postagem"
							disabled={!isFilled}
							maxLength={30}
						/>
					</Flex>
					<Flex vertical gap={12}>
						<Text strong style={{ fontSize: 10 }}>
							Postagem
						</Text>
						<Input
							placeholder="Digite o conteúdo da postagem"
							disabled={!isFilled}
							maxLength={30}
						/>
					</Flex>
				</Flex>
			</Card>
		</Flex>
	);
};

export default CreatePost;