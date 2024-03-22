export const healthController = (req, res, next) => {
    console.log("health");
    res.send("HELLO, I'm Healthy!");
};