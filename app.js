// Import Express

const express = require('express')

// Create an App

const app = express();

// Set up Routes

app.get('/', function (req, res) {
    res.json({ message: 'Welcome to our cool app' })
})

app.get('/user', function (req, res) {
    res.json({ message: 'Hello User' })
})

app.get('/inspiring-greatness', function (req, res) {
    res.json({ data: ['EPISODE 22: IRIS VAN HERPEN', 'VISION', 'VALUES', 'EXPERIENCE'] })
})

app.get('/models', function (req, res) {
    res.json({ data: ['Phantom', 'Phantom Extended', 'Spectre', 'Ghost'] })
})

app.get('/bespoke', function (req, res) {
    res.json({
        data: ['DISCOVER',
            'COACHBUILD',
            'INSPIRATION',
            'CRAFT',
            'OBJECTS OF LUXURY',
            'CONFIGURE']
    })
})

app.get('/ownership', function (req, res) {
    res.json({
        data: ['OWNERS LOUNGE',
            'YOUR MOTOR CAR',
            'FINANCIAL SERVICES',
            'WHISPERS']
    })
})

app.get('/financial-services', function (req, res) {
    res.json({
        data: ['FINANCING AND LEASING',
            'PROTECTION PRODUCTS']
    })
})

app.get('/provenance', function (req, res) {
    res.json({
        data: ['360 DEGREE INSPECTION',
            'Thoroughly inspected by Rolls-Royce Motor Cars trained Technicians to meet our rigorous standards.',
            'VEHICLE HISTORY REPORT',
            'Accompanied by a Carfax or Experian AutoCheck Vehicle History Report.']
    })
})

app.get('/boutique', function (req, res) {
    res.json({
        data: ['TRAVEL IN STYLE',
            'Crafted from the finest materials, our luggage collection is a homage to timeless design. From the understated and elegant to the bold and daring, there is a suitable accompaniment for even the most seasoned traveller.',
            'DISCOVER LUGGAGE']
    })
})

app.get('/muse-arts-programme', function (req, res) {
    res.json({ data: ['Muse, the Rolls-Royce Arts Programme fosters creativity through collaboration with artists who share our passion for pushing technical and conceptual boundaries.'] })
})

// To start application

const PORT = process.env.PORT || 8000

// Listen for PORT

const server = app.listen(PORT, function () {
    console.log(`Server listening on PORT`, PORT)
})

module.exports = {
    server,
    app,
    PORT
}