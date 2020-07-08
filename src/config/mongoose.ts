import mongoose from 'mongoose'

export const makeConnection = async () => {
    try {
        const db = await mongoose.connect(`mongodb://localhost/faztapi`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(db.connection.host)
    } catch (error) {
        console.log(error)
    }

}