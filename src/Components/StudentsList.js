import React, { Component } from 'react';
import Students from "./Students";
    	
class StudentsList extends Component {
	state = {
	    students: [
	      {
	        id: 1,
	        ime: "Boban",
	        prezime: "Nikolovski",
	        indeks: "2346/12",
	        nasoka: "IKI"
	      },
	      {
	        id: 2,
	        ime: "Kristijan",
	        prezime: "Bobevski",
	        indeks: "23430/14",
	        nasoka: "KNI"
	      },
	      {
	        id: 3,
	        ime: "Stefan",
	        prezime: "Petkovski",
	        indeks: "2360/12",
	        nasoka: "ASI"
	      },
	      {
	        id: 4,
	        ime: "Ilija",
	        prezime: "Rangelov",
	        indeks: "2250/12",
	        nasoka: "MT"
	      },
	      {
	        id: 5,
	        ime: "Dimitar",
	        prezime: "Stojmenov",
	        indeks: "2150/12",
	        nasoka: "PSI"
	      }
   		]
  	}

  	editStudent = (student) => {
  		console.log(student)
  	}
	render() {
		return (
			<div className="StudentsList">
				{this.state.students.map(student => (
						<Students ime={student.ime} prezime={student.prezime} indeks={student.indeks} nasoka={student.nasoka} key={student.id} editStudent={this.editStudent}/>
					)
				)}
				
			</div>

		);
	}
}

export default StudentsList;
