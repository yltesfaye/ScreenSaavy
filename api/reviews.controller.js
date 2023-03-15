import ReviewDAO from "../dao/reviewsDAO.js"

export default class ReviewsController {
    static async apiPostReview(req, res, next) {
        try{
            const movieId = req.body.movieId
            const review = req.body.review
            const user = req.body.user

            const reviewResponse = await ReviewDAO.addReview(
                movieId, 
                user,
                review
            )

            res.json({status: "sucess"})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async apiGetReview(req, res, next) {
        try{
            let id = req.params.id || {}
            let review = await ReviewDAO.getReview(id)
            if(!review) {
                res.status(404).json({error: "Not Found"})
                return
            }

            res.json(review)

        } catch(e) {
            console.log(`api, ${e}`)
            res.status(500).json({error: e})
        }
    }

    static async apiUpdateReview(req, res, next) {
        try{
            const reviewId = req.params.id
            const review = req.body.review
            const user = req.body.user

            const reviewResponse = await ReviewDAO.updateReview(
                reviewId,
                user,
                review
            )

            var {error} = reviewResponse
            if(error) {
                res.status(400).json({error})
            }

            if(reviewResponse.modifiedCount === 0) {
                throw new Error(
                    "unable to update review",
                )
            }
            res.json({status: "success"})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async apiDeleteReview(req, res, next) {
        try{
            const reviewId = req.params.id
            const reviewResponse = await ReviewDAO.deleteReview(reviewId)
            res.json({status: "success"})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }
    
    static async apiGetReviews(req, res, next) {
        try{
            let id = req.params.id || {}
            let reviews = await ReviewDAO.getReviewByMovieId(id) 
            if(!reviews) {
                res.status(404).json({error: "Not found"})
                return
            }

            res.json(reviews)
        } catch(e) {
            console.log(`api, ${e}`)
            res.status(500).json({error: e})
        }
    }
}

