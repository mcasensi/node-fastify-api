const { 
    getSongs, 
    idSong, 
    addSong, 
    deleteSong,
    updateSong
} = require('../controller/songs')
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
const deleteItemsOpt = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: {type: 'string'}
                }
            }
        },
    },
    handler: deleteSong
}
const updateItemsOpt = {
    schema: {
        response: {
            200: Song
        },
    },
    handler: updateSong
}

function songRoutes(fastify, options, done)
{
    //GET ALL SONGS
    fastify.get('/songs', getItemsOpts)
    // GET SONG BY ID
    fastify.get('/songs/:id', getItemsOpt)
    // ADD SONG
    fastify.post('/songs', postSongOpts)  
    // DELETE SONG
    fastify.delete('/songs/:id', deleteItemsOpt)  
    // UPDATE SONG
    fastify.put('/songs/:id', updateItemsOpt)  
    done()
}
module.exports = songRoutes