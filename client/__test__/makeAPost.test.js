/**
 * @jest-environment jsdom
 */

 const fs = require("fs");
 const path = require("path");
 const html = fs.readFileSync(path.resolve(__dirname, "../post.html"), "utf-8")

 describe("home page", () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();  //beforeEach can be used if an action needs to be repeated before each test
    })

    it('h1 shows "Make a Post" when website loads', () => {
        const h1 = document.querySelector('h1');
        expect(h1.innerHTML).toBe("Make A Post")
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

    describe('the form', () => {

        test('it has a form',() => {
            let form = document.querySelector('#form-create');
        expect(form).toBeTruthy()
        })

        test('it has a title input',() => {
            let titleinput = document.querySelector('#title');
            expect(titleinput).toBeTruthy()
        })

        test('it has an author input',() => {
            let authorinput = document.querySelector('#pseudonym');
            expect(authorinput).toBeTruthy()
        })

        test('it has an thoughts input',() => {
            let thoughtsinput = document.querySelector('#entry');
            expect(thoughtsinput).toBeTruthy()
        })

        test('it has a submit button',() => {
            let submitButton = document.querySelector('#submit-form');
            expect(submitButton).toBeTruthy()
        })

    })

 })