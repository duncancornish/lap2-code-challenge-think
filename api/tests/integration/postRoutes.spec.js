describe('posts endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    })

    it('should return a list of all posts in database', async () => {
        const res = await request(api).get('/posts');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(3);
    });

    it('should create a new post', async () => {
        const res = await request(api)
            .post('/posts')
            .send({
                title: 'New Post',
                pseudonym: 'Test User 1'
            })
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("id");
        expect(authRes.body.posts.length).toEqual(3);
    });

    it('should not create a new post with content over 255 characters', async () => {
        const res = await request(api)
            .post('/posts')
            .send({
                title: 'Long Post',
                authorName: 'Long Poster',
                abstract: "YyYXJHN8ovVJHDYn7kOl1griWoH8rw3Q7vaAxeyopIDG2NTZRIwQbhY7ykbuwZE2ohowLvUcxDMncPX6hwkrYLX4CrP5Y3nKsb6A9xfOFSsKTYvpmFeTSkDYkJNeszfeNF7I2iQqxWfWSYWH5PRYTLJUnU9Lq8rq0LKi24BkG5OWYWO3W0Nt2YCsbuJYamiWzPutJVfZ4oDg9dQUBy64d6a5tGCrNgSfyPzeg2wWgPHBLGfDEZPYO1zGsumYIr8Wh9l4cpyr5zuozn6kBkEz5mXfiZsUiKnjDp2BxaoU2ZEitJBiJ86KNOYV7NaqltNEBIkSfCrwRZwwhUfUj3h1W1PVGfs3hTFjA7xw0a6ZeMGZCEfKJ7w4wloiR3WVk6JpEnSNJuuf6eA4azTDiTCPkTRprSg0yLZwHuN3WiFg3wq4AsYadddbmWIKxxMszxSyRo9ZmZEcqkicpyTXPvfnGQTaF4SLoynBT3Soy1BG4BGWu7D9R7MbI"
            })
        expect(res.statusCode).toEqual(422);
        expect(res.body).toHaveProperty("err");

        const bookRes = await request(api).get('/posts/4');
        expect(bookRes.statusCode).toEqual(404);
    });
})
