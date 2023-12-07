import {useQuery} from "@apollo/client";
import "./App.css";
import {GET_ALL_TASKS} from "./querys";
import { CreateTask } from './components/CreateTask';
import { Task } from './types/task.types';

function App() {
	const {data, loading, error, refetch} = useQuery(GET_ALL_TASKS);

	const handleRefetch = () => {
		refetch();
	};

	return (
		<>
			<div>
				<h1>GraphQL Mutation</h1>
				{loading && <p>Loading...</p>}
				{error && <p>Error...</p>}
				{data &&
					data.allTasks.map((task: Task) => (
						<div key={task.id}>
							<p>{task.title}</p>
							<p>{task.description}</p>
						</div>
					))}
      </div>
      <CreateTask handleRefetch={handleRefetch} />
		</>
	);
}

export default App;
