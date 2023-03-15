import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId


let reviews

export default class ReviewDAO {
    static async injectDB(conn) {
        if(reviews) {
            return
        }
        try {
            reviews = await conn.db("reviews").collection("reviews")
        } catch(e) {
            console.error(`Unable to establih collection handles in userDAO: ${e}`)
        }
    }

    static async addReview(movieId, user, review) {
        try{
            const reviewDoc{
                movieId: movieId,
                user: user,
                review: review,
            }

            return await reviews.insertOne(reviewDoc)
        } catch(e) {
            console.error(`Unable to post review: ${e}`)
            return { error: e}
        }
    }
}