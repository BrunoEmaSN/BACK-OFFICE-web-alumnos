const QuantityAlumnosInscripted = `SELECT
        p.descripcion AS periodo,
        COUNT(a.id) AS cantidad
    FROM alumnos AS a
    INNER JOIN periodos AS p
        ON a.fecha_agregado BETWEEN p.fecha_inicio AND p.fecha_fin
    GROUP BY p.descripcion`;

const QuantityAlumnosByCurso = `SELECT
        c.nivel AS nivel,
        c.grado_ano AS grado_ano,
        c.division AS division,
        c.turno AS turno,
        COUNT(a.id) AS cantidad
    FROM alumnos AS a INNER JOIN cursos AS c ON c.id = a.curso_id GROUP BY c.id;`;

const QuantityAlumnosWithdrawn = `SELECT COUNT(id) AS cantidad FROM alumnos WHERE estado = 0;`;

const MateriasStatusByAlumno = `SELECT
        m.descripcion AS materia,
        am.estado AS estado
    FROM alumno_materia AS am
    INNER JOIN materias AS m ON m.id = am.materia_id
    WHERE am.alumno_id = ?`;

const CalificacionesAverageByAlumno = `SELECT
        m.descripcion AS descripcion,
        AVG(c.nota) AS nota
    FROM calificaciones AS c
    INNER JOIN materias AS m ON m.id = c.materia_id
    WHERE c.alumno_id = ?
    GROUP BY m.descripcion`;

const CalificacionesAverageByMateria = `SELECT
    m.descripcion AS descripcion,
    AVG(c.nota) AS nota
FROM calificaciones AS c
INNER JOIN materias AS m ON m.id = c.materia_id
WHERE c.materia_id = ?
GROUP BY m.descripcion`;

export default {
    QuantityAlumnosInscripted,
    QuantityAlumnosByCurso,
    QuantityAlumnosWithdrawn,
    MateriasStatusByAlumno,
    CalificacionesAverageByAlumno,
    CalificacionesAverageByMateria
}