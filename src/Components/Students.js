import React, { Component } from 'react';
    	
class Students extends Component {
	state = {
		showStudentInfo: false,
		toggleEdit: false,
		newStudent: {
			ime: "",
			prezime: "null",
			indeks: "null",
			nasoka: "null"
		}
	}


	toggleStudent = () => {
		this.setState({
			showStudentInfo: !this.state.showStudentInfo
		})
	}

	editStudentInfo = () => {
		this.setState({
			toggleEdit: !this.state.toggleEdit
		})
	}

	addNewStudent = (e) => {
		let value = e.target.value;
		let name = e.target.name;
		this.setState(prevState => {
			return {
				newStudent: {
					...prevState.newStudent, 
					[name] : value
				}
			}
		})
	}

	sendStudent = () => {
		this.props.editStudent(this.state.newStudent)
	}

	render() {
		const {ime, prezime, indeks, nasoka} = this.props;
		return (
			<div className="Students">
				<div className="studentInfo">
					<h4>Ime i Prezime: {ime} {prezime} <i onClick={this.toggleStudent} className="fas fa-sort-down"></i> 
					<i className="fas fa-pencil-alt edit" onClick={this.editStudentInfo}></i></h4>
					{
						this.state.showStudentInfo ? (<ul>
							<li>Indeks: {indeks}</li>
							<li>Nasoka: {nasoka}</li>
						</ul>) : null
					}
				</div>
				{this.state.toggleEdit ? (<div className="editDetails">
					<label htmlFor="Ime">Vnesi novo ime:</label>
					<input type="text" id="Ime" className="form-control" name="ime" onChange={this.addNewStudent} />
					<label htmlFor="prezime">Vnesi novo prezime:</label>
					<input type="text" id="prezime" className="form-control" name="prezime" onChange={this.addNewStudent}/>
					<label htmlFor="indeks">Vnesi broj na indeks:</label>
					<input type="text" id="indeks" className="form-control" name="indeks" onChange={this.addNewStudent}/>
					<label htmlFor="nasoka">Vnesi nova nasoka:</label>
					<input type="text" id="nasoka" className="form-control" name="nasoka" onChange={this.addNewStudent}/>
					<button className="btn btn-success" onClick={this.sendStudent}>Izmeni</button>
				</div>) : null}
				
			</div>

		);
	}
}

export default Students;
