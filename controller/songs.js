const songs = require('../songs')

const getSongs = (req, reply) => {
    reply.send(songs)
}

const idSong = (request, reply) => {
    const {id} = request.params
    const song = songs.find((song) => song.id === id)
    reply.send(song)
}

module.exports ={
    getSongs,
    idSong
}