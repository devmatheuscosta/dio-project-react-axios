import styled from 'styled-components';

export const ItemContainer = styled.div`
	width: 80%;
	background-color: #282c34;
	padding: 20px;
	border-radius: 8px;
	margin-bottom: 20px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s, box-shadow 0.2s;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	h3 {
		font-size: 32px;
		color: #fafafa;
		margin-bottom: 10px;
		transition: color 0.2s;

		&:hover {
			color: #61dafb;
		}
	}

	p {
		font-size: 16px;
		color: #fafafa60;
		margin-bottom: 20px;
	}

	a {
		color: #61dafb;
		text-decoration: none;
		transition: color 0.2s;

		&:hover {
			color: #21a1f1;
		}

		&.remover {
			color: #ff0000;
			margin-top: 20px;

			&:hover {
				color: #ff4c4c;
			}
		}
	}

	button.remover {
		background: none;
		border: none;
		color: #ff0000;
		cursor: pointer;
		font-size: 16px;
		margin-top: 20px;
		transition: color 0.2s;

		&:hover {
			color: #ff4c4c;
		}
	}

	hr {
		border: none;
		height: 1px;
		background: #fafafa60;
		margin: 20px 0;
	}
`;
