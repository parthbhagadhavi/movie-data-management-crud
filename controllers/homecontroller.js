const moviedata = require('../models/movieTBL')
const path = require('path')
const fs = require('fs')
const home = async (req, res) => {
    try {
        const movies = await moviedata.find();
        res.render('home', { movies });
    } catch (err) {
        console.log(err);
        res.render('404')
    }



}

const add = async (req, res) => {
    try {
        res.render('adddata')

    } catch (err) {
        console.log(err);
        res.render('404')
    }

}


const insertdata = async (req, res) => {
    try {
        const {
            title, genre, year, director, cast,
            duration, language, rating,
            description, releaseDate, trailer
        } = req.body;

        let poster = ''
        if (req.file) {
            poster = req.file.path
        }

        moviedata.create({
            title,
            genre,
            year,
            director,
            cast,
            duration,
            language,
            rating,
            description,
            poster,
            releaseDate,
            trailer
        });

        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.render('404')
    }


};
const editdata = async (req, res) => {
    try {
        const id = req.query.id;
        const movie = await moviedata.findById(id);
        console.log(movie);

        res.render('editdata', { movie });
    } catch (err) {
        console.log(err);
        res.render('404')
    }

};



const updatedata = async (req, res) => {
    try {
        const {
            title, genre, year, director, cast,
            duration, language, rating,
            description, releaseDate, trailer
        } = req.body;
        const id = req.query.id;
        let hello = await moviedata.findById(id)
        let poster = hello.poster

        if (req.file) {

            fs.unlinkSync(poster)
            poster = req.file.path


            await moviedata.findByIdAndUpdate(id, {
                title,
                genre,
                year,
                director,
                cast,
                duration,
                language,
                rating,
                description,
                releaseDate,
                trailer,
                poster
            });
            res.redirect('/');
        } else {
            await moviedata.findByIdAndUpdate(id, {
                title,
                genre,
                year,
                director,
                cast,
                duration,
                language,
                rating,
                description,
                releaseDate,
                trailer
            });
            res.redirect('/');

        }

    }

    catch (err) {
        console.log(err);
        res.render('404')
    }


};

const deletedata = async (req, res) => {
    try {
        let id = req.query.id
        let deletemovie = await moviedata.findById(id)
        await moviedata.findByIdAndDelete(deletemovie)
        fs.unlinkSync(deletemovie.poster)

        res.redirect('/')
    } catch (err) {
        console.log(err);
        res.render('404')
    }

}

const error = async (req, res) => {
    res.render('404')
}

module.exports = { home, add, insertdata, editdata, updatedata, deletedata, error }