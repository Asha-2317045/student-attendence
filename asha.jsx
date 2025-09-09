import React, { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));

  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: editText } : todo)));
    setEditId(null);
    setEditText('');
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', fontFamily: 'Arial' }}>
      <h2>React To-Do List</h2>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add task"
        style={{ width: '70%', padding: '8px' }}
      />
      <button onClick={addTodo} style={{ padding: '8px 12px' }}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                  style={{ padding: '6px', width: '60%' }}
                />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {todo.text}{' '}
                <button onClick={() => startEdit(todo)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
