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
module.exports ={
    getSongs,
    idSong,
    addSong
}