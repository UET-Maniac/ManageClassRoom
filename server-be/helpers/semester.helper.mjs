import Semester from '../models/semester.pg.mjs'


const create = async (data) => {
    try {
        console.log(data)
        let createdSemester = {}
        createdSemester = await Semester.create({
            name: data.name 
        })

        return {createdSemester, err: null}
    } catch(err) {
        return {createdSemester: null, err}
    }
}

const retrieveAll = async () => {
    try {
        const semesters = await Semester.findAll()
        return {semesters: semesters, err: undefined}
    } catch(err) {
        return {err, semesters: null}
    }
}

const update = async (id, data) => {
    try {
        const semester = await Semester.findByPk(id)
        if(semester === null) {
            return {err: new Error("Not exist semester id")}
        } else {
            let ok = semester.update(data)
            if(!ok) {
                return {err: new Error("Invalid")}
            }
            return {err: undefined}
        }
    } catch(err) {
        return {err}
    }
}

const remove = async (id) => {
    try {
        const semester = await Semester.findByPk(id)
        if(semester === null) {
            return {err: new Error("Not exist semester id")}
        } else {
            let ok = semester.destroy({force: true})
            if(!ok) {
                return {err: new Error("Invalid")}
            }
            return {err: undefined}
        }
    } catch(err) {
        return {err}
    }
}


const SemesterHelper = {
    create,
    update,
    remove,
    retrieveAll,
}

export default SemesterHelper