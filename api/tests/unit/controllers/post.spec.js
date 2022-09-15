const postsController = require('../../../controllers/posts.js')
const Post = require('../../../models/Post.js');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('posts controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('index', () => {
        test('it returns posts with a 200 status code', async () => {
            jest.spyOn(Post, 'all', 'get')
                 .mockResolvedValue(['post1', 'post2']);
            await postsController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['post1', 'post2']);
        })
    });

    describe('show', () => {
        test('it returns a post with a 200 status code', async () => {
            let testPost = {
                id: 1, title: 'Test Post', 
                pseudonym: 'Test Poster',
                content: 'testing'
            }
            jest.spyOn(Post, 'findById')
                .mockResolvedValue(new Post(testPost));
                
            const mockReq = { params: { id: 1 } }
            await postsController.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Post(testPost));
        })
    });

    describe('create', () => {
        test('it returns a new post with a 201 status code', async () => {
            let testPost = {
                id: 2, title: 'Test Post', 
                pseudonym: 'Test Poster',
                content: 'testing'
            }
            jest.spyOn(Post, 'create')
                .mockResolvedValue(new Post(testPost));
                
            const mockReq = { body: testPost }
            await postsController.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Post(testPost));
        })
    });    
})
