import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

const jokes = [
    {
        id: 1,
        title: 'Joke No 1',
        description: 'First Joke of the day'
    },
    {
        id: 2,
        title: 'Joke No 2',
        description: 'Second Joke of the day'
    },
    {
        id: 3,
        title: 'Joke No 3',
        description: 'Third Joke of the day'
    },
    {
        id: 4,
        title: 'Joke No 4',
        description: 'Fourth Joke of the day'
    },
    {
        id: 5,
        title: 'Joke No 5',
        description: 'Fifth Joke of the day'
    }
];

app.get('/api', (req, res) => {
    res.send("Server is ready");
});

app.get('/api/jokes', (req, res) => {
    res.send(jokes);
})

app.listen(port, () => {
    console.log(`Serve at ${port}`);
})