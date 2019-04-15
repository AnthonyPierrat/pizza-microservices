import app from './src/app';

// use port 3000 unless there exists a preconfigured port
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`running pizza service on port ${port}`);
    console.log('-------------------------------------');
});