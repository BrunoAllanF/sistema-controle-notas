// Componente que mostra os alunos cadastrados
function StudentList({ students }) {
  return (
    <div>
      <h2>Alunos cadastrados</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name}
            {' — '}
            Média: {student.average}
            {' — '}
            Frequência: {student.attendance}%
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList
