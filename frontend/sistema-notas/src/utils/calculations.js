// Calcula a média das notas de um aluno
export function calculateStudentAverage(grades) {

  // Soma todas as notas
  const sum = grades.reduce(
    (total, grade) => total + grade,
    0
  )

  // Divide pelo número de disciplinas
  return (sum / grades.length).toFixed(2)
}

// Calcula a média da turma por disciplina
export function calculateClassAverageBySubject(students) {

  // Se não houver alunos, retorna vazio
  if (students.length === 0) return []

  // Quantidade de disciplinas
  const numberOfSubjects = students[0].grades.length

  // Cria um array para somar as notas
  const totals = Array(numberOfSubjects).fill(0)

  // Soma as notas de cada disciplina
  students.forEach(student => {
    student.grades.forEach((grade, index) => {
      totals[index] += grade
    })
  })

  // Divide pelo número de alunos
  return totals.map(total =>
    (total / students.length).toFixed(2)
  )
}

// Calcula a média geral da turma
export function calculateClassAverage(students) {

  // Evita erro se não houver alunos
  if (students.length === 0) return 0

  // Soma as médias dos alunos
  const total = students.reduce(
    (sum, student) => sum + Number(student.average),
    0
  )

  // Divide pelo número de alunos
  return (total / students.length).toFixed(2)
}