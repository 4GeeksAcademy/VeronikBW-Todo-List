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

		// if (!writtingTodo) return


		setTodo([
			...todo,
			writtingTodo,
		])

		setWrittingTodo({
			task: "",
			done: "",
		})

		
	}



	return (
		<div className="container">
			<div className="row">
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
								className="form-control border-0"
								placeholder="What needs to be done?"
								value={writtingTodo.task}
								aria-label="Username"
								aria-describedby="addon-wrapping"
								onChange={handleChange}
							/>
						</div>
					</form>
					<div className="col-12 col-md-7 ps-1 mt-3">{
						todo.map((item, index) => (
							<div key={index} className="taskToDo border-bottom d-flex justify-content-between">
								<div>{item.task}</div>
								<div className="">
									<button type="button" className="btn-close delete-btn color-black" aria-label="Close"></button>
								</div>
							</div>
						))
					}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;