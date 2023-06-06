class authController {

    static loginform = (req, res) => {
        try {
            res.render('pages/auth/loginform')
        } catch (error) {

        }
    }
    static registerform = (req, res) => {
        try {
            res.render('pages/auth/registerform')
        } catch (error) {

        }
    }
    static login = (req, res) => {
        try {



        } catch (error) {
            console.log(error);
        }
    }

    static submitRegister = async (req, res) => {
        try {



        } catch (error) {
            console.log(error)
            return
        }
    }

}

export default authController;