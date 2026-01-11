// Hook do React para trabalhar com estado (dados que mudam)
import { useState } from 'react'

// Importa os componentes da aplicação
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'

// Importa as funções de cálculo
import {
  calculateStudentAverage,
  calculateClassAverage,
  calculateClassAverageBySubject
} from './utils/Calculations'


// Componente principal
function App() {

  // Estado que guarda todos os alunos cadastrados
  const [students, setStudents] = useState([])

  // Função chamada quando o formulário envia um novo aluno
  function addStudent(student) {

    // Calcula a média do aluno com base nas notas
    const average = calculateStudentAverage(student.grades)

    // Adiciona o aluno à lista existente
    setStudents([
      ...students,
      {
        ...student,
        average
      }
    ])
  }

  // Calcula a média geral da turma
  const classAverage = calculateClassAverage(students)

  // Calcula a média da turma por disciplina
  const classAverageBySubject = calculateClassAverageBySubject(students)

  // Filtra alunos com média acima da média da turma
const studentsAboveAverage = students.filter(
  student => Number(student.average) > Number(classAverage)
)

  // Filtra alunos com frequência abaixo de 75%
  const studentsLowAttendance = students.filter(
    student => student.attendance < 75
  )

  return (
    <div>
      <h1>Sistema de Notas</h1>

      {/* Formulário para cadastrar alunos */}
      <StudentForm onAddStudent={addStudent} />

      {/* Lista com todos os alunos */}
      <StudentList students={students} />

      <h2>Média geral da turma</h2>
      <p>{classAverage}</p>

      <h2>Média da turma por disciplina</h2>
      <ul>
        {classAverageBySubject.map((avg, index) => (
          <li key={index}>
            Disciplina {index + 1}: {avg}
          </li>
        ))}
      </ul>

      <h2>Alunos com média acima da média da turma</h2>
      {studentsAboveAverage.length === 0
        ? <p></p>
        : studentsAboveAverage.map((student, index) => (
            <p key={index}>{student.name}</p>
          ))
      }

      <h2>Alunos com frequência abaixo de 75%</h2>
      {studentsLowAttendance.length === 0
        ? <p></p>
        : studentsLowAttendance.map((student, index) => (
            <p key={index}>{student.name}</p>
          ))
      }
    </div>
  )
}

export default App
