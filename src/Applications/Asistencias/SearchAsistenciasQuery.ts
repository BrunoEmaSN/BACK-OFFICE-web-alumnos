
const QuantityAsistenciasByCurso = `SELECT
    COUNT (a.estado) as cantidad,
    
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.curso_id = ?
    AND a.estado = 'Presente'`;

    
const QuantityAsistenciasByAsignatura = `SELECT
    COUNT (a.estado) as cantidad,
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.materia_id = ?
    AND a.estado = 'Presente'`;


const QuantityAsistenciasByDay = `SELECT
    COUNT (a.estado) as cantidad,
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.dias = ?
    AND a.estado = 'Presente'`;

    
const QuantityAsistenciasByWeek = `

`;


const QuantityAsistenciasByMonth = `SELECT
    COUNT (a.estado) as cantidad,            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE MONTH(a.fecha) = ?
    AND a.estado = Presente`;

    
const QuantityAsistenciasByYear = `SELECT
    COUNT (a.estado) as cantidad,            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE YEAR(a.fecha) = ?
    AND a.estado = Presente`;


    
const QuantityAsistenciasByAsignaturaAndAlumno = `SELECT
    COUNT (a.estado) as cantidad,
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.materia_id = ?
    AND a.alumno_id = ?
    AND a.estado = 'Presente'`;


const QuantityAsistenciasByMonthAndAlumno = `SELECT
    COUNT (a.estado) as cantidad,            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE MONTH(a.fecha) = ?
    AND a.alumno_id = ?
    AND a.estado = Presente`;

    
const QuantityAsistenciasByYearAndAlumno = `SELECT
    COUNT (a.estado) as cantidad,            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE YEAR(a.fecha) = ?
    AND a.alumno_id = ?
    AND a.estado = Presente`;


const QuantityInasistenciasByCurso = `SELECT
    COUNT (a.estado) as cantidad,
        
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.curso_id = ?
    AND a.estado = 'Ausente'`;

    
const QuantityInasistenciasByAsignatura = `SELECT
    COUNT (a.estado) as cantidad,
    
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.materia_id = ?
    AND a.estado = 'Ausente'`;


const QuantityInasistenciasByDay = `SELECT
    COUNT (a.estado) as cantidad,
            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.dias = ?
    AND a.estado = Ausente`;

const QuantityInasistenciasByWeek = ``;

const QuantityInasistenciasByMonth = `SELECT
    COUNT (a.estado) as cantidad,            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE MONTH(a.fecha) = ?
    AND a.estado = Ausente`;

const QuantityInasistenciasByYear = `SELECT
    COUNT (a.estado) as cantidad,            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE YEAR(a.fecha) = ?
    AND a.estado = Ausente`;

    
const QuantityInasistenciasByAsignaturaAndAlumno = `SELECT
    COUNT (a.estado) as cantidad,
    
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.materia_id = ?
    AND a.alumno_id = ?
    AND a.estado = 'Ausente'`;


const QuantityInasistenciasByMonthAndAlumno = `SELECT
    COUNT (a.estado) as cantidad,            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE MONTH(a.fecha) = ?
    AND a.alumno_id = ?
    AND a.estado = Ausente`;

const QuantityInasistenciasByYearAndAlumno = `SELECT
    COUNT (a.estado) as cantidad,            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE YEAR(a.fecha) = ?
    AND a.alumno_id = ?
    AND a.estado = Ausente`;




const QuantityRetrasosByCurso = `SELECT
    COUNT (a.estado) as cantidad,
        
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.curso_id = ?
    AND a.estado = Retraso`;

    
const QuantityRetrasosByAsignatura = `SELECT
    COUNT (a.estado) as cantidad,
    
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.materia_id = ?
    AND a.estado = Retraso`;


const QuantityRetrasosByDay = `SELECT
    COUNT (a.estado) as cantidad,
            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.dias = ?
    AND a.estado = Retraso`;


//primer y segundo valor fecha

const QuantityRetrasosByWeek = `
`;


const QuantityRetrasosByMonth = `SELECT
    COUNT (a.estado) as cantidad,            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE MONTH(a.fecha) = ?
    AND a.estado = Retraso`;

    
const QuantityRetrasosByYear = `SELECT
    COUNT (a.estado) as cantidad,            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE YEAR(a.fecha) = ?
    AND a.estado = Retraso`;




    
const QuantityRetrasosByAsignaturaAndAlumno = `SELECT
    COUNT (a.estado) as cantidad,
    
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.materia_id = ?
    AND a.alumno_id = ?
    AND a.estado = Retraso`;


const QuantityRetrasosByMonthAndAlumno = `SELECT
    COUNT (a.estado) as cantidad,            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE MONTH(a.fecha) = ?
    AND a.alumno_id = ?
    AND a.estado = Retraso`;

    
const QuantityRetrasosByYearAndAlumno = `SELECT
    COUNT (a.estado) as cantidad,            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE YEAR(a.fecha) = ?
    AND a.alumno_id = ?
    AND a.estado = Retraso`;


export default {
    QuantityAsistenciasByCurso,
    QuantityAsistenciasByAsignatura,
    QuantityAsistenciasByDay,
    QuantityAsistenciasByWeek,
    QuantityAsistenciasByMonth,
    QuantityAsistenciasByYear,

    QuantityAsistenciasByAsignaturaAndAlumno,
    QuantityAsistenciasByMonthAndAlumno,
    QuantityAsistenciasByYearAndAlumno,

    QuantityInasistenciasByCurso,
    QuantityInasistenciasByAsignatura,
    QuantityInasistenciasByDay,
    QuantityInasistenciasByWeek,
    QuantityInasistenciasByMonth,
    QuantityInasistenciasByYear,

    QuantityInasistenciasByAsignaturaAndAlumno,
    QuantityInasistenciasByMonthAndAlumno,
    QuantityInasistenciasByYearAndAlumno,

    QuantityRetrasosByCurso,
    QuantityRetrasosByAsignatura,
    QuantityRetrasosByDay,
    QuantityRetrasosByWeek,
    QuantityRetrasosByMonth,
    QuantityRetrasosByYear,

    QuantityRetrasosByAsignaturaAndAlumno,
    QuantityRetrasosByMonthAndAlumno,
    QuantityRetrasosByYearAndAlumno
}