class homeController {
    static index = (req, res) => {
        try {

            res.render("index");
        } catch (error) {

        }
    }

    static iconsPage = (req, res) => {
        try {
            res.render("pages/icons");
        } catch (error) {

        }
    }
    static recordsPage = (req, res) => {
        try {
            res.render("pages/records");
        } catch (error) {

        }
    }

    static tablePage = (req, res) => {
        try {
            res.render("pages/tables");
        } catch (error) {

        }
    }

    static secretPage = (req, res) => {
        try {
            res.render("secret.ejs");
        } catch (error) {

        }
    }
}


export default homeController;