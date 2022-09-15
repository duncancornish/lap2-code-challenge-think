const Post = require('../../../models/Post');

jest.mock('../../../models/Post');//?

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

describe('Post', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('findById', () => {
        test('it resolves with post on successful db query', async () => {
            let postData = { id: 1, title: 'Test Post' }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ postData] });
            const result = await Post.findById(1);
            expect(result).toBeInstanceOf(Post)
        })
    });

    describe('create', () => {
        test('it resolves with post on successful db query', async () => {
            let postData = { title: 'Test Post', pseudonym: 'Test Psoter', content: 'test' }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...postData, id: 1 }] });
            const result = await Post.create(postData);
            expect(result).toHaveProperty('id')
        })
    });
    
})
