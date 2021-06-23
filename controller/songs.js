const { v4:uuidv4 } = require('uuid')
let songs = require('../songs')

const getSongs = (req, reply) => {
    reply.send(songs)
}

const idSong = (request, reply) => {
    const {id} = request.params
    const song = songs.find((song) => song.id === id)
    reply.send(song)
}
const addSong = (req, reply) => {
    const {name} = req.body
    const item = {
        id: uuidv4(),
        name
    }

    songs = [...songs, item]
    reply.code(201).send(item)
}

const deleteSong = (req, reply) => {
    const {id} = req.params

    songs = songs.filter(song => song.id !== id)

    reply.send({message: `Song ${id} has been removed`})
}

const updateSong = (req, reply) => {
    const {id} = req.params
    const {name} = req.body

    songs = songs.map(song => (song.id === id ? {id, name}
        : song))
    song = songs.find(song => song.id === id)

    reply.send(song)
}
module.exports ={
    getSongs,
    idSong,
    addSong,
    deleteSong,
    updateSong
}