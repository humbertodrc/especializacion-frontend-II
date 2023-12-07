import { useMutation,} from '@apollo/client';
import { useState } from 'react';
import { CREATE_TASK } from '../querys';
import { CreateTaskData } from '../types/task.types';

interface Props {
  handleRefetch: () => void;
}

export const CreateTask = ({handleRefetch}:Props) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [createTask, {loading, error}] = useMutation<CreateTaskData>(CREATE_TASK)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask({ variables: { title, description } })
    handleRefetch();

    setTitle('');
    setDescription('');
  }

	return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
			<form onSubmit={handleSubmit}>
				<h2>Create Task</h2>
				<label>
					Title:
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
				<label>
					Description:
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<button type="submit">Create Task</button>
			</form>
		</div>
	);
};
