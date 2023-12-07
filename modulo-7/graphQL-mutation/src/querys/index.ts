import {gql} from "@apollo/client";

export const GET_ALL_TASKS = gql`
	query AllTasks {
		allTasks {
			id
			title
			description
			priority {
				high
				medium
			}
		}
	}
`;

export const CREATE_TASK = gql`
	mutation createTask($title: String!, $description: String) {
		createTask(title: $title, description: $description) {
			id
			title
			description
			priority {
				high
				medium
			}
		}
	}
`;
