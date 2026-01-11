namespace SistemaNotas.Api.Models;

public class Student
{
    public string Name { get; set; } = string.Empty;
    public List<double> Grades { get; set; } = new();
    public double Attendance { get; set; }
}
