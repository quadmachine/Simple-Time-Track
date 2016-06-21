import {db, query} from 'Database';

export class Tasks {

	static insert(project, task) {
		return query(
				'INSERT INTO tasks (project, task, time, start, running) VALUES (?, ?, ?, ?, ?)',
				[project, task, 0, new Date(), false]
		);
	}

	static delete(id) {
		return query('DELETE FROM tasks WHERE id=?', [id]);
	}

	static cleanAll() {
		return query("DELETE FROM tasks");
	}
}