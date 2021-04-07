export const helloRoute = {
    method: "get",
    path: "/hello",
    handler: async (req,res, next) => {
        const user = req.user;
        res.send("Hello");
    },
};