const sinon = require('sinon'),
chai = require('chai'),
expect = chai.expect,
mongoose = require('mongoose');
require('sinon-mongoose');

const Song = require('./song');

describe("Get all songs", () => {
    it("should return all songs", (done) => {
        const SongMock = sinon.mock(Song);
        const expectedResult = {status: true, songs: []};
        SongMock.expects('find').yields(null, expectedResult);
        Song.find((err, result) => {
            SongMock.verify();
            SongMock.restore();
            expect(result.status).to.be.true
            done();
        });
    });
});