// Importa o hook useState
import { useState } from 'react'

// Componente do formulário
function StudentForm({ onAddStudent }) {

  // Guarda o nome do aluno
  const [name, setName] = useState('')

  // Guarda as 5 notas
  const [grades, setGrades] = useState([0, 0, 0, 0, 0])

  // Guarda a frequência
  const [attendance, setAttendance] = useState(0)

  // Atualiza uma nota específica
  function handleGradeChange(index, value) {

    // Cria uma cópia do array de notas
    const newGrades = [...grades]

    // Atualiza a nota no índice correto
    newGrades[index] = Number(value)

    // Atualiza o estado
    setGrades(newGrades)
  }

  // Executado ao enviar o formulário
  function handleSubmit(e) {
    e.preventDefault() // Evita recarregar a página

    // Envia os dados para o componente App
    onAddStudent({
      name,
      grades,
      attendance: Number(attendance)
    })

    // Limpa os campos
    setName('')
    setGrades([0, 0, 0, 0, 0])
    setAttendance(0)
  }

  return (
    <form onSubmit={handleSubmit}>

      {/* Campo de nome */}
      <input
        placeholder="Nome do aluno"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* Campos das 5 disciplinas */}
      {grades.map((grade, index) => (
        <input
          key={index}
          type="number"
          min="0"
          max="10"
          value={grade}
          onChange={(e) =>
            handleGradeChange(index, e.target.value)
          }
          required
        />
      ))}

      {/* Campo de frequência */}
      <input
        type="number"
        min="0"
        max="100"
        placeholder="Frequência (%)"
        value={attendance}
        onChange={(e) => setAttendance(e.target.value)}
        required
      />

      <button type="submit">
        Adicionar aluno
      </button>
    </form>
  )
}

export default StudentForm
