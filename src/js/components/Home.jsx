import { useState } from "react";

const Home = () => {



	const [writtingTodo, setWrittingTodo] = useState({
		task: "",
		done: "",
	})

	const [todo, setTodo] = useState([

	])

	const handleChange = (event) => {
		setWrittingTodo({
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = (event) => {


		event.preventDefault()

		if (!writtingTodo.task.trim()) return;

		setTodo([
			...todo,
			writtingTodo,
		])

		setWrittingTodo({
			task: "",
			done: "",
		})


	}

	const deleteTask = (id) => {
		console.log(`eliminado el index ${id}`)

		const newList = todo.filter((item, index) => index !== id)

		setTodo(newList)
	}



	return (
		<div className="container hojita">
			<div className="row justify-content-center">
				<div className="titulo col-12 col-md-7 text-center">
					<p>todos</p>
				</div>
				<div className="col-12 col-md-7 bg-white p-3">
					<form
						onSubmit={handleSubmit}
					>
						<div className="input-group flex-nowrap">
							<input
								type="text"
								name="task"
								className="letters form-control border-0 no-focus"
								placeholder="What needs to be done?"
								value={writtingTodo.task}
								aria-label="Username"
								aria-describedby="addon-wrapping"
								onChange={handleChange}
							/>
						</div>
					</form>
					<div className="col-12 col-md-7 ps-1 mt-3 w-100">{
						todo.map((item, index) => (
							<div key={index} className="taskToDo border-bottom d-flex justify-content-between align-items-center ps-2">
								<div className="letters">{item.task}</div>
								<div className="">
									<button type="button"
										className="btn-close delete-btn color-black no-focus"
										onClick={() => deleteTask(index)}
										aria-label="Close"
									></button>
								</div>
							</div>
						))
					}
					</div>
					<div className="align-items-start ps-0 pt-2 ms-0">
						{todo.length === 0 ? `Theres nothing to do, add something` : `${todo.length} items left`}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;