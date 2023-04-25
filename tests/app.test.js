const req = require('supertest')

const { app, server, PORT } = require('../app')

describe('app', () => {
    it('PORT to be 8000 on dev', () => {
        expect(PORT).toBe(8000)
    })
})

describe('GET /', () => {
    it('respond with string', (done) => {
        req(app)
            .get('/')
            .expect(200, done)
    })
    it('respond with json', (done) => {
        req(app)
            .get('/')
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('GET /user', function () {
    it('respond with 200', function (done) {
        req(app)
            .get('/user')
            .expect(200, done)
    })
    it('respond with json', (done) => {
        req(app)
            .get('/user')
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('GET /inspiring-greatness', function () {
    it('respond with string', function (done) {
        req(app)
            .get('/inspiring-greatness')
            .expect(200, done)
    })
    it('respond with json', (done) => {
        req(app)
            .get('/inspiring-greatness')
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('GET /models', function () {
    it('respond with string', function (done) {
        req(app)
            .get('/models')
            .expect(200, done)
    })
    it('respond with json', (done) => {
        req(app)
            .get('/models')
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('GET /bespoke', function () {
    it('respond with string', function (done) {
        req(app)
            .get('/bespoke')
            .expect(200, done)
    })
    it('respond with json', (done) => {
        req(app)
            .get('/bespoke')
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('GET /ownership', function () {
    it('respond with string', function (done) {
        req(app)
            .get('/ownership')
            .expect(200, done)
    })
    it('respond with json', (done) => {
        req(app)
            .get('/ownership')
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('GET /financial-services', function () {
    it('respond with string', function (done) {
        req(app)
            .get('/financial-services')
            .expect(200, done)
    })
    it('respond with json', (done) => {
        req(app)
            .get('/financial-services')
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('GET /provenance', function () {
    it('respond with string', function (done) {
        req(app)
            .get('/provenance')
            .expect(200, done)
    })
    it('respond with json', (done) => {
        req(app)
            .get('/provenance')
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('GET /boutique', function () {
    it('respond with string', function (done) {
        req(app)
            .get('/boutique')
            .expect(200, done)
    })
    it('respond with json', (done) => {
        req(app)
            .get('/boutique')
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('GET /muse-arts-programme', function () {
    it('respond with string', function (done) {
        req(app)
            .get('/muse-arts-programme')
            .expect(200, done)
    })
    it('respond with json', (done) => {
        req(app)
            .get('/muse-arts-programme')
            .set('accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

// close server unless you want to keep it running

server.close()