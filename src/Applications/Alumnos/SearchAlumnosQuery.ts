const GetAllAlumnos = `SELECT
        d_p_a.documento AS documento,
        d_p_a.tipo_documento AS tipo_documento,
        d_p_a.nombre AS nombre,
        d_p_a.apellido AS apellido,
        d_p_a.fecha_nacimiento AS fecha_nacimiento,
        d_p_a.sexo AS sexo,
        d_p_a.lugar_nacimiento AS lugar_nacimiento,
        d_p_a.telefono_fijo AS telefono_fijo,
        d_p_a.telefono_movil AS telefono_movil,
        d_p_a.domicilio AS domicilio,
        d_p_a.numero AS numero,
        d_p_a.departamento AS departamento,
        d_p_a.piso AS piso,
        a.curso_id AS curso_id,
        a.fecha_agregado AS fecha_agregado,
        a.partida_nacimiento AS partida_nacimiento,
        a.fotocopia_dni AS fotocopia_dni,
        a.fotocopia_cuil AS fotocopia_cuil,
        a.foto_4x4 AS foto_4x4,
        a.contrato AS contrato,
        a.observaciones AS observaciones,
        a.condicion AS condicion,
        a.estado AS estado
    FROM
        alumnos AS a
    INNER JOIN datos_personales AS d_p_a
        ON d_p_a.documento = a.id`;

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
    GetAllAlumnos,
    QuantityAlumnosInscripted,
    QuantityAlumnosByCurso,
    QuantityAlumnosWithdrawn,
    MateriasStatusByAlumno,
    CalificacionesAverageByAlumno,
    CalificacionesAverageByMateria
}