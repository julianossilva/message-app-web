import {  rest } from "msw";
import {  setupServer } from "msw/node";

import { ApiAxios } from ".";

describe("API", () => {
    test("API signup run without errors when get 201", async () => {

        const server = setupServer(
            rest.post("/signup", (req, res, ctx) => {
                return res(
                    ctx.status(201),
                    ctx.json({
                        message: "Mocked response JSON body",
                    })
                );
            })
        );

        server.listen();
        server.resetHandlers();

        let api = new ApiAxios("http://localhost")

        let res = await api.signUp("juliano", "juliano@email.com", "12345678", "juliano Silva")
        expect(res.statusCode).toBe(201)
        server.close()
    });

    /**
     * msw does not works well?
     */

    // test("API signup run without errors when get 400", async () => {
    //     const server = setupServer(
    //         rest.post("/signup", (req, res, ctx) => {
    //             return res(
    //                 ctx.status(400),
    //                 ctx.json({
    //                     code: "USERNAME_ALREADY_REGISTERED",
    //                     message: "username already registered",
    //                 })
    //             );
    //         })
    //     );

    //     server.listen();

    //     let api = new ApiAxios("http://localhost")

    //     let res = await api.signUp("juliano", "juliano@email.com", "12345678", "juliano Silva")
    //     expect(res.statusCode).toBe(400)
    //     expect(res.body?.code == "USERNAME_ALREADY_REGISTERED").toBe(true)
    //     server.close()
    // });

});
