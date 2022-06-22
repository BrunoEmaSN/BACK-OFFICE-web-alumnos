
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

    
const QuantityAsistenciasByWeek = ``;


const QuantityAsistenciasByMonth = ``;

    
const QuantityAsistenciasByYear = ``;


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
    AND a.estado = 'Ausente'`;

    
const QuantityInasistenciasByWeek = ``;


const QuantityInasistenciasByMonth = ``;

    
const QuantityInasistenciasByYear = ``;

const QuantityRetrasosByCurso = `SELECT
    COUNT (a.estado) as cantidad,
        
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.curso_id = ?
    AND a.estado = 'Retraso'`;

    
const QuantityRetrasosByAsignatura = `SELECT
    COUNT (a.estado) as cantidad,
    
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.materia_id = ?
    AND a.estado = 'Retraso'`;


const QuantityRetrasosByDay = `SELECT
    COUNT (a.estado) as cantidad,
            
    FROM asistencias a
    INNER JOIN clases c
    ON a.clase_id = c.id
    WHERE c.dias = ?
    AND a.estado = 'Retraso'`;

    
const QuantityRetrasosByWeek = ``;


const QuantityRetrasosByMonth = ``;

    
const QuantityRetrasosByYear = ``;


export default {
    QuantityAsistenciasByCurso,
    QuantityAsistenciasByAsignatura,
    QuantityAsistenciasByDay,


    QuantityInasistenciasByCurso,
    QuantityInasistenciasByAsignatura,
    QuantityInasistenciasByDay,

    QuantityRetrasosByCurso,
    QuantityRetrasosByAsignatura,
    QuantityRetrasosByDay
}