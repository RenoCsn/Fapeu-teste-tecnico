import { Button, Card, Flex, Input, Typography } from "antd";

const CreatePost: React.FC = () => {
	const isFilled: boolean = true;
	const { Text } = Typography;

	return (
		<Flex vertical style={{ width: "100%", maxWidth: "1400px" }}>
			<Card title="Criar um novo post" variant="borderless">
				<Flex vertical gap={16}>
					<Flex vertical gap={4}>
						<Text strong style={{ fontSize: 12 }}>
							Titulo
						</Text>
						<Input
							placeholder="Digite titulo da postagem"
							disabled={!isFilled}
							maxLength={30}
						/>
					</Flex>
					<Flex vertical gap={4}>
						<Text strong style={{ fontSize: 12 }}>
							Postagem
						</Text>
						<Input
							placeholder="Digite o conteúdo da postagem"
							disabled={!isFilled}
							maxLength={30}
						/>
					</Flex>
					<Button disabled={!isFilled} style={{maxWidth: '150px'}}>
						Criar postagem
					</Button>
				</Flex>
			</Card>
		</Flex>
	);
};

export default CreatePost;