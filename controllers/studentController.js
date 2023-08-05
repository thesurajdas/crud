import StudentModel from "../models/Student.js"

class StudentController {
    static getAllDoc = async (req, res) => {
        try {
            const ressult = await StudentModel.find()
            res.render('index', { data: ressult })
        } catch (error) {
            console.log(error)
        }
    }
    static createDoc = async (req, res) => {
        try {
            const { name, age, fees } = req.body
            const doc = new StudentModel({
                name: name,
                age: age,
                fees: fees
            })
            //Save data
            const result = await doc.save()
            // console.log(result)
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
    static editDoc = async (req, res) => {
        try {
            const result = await StudentModel.findById(req.params.id)
            res.render('edit', { data: result })
        } catch (error) {
            console.log(error)
        }
    }
    static updateDocById = async (req, res) => {
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            // console.log(result)
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
    static deleteDocById = async (req, res) => {
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            // console.log(result)
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
}
export default StudentController;