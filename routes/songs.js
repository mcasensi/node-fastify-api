const { getSongs, idSong} = require('../controller/songs')
const Song = {
    type: 'object',
        properties:{
        // id: {type: 'integer'},
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
function songRoutes(fastify, options, done)
{
    //GET ALL SONGS
    fastify.get('/songs', getItemsOpts)
    // GET SONG BY ID
    fastify.get('/songs/:id', getItemsOpt)
      
    done()
}
module.exports = songRoutes