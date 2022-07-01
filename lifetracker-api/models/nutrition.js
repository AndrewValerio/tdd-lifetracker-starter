const {UnauthorizedError, BadRequestError, NotFoundError} = require("../utils/errors")
const db = require("../db")

class Nutrition{
    static async createNutrition(nutrition, user){
        const requiredFields = ["name", "category", "calories", "image_url"]
        requiredFields.forEach(field => {
            if(!credentials.hasOwnProperty(field)){
                throw new BadRequestError(`missing ${field} in request body.`)
            }
        })
        const result = await db.query(`
            INSERT INTO nutrition (
                name,
                category,
                calories,
                image_url
            )
            VALUES ($1, $2, $3, $4)
            RETURNING user_id, name, category, calories, image_url;
       `, [ nutrition.name, nutrition.category, nutrition.calories, nutrition.image_url])
        
       return result

    }
    static async fetchNutritionById(nutritionId){
        if(!nutritionId){
            throw new NotFoundError()
        }

        const query = `SELECT nutrition.category, nutrition.calories, nutrition.image_url
        FROM users AS u
        INNER JOIN nutrition ON u.id = nutrition.user_id`

        const result = await db.query(query)

        return result
    }
    static async fetchNutritionForUser(user){
        console.log(user)
        const result = await db.query( `SELECT nutrition.category, nutrition.calories, nutrition.image_url, user_id 
        FROM nutrition 
        WHERE user_id  = (SELECT id FROM users WHERE username = $1);
        `,
        [user.username]
        )

        return result
    }

}

module.exports = Nutrition;