import mongoose from "mongoose";
const Schema = mongoose.Schema;

const songSchema = Schema({
    title: {
        type: String,
        required: [true, 'A title is required.']
    },
    artist: {
        type: String,
        required: [true, 'Artist name is required.']
    },
    otherArtists: [String],
    credit: {
        type: Map,
        of: String
    },
    length: Number,
    hasExplicitContent: Boolean,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const SongModel = mongoose.model('Song', songSchema);

module.exports = SongModel;