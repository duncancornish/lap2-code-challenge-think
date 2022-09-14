/**
 * @jest-environment jsdom
 */

 const fs = require("fs");
 const path = require("path");
 const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8")

 describe("home page", () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();  //beforeEach can be used if an action needs to be repeated before each test
    })

    it('h1 shows "Featured" when website loads', () => {
        const h1 = document.querySelector('h1');
        expect(h1.innerHTML).toBe("Featured")
    })

    describe("Navigation bar", () => {
        test("it has a navbar", () =>{
            let navbar = document.querySelector("nav")
            expect(navbar).toBeTruthy()
        })

        test('it has a links to create and home pages', () => {
            let homeLink = document.querySelector('#home-link');
            let createLink = document.querySelector('#create-link')
            expect(homeLink).toBeTruthy()
            expect(createLink).toBeTruthy()
        })
    })

    describe('section for cards', () => {
        test("it has card holders and has the see data", () => {
            let cardHolders = document.getElementsByClassName("card-div")
            expect(cardHolders).toBeTruthy()
        })
    })

    describe('Individual Card', () => {

        test("it has a h2 title", () => {
            let h2 = document.getElementsByClassName("title-card")
            expect(h2).toBeTruthy()
        })

        test("it has a p psuedonym", () => {
            let psuedonym = document.getElementsByClassName("pseudonym-card")
            expect(psuedonym).toBeTruthy()
        })

        test("it has a p content", () => {
            let content = document.getElementsByClassName("content-card")
            expect(content).toBeTruthy()
        })

    })

 })