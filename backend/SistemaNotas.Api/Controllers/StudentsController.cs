using Microsoft.AspNetCore.Mvc;
using SistemaNotas.Api.Models;

namespace SistemaNotas.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StudentsController : ControllerBase
{
    private static readonly List<Student> Students = new();

    [HttpPost]
    public IActionResult AddStudent(Student student)
    {
        Students.Add(student);
        return Ok(student);
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(Students);
    }

    [HttpGet("average")]
    public IActionResult GetClassAverage()
    {
        if (!Students.Any())
            return Ok(0);

        var average = Students
            .Select(s => s.Grades.Average())
            .Average();

        return Ok(Math.Round(average, 2));
    }

    [HttpGet("above-average")]
    public IActionResult AboveAverage()
    {
        if (!Students.Any())
            return Ok(new List<Student>());

        var classAverage = Students
            .Select(s => s.Grades.Average())
            .Average();

        var result = Students
            .Where(s => s.Grades.Average() > classAverage);

        return Ok(result);
    }

    [HttpGet("low-attendance")]
    public IActionResult LowAttendance()
    {
        var result = Students
            .Where(s => s.Attendance < 75);

        return Ok(result);
    }
}
        