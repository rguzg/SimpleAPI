const app = require("./server");

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);

    if(process.env.EXPOSE_PORT){
        console.log(`Server is running on exposed port ${process.env.EXPOSE_PORT}`);
    }
});
