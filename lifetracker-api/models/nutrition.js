const {UnauthorizedError, BadRequestError, NotFoundError} = require("../utils/errors")
const db = require("../db")

class Nutrition{
    static async makeNutritionUser(nutrition){
        return {
            user_id: nutrition.user_id,
            name: nutrition.email,
            category: nutrition.category,
            calories: nutrition.first_name,
            image_url: nutrition.last_name
        }
    }
    static async createNutrition(nutrition){
        const requiredFields = ["category", "calories", "image_url", "name"]
        requiredFields.forEach(field => {
            if(!nutrition.hasOwnProperty(field)){
                throw new BadRequestError(`missing ${field} in request body.`)
            }
        })
        const result = await db.query(`
            INSERT INTO nutrition (
                user_id,
                name,
                category,
                calories,
                image_url
            )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING user_id, name, category, calories, image_url;
       `, [ nutrition.user_id, nutrition.name, nutrition.category, nutrition.calories, nutrition.image_url])

       const nutritionUser = result.rows
        
       return Nutrition.makeNutritionUser(nutritionUser)

    }
    static async fetchNutritionById(nutritionId){
        if(!nutritionId){
            throw new NotFoundError()
        }

        const query = `SELECT nutrition.name, nutrition.category, nutrition.calories, nutrition.image_url
        FROM nutrition WHERE nutrition.id = $1`

        const result = await db.query(query, [nutritionId])

        return result.rows
    }
    static async listNutritionForUser(user){
        if(!user){
            throw new BadRequestError("No email provided")
        }

        const userId = await db.query( `SELECT id 
        FROM users
        WHERE email = $1;
        `,
        [user.email]
        )

        const id = userId.rows[0].id

        const query = `SELECT * FROM nutrition WHERE user_id = $1`

        const result = await db.query(query, [id])

        const nutrition = result.rows

        return nutrition
    }

}

module.exports = Nutrition;