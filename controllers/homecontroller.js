const moviedata = require('../models/movieTBL')
const path = require('path')
const fs = require('fs')
const home = async (req, res) => {
    const movies = await moviedata.find();
    res.render('home', { movies });


}

const add = (req, res) => {
    res.render('adddata')

}


const insertdata = (req, res) => {

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

};
const editdata = async (req, res) => {
    const id = req.query.id;
    const movie = await moviedata.findById(id);
    console.log(movie);

    res.render('editdata', { movie });
};



const updatedata = async (req, res) => {
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
    }else{
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




};

const deletedata = async (req, res) => {
    let id = req.query.id
    let deletemovie = await moviedata.findById(id)
    await moviedata.findByIdAndDelete(deletemovie)
    fs.unlinkSync(deletemovie.poster)

    res.redirect('/')
}

const error=(req,res)=>{
res.render('404')
}

module.exports = { home, add, insertdata, editdata, updatedata, deletedata ,error}