const db = require('../dbConfig/init');

module.exports = class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.pseudonym = data.pseudonym;
        this.content = data.content;
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query('SELECT * FROM posts;');
                let posts = postData.rows.map(b => new Post(b));
                resolve (posts);
            } catch (err) {
                reject('Post not found');
            }
        });
    };

    
    
    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM posts WHERE post.id = $1;`, [ id ]);
                let post = new Post(postData.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    };
    
    static async create({title, pseudonym, content}){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`INSERT INTO posts (title, pseudonym, content) VALUES ($1, $2, $3) RETURNING *;`, [ title, pseudonym, content ]);
                let newPost = new Post(postData.rows[0])
                resolve (newPost);
            } catch (err) {
                reject('Post could not be created');
            }
        });
    };

};
