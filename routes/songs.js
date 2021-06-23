const { getSongs, idSong, addSong} = require('../controller/songs')
const Song = {
    type: 'object',
        properties:{
        id: {type: 'string'},
        name: {type: 'string'}
    },
}
const getItemsOpts ={
    schema: {
        response: {
            200: {
                type:'array',
                items: Song
            }
        },
    },
    handler: getSongs
}
const getItemsOpt = {
    schema: {
        response: {
            200: Song
        },
    },
    handler: idSong
}

const postSongOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties:{
                name: {
                    type: 'string'
                }
            }
        },
        response: {
            201: Song
        },
    },
    handler: addSong
}
function songRoutes(fastify, options, done)
{
    //GET ALL SONGS
    fastify.get('/songs', getItemsOpts)
    // GET SONG BY ID
    fastify.get('/songs/:id', getItemsOpt)
    // ADD SONG
    fastify.post('/songs', postSongOpts)  
    done()
}
module.exports = songRoutes