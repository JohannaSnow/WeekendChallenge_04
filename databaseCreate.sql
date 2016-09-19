CREATE TABLE tasks(
	id SERIAL PRIMARY KEY,
	task VARCHAR(140),
	status BOOLEAN
);

---test an item--
INSERT INTO tasks(task, Status) VALUES ('Make a List app.', false);
