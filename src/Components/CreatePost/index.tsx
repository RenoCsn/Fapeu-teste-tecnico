import { Card, Flex, Input, Typography } from "antd";

const CreatePost: React.FC = () => {
	const isFilled: boolean = true;
	const { Text } = Typography;

	return (
		<Card
			title="Criar um novo post"
			variant="borderless"
			// style={{ width: 300 }}
		>
			<Flex>
				<>
					<Text strong style={{ fontSize: 10 }}>
						Titulo
					</Text>
					<Input
						placeholder="Digite titulo da postagem"
						disabled={!isFilled}
						maxLength={30}
					/>
				</>
				<>
					<Text strong style={{ fontSize: 10 }}>
						Postagem
					</Text>
					<Input
						placeholder="Digite o conteúdo da postagem"
						disabled={!isFilled}
						maxLength={30}
					/>
				</>
			</Flex>
		</Card>
	);
};

export default CreatePost;